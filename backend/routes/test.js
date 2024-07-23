import express from 'express'; 
import User from '../models/User.js';
const app = express();

import { isAdmin, isUser } from '../middleware/auth.js';
import dynamicControllers from '../controllers/dynamic.js';
// new dynamicControllers(models مثلا User) 
const userController = new dynamicControllers(User);

// حماية api [isLogin, isUser, isAdmin]
// فقط admin
app.get('/isAdmin', isAdmin, userController.getAll);
// فقط المستخدم
app.get('/isUser', isUser, userController.getAll);
// طلب قائمة مع فلتر

// linl '/app?role=user'
app.get('/app', isUser, userController.getAll);
// طلب عنصر عبر id
app.get('/app/:id', isUser, userController.get);

// البيانات تأتي عبر req.body


export default app;