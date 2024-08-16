import express from 'express'
import dynamicControllers from '../controllers/dynamic.js';
import DefCourses from '../models/DefCourses.js';
import { isLogin } from '../middleware/auth.js';
import Courses from '../models/Courses.js';
import { getProfile, updateProfile } from '../controllers/profileController.js';
import { createUserDetails } from '../controllers/userDetails.js';

const app = express.Router();
const CoursesController = new dynamicControllers(Courses)
const DefCoursesController = new dynamicControllers(DefCourses)

app.get('/courses', CoursesController.getAll)
app.get('/courses/:id', CoursesController.get)
app.post('/def-courses', DefCoursesController.create)
app.post('/details', createUserDetails)


app.get('/profile', isLogin, getProfile);
app.put('/profile', isLogin, updateProfile);

export default app