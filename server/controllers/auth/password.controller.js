// controllers/authController.js 

import User from "../../models/User.js";

export const resetPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Generate a reset token (for simplicity, a random string is used here)
        user.resetPasswordToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        user.resetPasswordExpires = Date.now() + (3600000 * 24 * 2); // 1 hour
        await user.save();
        // Normally, you would send an email with the reset token here
        res.status(200).json({ message: 'Password reset token generated', token: user.resetPasswordToken });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const setNewPassword = async (req, res) => {
    const { token, newPassword } = req.body;
    try {
        const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });
        if (!user) {
            return res.status(400).json({ message: 'Password reset token is invalid or has expired.' });
        }
        user.password = newPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();
        res.status(200).json({ message: 'Password has been updated.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};