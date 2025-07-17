export const emailContent = (name) => `
  <p>Hello! ${name}</p>
  <p>Thank you for signing up! Please click the button below to activate your account:</p>
  <a href="${process.env.CLIENT_URL}/auth/activate-account">Activate Account</a>
`;
