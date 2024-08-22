import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js';

export default async function login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {

        // new token
        // jwt.sign(payload, Secret, options)
        const token = jwt.sign(
            { userId: user._id, email: user.email }, // payload
            process.env.JWT_SECRET, // Secret
            { expiresIn: "24h" } // options
        );

        res.cookie('authorization', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure in production
            maxAge: 3600000 // 1 hour in milliseconds
        });
        // end
        let init = { success: true, token }
        let isAdmin = user.role === "admin"
        if (isAdmin) init.isAdmin = isAdmin

        res.json(init);
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
};
