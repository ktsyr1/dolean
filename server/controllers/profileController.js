import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Get user profile
export const getProfile = async (req, res) => {
    const token = req.header('x-auth-token')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Authentication token is missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update user profile
export const updateProfile = async (req, res) => {
    const token = req.header('x-auth-token')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Authentication token is missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (user) {
            const user = await User.updateOne(decoded.id, {
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email
            });

            res.json(user);
        } else res.status(401).json({ message: 'Authentication token is missing' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
