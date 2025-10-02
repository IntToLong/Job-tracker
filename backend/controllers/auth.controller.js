import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/user.modal.js';

export const registerUser = async (req, res, next) => {
	try {
		const { name, email, password } = req.body;

		const existingUser = await User.findOne({ email: email });
		if (existingUser) {
			return res.status(403).json({
				message: 'Email already used',
			});
		}

		const user = await User.create({
			name: name,
			email: email,
			password: password,
		});

		const accessToken = jwt.sign(
			{ id: user._id, email: user.email },
			process.env.JWT_ACCESS_SECRET,
			{
				expiresIn: '15m',
			}
		);
		const refreshToken = jwt.sign(
			{ id: user._id, email: user.email },
			process.env.JWT_REFRESH_SECRET,
			{
				expiresIn: '30d',
			}
		);

		user.refreshToken = refreshToken;
		await user.save();

		res.cookie('jwt', refreshToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
			maxAge: 30 * 24 * 60 * 60 * 1000,
		});

		res.status(201).json({
			message: 'User registered and logged in',
			accessToken: accessToken,
			user: {
				id: user.id,
				name: user.name,
				email: user.email,
			},
		});
	} catch (error) {
		next(error);
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

		const isCorrectPassword = await bcrypt.compare(
			password,
			existingUser.password
		);

		if (!isCorrectPassword) {
			return res.status(401).json({
				message: 'Authentication Failed',
			});
		}

		const accessToken = jwt.sign(
			{ id: existingUser._id, email: existingUser.email },
			process.env.JWT_ACCESS_SECRET,
			{
				expiresIn: '15m',
			}
		);

		const refreshToken = jwt.sign(
			{ id: existingUser._id, email: existingUser.email },
			process.env.JWT_REFRESH_SECRET,
			{
				expiresIn: '30d',
			}
		);

		existingUser.refreshToken = refreshToken;
		await existingUser.save();

		res.cookie('jwt', refreshToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
			maxAge: 30 * 24 * 60 * 60 * 1000,
		});

		res.status(200).json({
			message: 'Login successful',
			accessToken: accessToken,
			user: {
				id: existingUser.id,
				name: existingUser.name,
				email: existingUser.email,
			},
		});
	} catch (error) {
		next(error);
	}
};

export const logout = async (req, res, next) => {
	try {
		const refreshToken = req.cookies?.jwt;
		if (refreshToken) {
			await User.updateOne({ refreshToken }, { $unset: { refreshToken: 1 } });
		}

		res.clearCookie('jwt', {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
		});

		res.status(200).json({ message: 'Logged out successfully' });
	} catch (error) {
		next(error);
	}
};

export const refreshToken = async (req, res, next) => {
	try {
		const refreshToken = req.cookies.jwt;
		if (!refreshToken) {
			return res.status(401).json({ message: 'Refresh token required' });
		}

		const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

		const user = await User.findOne({ _id: decoded.id, refreshToken });

		if (!user) {
			return res.status(403).json({ message: 'Invalid refresh token' });
		}
		const accessToken = jwt.sign(
			{ id: user._id, email: user.email },
			process.env.JWT_ACCESS_SECRET,
			{ expiresIn: '15m' }
		);

		res.status(200).json({ accessToken });
	} catch (error) {
		if (error.name === 'TokenExpiredError') {
			return res.status(403).json({ message: 'Refresh token expired' });
		}
		return res.status(403).json({ message: 'Invalid refresh token' });
	}
};
