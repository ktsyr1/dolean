import express from 'express';
import dynamicControllers from '../controllers/dynamic.js';
import Courses from '../models/Courses.js';
import { isAdmin } from '../middleware/auth.js';


const app = express.Router();

const CoursesController = new dynamicControllers(Courses);

app.get('/',isAdmin,CoursesController.getAll);


app.post('/',isAdmin,CoursesController.create);

app.get('/:id',isAdmin,CoursesController.get);
app.put('/:id',isAdmin,CoursesController.update);
app.delete('/:id',isAdmin,CoursesController.remove);


