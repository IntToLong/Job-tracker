import { Router } from 'express';
import {
	getAllUserJobs,
	addJob,
	updateJob,
	deleteJob,
} from '../controllers/job.controller.js';
import { verifyToken } from '../middleware/verifyToken.middleware.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: CRUD operations
 */

/**
 * @swagger
 * /jobs:
 *   post:
 *     summary: Add a new job
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewJob'
 *     responses:
 *       201:
 *         description: New job
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Job'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */

//route to create a new job
router.post('/jobs', verifyToken, addJob);

/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Get all jobs created by the authenticated user
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Job'
 *       401:
 *         description: Unauthorized
 */

//route to get all user jobs
router.get('/jobs', verifyToken, getAllUserJobs);

/**
 * @swagger
 * /jobs/{id}:
 *   put:
 *     summary: Update a specific job
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *            type: string
 *       required: true
 *       description: The ID of the job.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewJob'
 *     responses:
 *       200:
 *         description: Job updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Job'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Job not found
 */

//route to update a specific job
router.put('/jobs/:id', verifyToken, updateJob);

/**
 * @swagger
 * /jobs/{id}:
 *   delete:
 *     summary: Delete a specific job by id
 *     tags: [Jobs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *            type: string
 *       required: true
 *       description: The ID of the job.
 *     responses:
 *       204:
 *         description: Job deleted successfully.
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Job not found
 */

//route to delete a specific job
router.delete('/jobs/:id', verifyToken, deleteJob);

export default router;
