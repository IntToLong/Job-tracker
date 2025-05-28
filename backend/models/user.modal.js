import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
	},
}, { timestamps: true });

userSchema.pre('save', async function (next) {
	try {
		// Check if the password has been modified
		if (!this.isModified('password')) return next();

		// Generate a salt and hash the password
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);

		next(); // Proceed to save
	} catch (error) {
		next(error); // Pass any errors to the next middleware
	}
});

export default mongoose.model('User', userSchema);