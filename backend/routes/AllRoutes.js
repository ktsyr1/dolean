import express from 'express';
import auth from "./authRoutes.js"
import users from "./userRoutes.js"
import Courses from "./Courses.js"
import test from "./test.js"
const app = express();
// localhost:5000/api/auth

app.use('/test', test)
app.use('/auth', auth); //ok
app.use('/users', users);
app.use('/Courses', Courses);

export default app;