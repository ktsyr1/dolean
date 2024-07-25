import express from 'express';
import User from '../models/User.js';
const app = express();

import { isAdmin, isUser } from '../middleware/auth.js';
import dynamicControllers from '../controllers/dynamic.js';
import Courses from '../models/Courses.js';
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
// -----
const Courses_Controllers = new dynamicControllers(Courses);

app.get('/Controllers',isUser, Courses_Controllers.getAll);
app.post('/Controllers', isAdmin, Courses_Controllers.create);
app.get('/Controllers/:id', Courses_Controllers.get);
app.put('/Controllers/:id', Courses_Controllers.update);
app.delete('/Controllers/:id', Courses_Controllers.remove);

export default app;