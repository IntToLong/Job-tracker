import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import auth from './routes/auth.routes.js';
import jobs from './routes/job.routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import errorHandler from './middleware/errorHandler.js';


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

 
const corsOptions = {
	//for dev mode
	//change before deployment
	origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', auth);
app.use('/api', jobs);
app.use(cookieParser())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(errorHandler);

mongoose
	.connect(process.env.MONGO_URI)
	.then((result) => {
		app.listen(PORT, () => {
			console.log(`Server running on http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.error('Failed to connect to MongoDB', err);
		process.exit(1);
	});
