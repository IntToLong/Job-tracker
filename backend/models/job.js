import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const jobSchema = new Schema(
	{
		company: { type: String, required: true },
		position: { type: String, required: true },
		location: { type: String, required: true },
		salary: { type: Number },
		status: {
			type: String,
			enum: [
				'applied',
				'no response',
				'interview',
				'test task',
				'rejected',
				'offer',
				'pass',
			],
			default: 'applied',
		},
		jobType: {
			type: String,
			enum: ['remote', 'on-site', 'hybrid'],
		},
		notes: { type: String },
		interviewDate: { type: Date },
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},

	{ timestamps: true }
);

export default mongoose.model('Job', jobSchema);
