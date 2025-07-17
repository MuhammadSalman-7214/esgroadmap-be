const otpStore = {};
const otpTimeouts = {};
export const saveOtp = (email, otp, expiresIn) => {
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
export const getOtp = (email) => {
    const entry = otpStore[email];
    if (!entry)
        return undefined;
    if (Date.now() > entry.expiresAt) {
        deleteOtp(email);
        return undefined;
    }
    return {
        ...entry,
        timeoutId: otpTimeouts[email],
    };
};
export const deleteOtp = (email) => {
    delete otpStore[email];
    if (otpTimeouts[email]) {
        clearTimeout(otpTimeouts[email]);
        delete otpTimeouts[email];
    }
};
export const verifiedUser = new Map();
