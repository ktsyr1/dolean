import express from 'express'
import dynamicControllers from '../contrllers/dynamic.js';
import DefCourses from '../models/DefCourses.js';
import { isAdmin } from '../middleware/auth.js';
const app = express.Router();
const defCoursesController = new dynamicControllers(DefCourses)

app.get('/',isAdmin,defCoursesController.getAll)
app.get('/:id',isAdmin,defCoursesController.get)
app.put('/:id',isAdmin,defCoursesController.update)
app.delete('/:id',isAdmin,defCoursesController.remove)