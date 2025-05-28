export class AppError extends Error {
	constructor(statusCode, message) {
		super(message);

		Object.setPrototypeOf(this, new.target.prototype);
		this.name = this.constructor.name;
		this.statusCode = statusCode;
		Error.captureStackTrace(this);
	}
}

const errorHandler = (error, req, res, next) => {
	console.log(`error ${error.message}`);
	const status = error.statusCode || 500;
	res.status(status).json({ error: error.message });
};

export default errorHandler;
