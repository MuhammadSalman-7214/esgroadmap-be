import jwt from 'jsonwebtoken';
const authenticateUser = async (req, res, next) => {
    const { accessToken } = req.cookies;
    if (!accessToken) {
        res.status(403).json({ message: 'Authentication required' });
        return;
    }
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            res.status(403).json({ message: 'Access token is expired' });
        }
        req.user = decoded;
        next();
    });
};
export default authenticateUser;
