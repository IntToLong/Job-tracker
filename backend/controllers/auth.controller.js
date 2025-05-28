import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/user.modal';

export const registerUser = async (req, res, next) => {
	try {
		const { name, email, password } = req.body;

		const existingUser = await User.findOne({ email: email });
		if (existingUser) {
			return res.status(403).json({
				message: 'Email already used',
			});
		}

		const user = await User.create({ name, email, password });

		const token = jwt.sign(
			{ id: user._id, email: user.email },
			process.env.JWT_SECRET,
			{
				expiresIn: '30d',
			}
		);

		res.status(201).json({
			message: 'User registered and logged in',
			accessToken: token,
			user: {
				id: user.id,
				name: user.name,
				email: user.email,
			},
		});
	} catch (error) {
		next(error);
		// res.status(500).json({
		// 	error: error,
		// });
	}
};

export const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		const existingUser = await User.findOne({ email: email });

		if (!existingUser) {
			return res.status(404).json({
				message: 'User is not registered',
			});
		}

		const isCorrectPassword = await bcrypt.compare(password, existingUser.password);

		if (!isCorrectPassword) {
			return res.status(401).json({
				message: 'Authentication Failed',
			});
		}

		let jwtToken = jwt.sign(
			{ id: existingUser._id, email: existingUser.email },
			process.env.JWT_SECRET,
			{
				expiresIn: '30d',
			}
		);

		res.status(200).json({
			message: 'Login successful',
			accessToken: jwtToken,
			user: {
				id: existingUser.id,
				name: existingUser.name,
				email: existingUser.email,
			},
		});
	} catch (error) {
		next(error);
		// return res.status(401).json({
		// 			message: err.message,
		// 			success: false,
		// 		});
	}
};
