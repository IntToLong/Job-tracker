import { Router } from 'express';
import { getAllUserJobs, addJob, updateJob, deleteJob } from '../controllers/job.controller';
import { verifyToken } from '../middleware/auth.middleware';

const router = Router();

//route to create a new job
router.post('/jobs', verifyToken, addJob);

//route to get all user jobs
router.get('/jobs', verifyToken, getAllUserJobs);

//route to update a specific job
router.put('/jobs/:id', verifyToken, updateJob);

//route to delete a specific job
router.delete('/jobs/:id', verifyToken, deleteJob);

export default router;
