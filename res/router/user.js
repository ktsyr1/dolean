import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// إنشاء مستخدم جديد
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// الحصول على جميع المستخدمين
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// الحصول على مستخدم واحد بواسطة ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// تحديث مستخدم بواسطة ID
router.put('/:id', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.name = name;
        user.email = email;
        user.password = password;

        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// حذف مستخدم بواسطة ID
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
