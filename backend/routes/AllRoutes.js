import express from 'express';
import auth from "./authRoutes.js"
import users from "./userRoutes.js" 
import DefCourses from "./userRoutes.js" 
import test from "./test.js"
const app = express();
// localhost:5000/api/auth

app.use('/test', test)
app.use('/auth', auth); //ok
app.use('/admin/users', users);
app.use('/admin/def-courses', DefCourses);

export default app;