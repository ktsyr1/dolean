import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const initIslogin = async (req) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) throw new Error('Access denied. No token provided.');

    const token = authHeader.split(' ')[1]; // Extract token after "Bearer"

    if (!token) throw new Error('Access denied. Invalid token format.');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId, 'email role')
        if (!user) throw new Error('User not found.');

        req.user = user;
        return user;
    } catch (error) {
        throw new Error('Invalid token.');
    }
};

const isLogin = async (req, res, next) => {
    try {
        await initIslogin(req);
        next();
    } catch (error) {
        res.status(403).json({ states: false, message: error.message });
    }
};

const isUser = async (req, res, next) => {
    try {
        const user = await initIslogin(req);
        if (user.role !== 'user') {
            throw new Error('Access denied. User role required.');
        }
        next();
    } catch (error) {
        res.status(403).json({ states: false, message: error.message });
    }
};

const isAdmin = async (req, res, next) => {
    try {
        const user = await initIslogin(req);
        if (user.role !== 'admin') {
            throw new Error('Access denied. Admin role required.');
        }
        next();
    } catch (error) {
        res.status(403).json({ states: false, message: error.message });
    }
};

export { isLogin, isUser, isAdmin };