import express from 'express';
import { isAdmin } from '../middleware/auth.js';
import dynamicControllers from '../controllers/dynamic.js';
import UserDetails from '../models/UserDetails.js';
import { UserDetailsFilter } from '../controllers/userDetails.js';

const app = express.Router();

const UserDetailsController = new dynamicControllers(UserDetails);

app.get('/', isAdmin, UserDetailsController.getAll);
app.get('/:id', isAdmin, UserDetailsController.get);
app.get('/filterByCourse/:id',  UserDetailsFilter);
app.delete('/:id', isAdmin, UserDetailsController.remove);

export default app;