import express from 'express';
import { createUser } from '../controllers/userController.js';
import User from '../models/User.js';
import Courses from '../models/Courses.js';
import { isAdmin } from '../middleware/auth.js';
import dynamicControllers from '../controllers/dynamic.js';


const app = express.Router();

const coursesController = new dynamicControllers(Courses);


app.get('/',isAdmin,coursesController.getAll);
app.get('/:id',isAdmin,coursesController.get);
app.get('/',isAdmin,coursesController.remove);






//.......
app.post('/users', createUser);


 

export default app;