interface OtpEntry {
  otp: string;
  expiresAt: number;
  timeoutId: NodeJS.Timeout;
}

const otpStore: Record<string, Omit<OtpEntry, 'timeoutId'>> = {};
const otpTimeouts: Record<string, NodeJS.Timeout> = {};

export const saveOtp = (email: string, otp: string, expiresIn: Date) => {
  otpStore[email] = {
    otp,
    expiresAt: expiresIn.getTime(),
  };
  if (otpTimeouts[email]) {
    clearTimeout(otpTimeouts[email]);
  }
  const timeLeft = expiresIn.getTime() - Date.now();
  otpTimeouts[email] = setTimeout(() => {
    delete otpStore[email];
    delete otpTimeouts[email];
  }, timeLeft);
};

export const getOtp = (email: string): OtpEntry | undefined => {
  const entry = otpStore[email];
  if (!entry) return undefined;

  if (Date.now() > entry.expiresAt) {
    deleteOtp(email);
    return undefined;
  }
  return {
    ...entry,
    timeoutId: otpTimeouts[email],
  };
};

export const deleteOtp = (email: string) => {
  delete otpStore[email];
  if (otpTimeouts[email]) {
    clearTimeout(otpTimeouts[email]);
    delete otpTimeouts[email];
  }
};

export const verifiedUser = new Map<string, boolean>();
