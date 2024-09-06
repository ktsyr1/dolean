import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js';

// دالة لإنشاء رموز الوصول والتحديث
const generateTokens = (userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
    return { token, refreshToken };
};

export default async function login(req, res) {
    console.log( req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        const { token, refreshToken } = generateTokens(user._id);

        await user.save({ refreshToken });
        res.cookie('authorization', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure in production
            maxAge: 3600000 // 1 hour in milliseconds
        });
        // end
        let init = { success: true, token, refreshToken }
        let isAdmin = user.role === "admin"
        if (isAdmin) init.isAdmin = isAdmin

        res.json(init);
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
};

export async function RefreshToken(req, res) {
    const { refreshToken } = req.body;
    if (!refreshToken)
        return res.status(401).json({ message: 'Refresh Token is required' });


    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const user = await User.findOne({ _id: decoded.userId, refreshToken });

        if (!user) {
            return res.status(403).json({ message: 'Invalid refresh token' });
        }

        const { accessToken, refreshToken: newRefreshToken } = generateTokens(user._id);

        // تحديث رمز التحديث في قاعدة البيانات
        user.refreshToken = newRefreshToken;
        await user.save();

        res.json({ accessToken, refreshToken: newRefreshToken });
    } catch (error) {
        res.status(403).json({ message: 'Invalid refresh token' });
    }
}

export async function logout(req, res) {
    const { refreshToken } = req.body;
    try {
        const user = await User.findOne({ refreshToken });
        if (user) await user.save({ refreshToken: null });

        res.json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}