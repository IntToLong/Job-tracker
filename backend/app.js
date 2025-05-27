const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

mongoose
	.connect(process.env.MONGO_URI)
	.then((result) => {
		app.listen(5000, () => {
			console.log('Server running on http://localhost:5000');
		});
	})
	.catch((err) => console.log(err));
