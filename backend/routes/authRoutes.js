import express from 'express';
import { login } from '../controllers/auth/login.controller.js';
import { singup } from '../controllers/auth/singup.controllers.js';

const router = express.Router();

router.put('/', login);
router.post('/',singup);

export default router;