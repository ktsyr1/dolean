import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Get user profile
export const getProfile = async (req, res) => {
    const token = req.header('authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Authentication token is missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId, "email name phone")
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update user profile
export const updateProfile = async (req, res) => {
    const token = req.header('authorization')?.replace('Bearer ', '');

    if (!token) return res.status(401).json({ message: 'رمز التحقق مفقود', state: false });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if (user) {
            // تحقق إذا كان البريد الإلكتروني الجديد مستخدمًا من قبل مستخدم آخر
            const emailExists = await User.findOne({ email: req.body.email });

            if (emailExists && emailExists._id.toString() !== user._id.toString())
                return res.status(400).json({ message: 'هذا البريد الإلكتروني مستخدم بالفعل', state: false });


            // تحديث بيانات المستخدم
            const updatedUser = await User.updateOne(
                { _id: decoded.userId },
                {
                    name: req.body.name,
                    phone: req.body.phone,
                    email: req.body.email
                }
            );

            res.json({ message: 'تم تحديث ملفك الشخصي بنجاح.', state: true });
        } else {
            res.status(401).json({ message: 'رمز التحقق غير صالح' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
