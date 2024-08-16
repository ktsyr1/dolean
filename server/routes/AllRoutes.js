import express from 'express';
import auth from "./authRoutes.js"
import users from "./userRoutes.js"
import student from "./student.js"
import DefCourses from "./def-courses.js"
import Courses from "./Courses.js"
import userDetails from "./userDetails.js"
import test from "./test.js"
import { AdminStates } from '../controllers/admin.js';
import { isAdmin } from '../middleware/auth.js';
const app = express();
// localhost:5000/api/auth

app.use('/test', test)
app.use('/auth', auth); //ok
app.use('/student', student); //ok
app.get('/admin', isAdmin, AdminStates);
app.use('/admin/users', users);
app.use('/admin/users-details', userDetails);
app.use('/admin/courses', Courses);
app.use('/admin/def-courses', DefCourses);

export default app;