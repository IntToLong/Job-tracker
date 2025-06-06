
import { z } from 'zod';

export const LoginSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Please provide your email' })
		.email('Invalid email'),
	password: z
		.string()
		.min(1, { message: 'Please provide your password' }),
});


export const SignUpSchema = z.object({
	name: z
		.string()
		.min(1, { message: 'Name is required' })
		.min(2, 'Name must be at least 2 characters'),
	email: z
		.string()
		.min(1, { message: 'Email is required' })
		.email('Invalid email'),
	password: z
		.string()
		.min(1, { message: 'Password is required' })
		.min(6, { message: 'Password must be at least 6 characters' }),
});