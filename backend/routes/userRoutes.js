import express from 'express'; 
import Courses from '../models/Courses.js';
import { isAdmin } from '../middleware/auth.js';
import dynamicControllers from '../controllers/dynamic.js'; 

const app = express.Router();

const coursesController = new dynamicControllers(Courses); 

app.get('/', isAdmin, coursesController.getAll);
app.get('/:id', isAdmin, coursesController.get);
app.delete('/:id', isAdmin, coursesController.remove);  

export default app;