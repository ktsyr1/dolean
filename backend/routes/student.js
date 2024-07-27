import express from 'express'
import dynamicControllers from '../controllers/dynamic.js';
import DefCourses from '../models/DefCourses.js';
import { isAdmin, isLogin } from '../middleware/auth.js';
import Courses from '../models/Courses.js';
import UserDetails from '../models/UserDetails.js';
import { getProfile, updateProfile } from '../controllers/profileController.js';
const app = express.Router();
const CoursesController = new dynamicControllers(Courses)
const DefCoursesController = new dynamicControllers(DefCourses)
const UserDetailsController = new dynamicControllers(UserDetails)

app.get('/', isAdmin, CoursesController.getAll)
app.post('/def-courses', isAdmin, DefCoursesController.create)
app.post('/details', isAdmin, UserDetailsController.create)


app.get('/profile', isLogin, getProfile);
app.put('/profile', isLogin, updateProfile);

export default app