import express from 'express';
const app = express();

import { isAdmin, isUser } from '../middleware/auth.js';
import dynamicControllers from '../controllers/dynamic.js';
import Courses from '../models/Courses.js';
const Courses_Controllers = new dynamicControllers(Courses);

app.get('/', isAdmin, Courses_Controllers.getAll);
app.post('/', isAdmin, Courses_Controllers.create);
app.get('/:id', isAdmin, Courses_Controllers.get);
app.put('/:id', isAdmin, Courses_Controllers.update);
app.delete('/:id', isAdmin, Courses_Controllers.remove);

export default app;