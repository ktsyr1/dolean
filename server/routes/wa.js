import express from 'express'
import dynamicControllers from '../controllers/dynamic.js';
import Courses from '../models/Courses.js';
import Wa from '../controllers/wa.js';

const app = express.Router();
const CoursesController = new dynamicControllers(Courses)

app.post('/', Wa)

app.get('/courses/:id', CoursesController.get)

export default app