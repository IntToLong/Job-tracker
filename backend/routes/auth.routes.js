import { Router } from 'express';
import { registerUser, login } from '../controllers/auth.controller';
import {
	registerValidation,
	loginValidation,
} from '../middleware/authvalidation.middleware';

const router = Router();

router.post('/register', registerValidation, registerUser);

router.post('/login', loginValidation, login);

export default router;
