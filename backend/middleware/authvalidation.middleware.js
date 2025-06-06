import Validator from 'validatorjs';

export const registerValidation = (req, res, next) => {
	const validateRule = {
		name: 'required|string|min:2',
		email: 'required|email',
		password: 'required|min:6',
	};

	const validation = new Validator(req.body, validateRule);

	if (validation.fails()) {
		return res.status(412).json({
			success: false,
			message: 'Validation failed',
			errors: validation.errors.all(),
		});
	}

	next();
};

export const loginValidation = (req, res, next) => {
	const validateRule = {
		email: 'required|email',
		password: 'required|min:6',
	};

	const validation = new Validator(req.body, validateRule);

	if (validation.fails()) {
		return res.status(412).json({
			success: false,
			message: 'Validation failed',
			errors: validation.errors.all(),
		});
	}

	next();
};
