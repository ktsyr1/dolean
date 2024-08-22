import express from 'express';
import auth from "./authRoutes.js"
import student from "./student.js"
import admin from "./admin.js"
const app = express();
// localhost:5000/api/auth

app.use('/auth', auth); //ok
app.use('/student', student); //ok
app.use('/admin', admin); //ok


export default app;