import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const initIslogin = async (req, res, next) => {
    const token = req.header('x-auth-token')
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        // token = token.replace("Bearer ","")
        // verify token
        // jwt.verify(token, Secret, options)
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded);
        // end
        let user = await User.findOne({ _id: decoded.userId }, 'email role')
        console.log(user);
        req.user = decoded;
        return user
    } catch (error) {
        // res.status(400).json({ message: 'Invalid token.' });
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