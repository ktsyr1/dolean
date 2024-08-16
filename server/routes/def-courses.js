import express from 'express'
import DefCourses from '../models/DefCourses.js';
import { isAdmin } from '../middleware/auth.js';
import dynamicControllers from '../controllers/dynamic.js';
import { defCoursesPreprocessing } from '../controllers/defCourses.js';
const app = express();
const defCoursesController = new dynamicControllers(DefCourses)

app.get('/', isAdmin, defCoursesController.getAll)
app.get('/:id', isAdmin, defCoursesController.get)
app.put('/:id', isAdmin, defCoursesPreprocessing)
app.delete('/:id', isAdmin, defCoursesController.remove)

export default app