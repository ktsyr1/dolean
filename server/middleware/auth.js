import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const initIslogin = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) return res.status(401).json({ message: 'Access denied. No token provided.' });

    const token = authHeader.split(' ')[1]; // استخراج التوكن بعد "Bearer"

    if (!token) return res.status(401).json({ message: 'Access denied. Invalid token format.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId, 'email role')
        if (!user) return res.status(404).json({ message: 'User not found.' });

        req.user = user;
        return user;
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token.' });
    }
};


const isLogin = async (req, res, next) => {
    let user = await initIslogin(req, res, next)
    if (user) {
        next();
    } else {
        res.status(403).json({ states: false, message: 'Access denied. User role required.' });
    }
};

const isUser = async (req, res, next) => {
    let user = await initIslogin(req, res, next)
    if (user && user.role === 'user') {
        next();
    } else {
        res.status(403).json({ states: false, message: 'Access denied. User role required.' });
    }
};

const isAdmin = async (req, res, next) => {
    let user = await initIslogin(req, res, next)
    if (user && user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ states: false, message: 'Access denied. Admin role required.' });
    }
};

export { isLogin, isUser, isAdmin };