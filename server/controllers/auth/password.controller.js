// controllers/authController.js import User from "../../models/User.js";
import nodemailer from 'nodemailer';
import User from '../../models/User.js';
import bcrypt from 'bcrypt';

export const resetPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'المستخدم غير موجود', state: false });
        }

        // Generate a reset token
        user.resetPasswordToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        user.resetPasswordExpires = Date.now() + (3600000 * 24 * 2); // 2 days
        await user.save();

        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.Email,
                    pass: process.env.Pass
                }
            });

            const resetUrl = `${process.env.APP}/auth?route=newPassword&token=${encodeURIComponent(user.resetPasswordToken)}`;
            const content = `
                <center>
                    <b>نسيت كلمة السر</b><br/>
                    <p>لقد طلبت إعادة تعيين كلمة المرور لحسابك. إذا كنت قد طلبت هذا، يرجى الضغط على الزر أدناه:</p>
                    <a href="${resetUrl}" style="background-color: #0292ab; padding: 10px; color: #fff; text-decoration: none; margin: 0 auto; width: 150px; text-align: center; display: block; font-size: 20px;">التحقق الآن</a>
                    <p>إذا لم تطلب ذلك، يرجى تجاهل هذه الرسالة.</p>
                </center>
            `;

            const mailOptions = {
                from: process.env.Email,
                to: user.email,
                subject: "نسيت كلمة السر",
                html: content
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'تم إرسال رمز إعادة تعيين كلمة المرور إلى البريد الإلكتروني', state: true });
        } catch (error) {
            res.status(500).json({ message: 'فشل في إرسال البريد الإلكتروني', error: error.message, state: false });
        }
    } catch (error) {
        res.status(500).json({ message: 'حدث خطأ أثناء معالجة الطلب', error: error.message, state: false });
    }
};


export const setNewPassword = async (req, res) => {
    const { token, newPassword } = req.body;
    let query = { resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } }
    try {
        const user = await User.findOne(query);
        if (!user) return res.status(400).json({ message: "انتهت صلاحيته هذا الرابط", state: false });

        const password = await bcrypt.hash(newPassword, 10);

        let data = { password, resetPasswordToken: "", resetPasswordExpires: undefined }
        let app = await User.updateOne(query, data,)
        app
        res.status(200).json({ message: 'تم تعيين كلمة المرور بنجاح.', state: true });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};