import express from 'express';
import { createUser } from '../controllers/userController.js';
import User from '../models/User.js';
import Courses from '../models/Courses.js';
import { isAdmin } from '../middleware/auth.js';
import dynamicControllers from '../controllers/dynamic.js';


const app = express.Router();

const userController = new dynamicControllers(User);


app.get('/',isAdmin,userController.getAll);
app.get('/:id',isAdmin,userController.get);
app.delete('/:id',isAdmin,userController.remove);






//.......
app.post('/users', createUser);


 

export default app;