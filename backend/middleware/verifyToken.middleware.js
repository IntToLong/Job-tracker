import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		if (!authHeader || !authHeader.startsWith('Bearer ')) {
			return res
				.status(401)
				.json({ message: 'Authentication Failed: Token missing' });
		}

		const token = authHeader.replace('Bearer ', '');
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (err) {
		if (err.name === 'TokenExpiredError') {
			return res.status(401).json({
				message: 'Authentication Failed: Token expired',
			});
		}
		
		// handle other JWT errors 
		return res.status(401).json({
			message: 'Authentication Failed: Invalid token',
		});
	}
};
