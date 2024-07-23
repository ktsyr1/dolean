import express from 'express';
import auth from "./authRoutes.js"
import users from "./userRoutes.js"
import test from "./test.js"
const app = express();


app.use('/test', test)
app.use('/auth', auth); //ok
app.use('/users', users);

export default app;