import express from 'express';
import { login } from '../controllers/auth/login.controller.js';

const router = express.Router();

router.put('/', login);
// router.post('/', register); 

export default router;