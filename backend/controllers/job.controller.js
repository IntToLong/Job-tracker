import Job from '../models/job.model';

export const getAllUserJobs = async (req, res, next) => {
	try {
		const jobs = await Job.find({ createdBy: req.user });
		res.status(200).json(jobs);
	} catch (error) {
		next(error);
	}
};

export const addJob = async (req, res, next) => {
	const company = req.body.company;
	const position = req.body.position;
	const location = req.body.location;
	const salary = req.body.salary || 'Not provided';
	const status = req.body.status;
	const jobType = req.body.jobType;
	const notes = req.body.notes || '';
	const interviewDate = req.body.interviewDate || '';
	const createdBy = req.user;

	try {
		const job = await Job.create({
			company,
			position,
			location,
			salary,
			status,
			jobType,
			notes,
			interviewDate,
			createdBy,
		});
		res.status(201).json(job);
	} catch (error) {
		next(error);
	}
};

export const updateJob = async (req, res, next) => {
	const { id } = req.params;

	const {
		company,
		position,
		location,
		salary,
		status,
		jobType,
		notes,
		interviewDate,
	} = req.body;

	try {
		const job = await Job.findById(id);

		if (!job) {
			return res.status(404).json({ message: 'Job not found' });
		}

		if (job.createdBy.toString() !== req.user.toString()) {
			return res
				.status(403)
				.json({ message: 'Not authorized to update this job' });
		}

		job.company = company;
		job.position = position;
		job.location = location;
		job.salary = salary;
		job.status = status;
		job.jobType = jobType;
		job.notes = notes;
		job.interviewDate = interviewDate;

		const updatedJob = await job.save();

		res.status(200).json(updatedJob);
	} catch (error) {
		next(error);
	}
};

export const deleteJob = async (req, res, next) => {
	const { id } = req.params;
    
	try {
        const job = await Job.findById(id);
		if (!job) {
			return res.status(404).json({ message: 'Job not found' });
		}

		if (job.createdBy.toString() !== req.user.toString()) {
			return res
				.status(403)
				.json({ message: 'Not authorized to delete this job' });
		}

        await job.deleteOne();
        res.status(204).send();

	} catch (error) {
		next(error);
	}
};

//export * as jobController from './job.controller';
