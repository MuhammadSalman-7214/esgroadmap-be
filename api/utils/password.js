import bcrypt from 'bcryptjs';
export async function comparePasswords(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}
export async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}
