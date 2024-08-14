import express from 'express';
import auth from "./authRoutes.js"
import users from "./userRoutes.js" 
import student from "./student.js" 
import DefCourses from "./def-courses.js" 
import Courses from "./Courses.js" 
import userDetails from "./userDetails.js" 
import test from "./test.js"
const app = express();
// localhost:5000/api/auth

app.use('/test', test)
app.use('/auth', auth); //ok
app.use('/student', student); //ok
app.use('/admin/users', users);
app.use('/admin/users-details', userDetails);
app.use('/admin/courses', Courses);
app.use('/admin/def-courses', DefCourses);

export default app;