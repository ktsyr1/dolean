import express from 'express';
import login from '../controllers/auth/login.controller.js';
import { signup } from '../controllers/auth/singup.controllers.js';
import { resetPassword, setNewPassword } from '../controllers/auth/password.controller.js';
import { isAdmin } from '../middleware/auth.js';

const router = express.Router();
// /api/auth/
// localhost:5000/api/auth

router.get('/', isAdmin, (req, res) => res.json({ isAdmin: true }));
router.put('/', login);
router.post('/', signup);
router.post('/reset-password', resetPassword);
router.post('/new-password', setNewPassword);
export default router;