import swaggerJsdoc from 'swagger-jsdoc';

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Job Tracker API',
			version: '1.0.0',
			description: 'API documentation for Job Tracker project',
		},
		servers: [
			{
				url: 'http://localhost:5000/api/',
			},
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT',
				},
			},
			schemas: {
				UserRegistrationData: {
					type: 'object',
					required: ['name', 'email', 'password'],
					properties: {
						name: { type: 'string', example: 'John Doe' },
						email: {
							type: 'string',
							format: 'email',
							example: 'john@example.com',
						},
						password: { type: 'string', example: 'secret123' },
					},
				},
				User: {
					type: 'object',
					required: ['name', 'email', 'password'],
					properties: {
						_id: { type: 'string', example: '60d0fe4f5311236168a109ca' },
						name: { type: 'string', example: 'John Doe' },
						email: {
							type: 'string',
							format: 'email',
							example: 'john@example.com',
						},
						password: { type: 'string', example: 'hashedpassword' },
						createdAt: { type: 'string', format: 'date-time' },
						updatedAt: { type: 'string', format: 'date-time' },
					},
				},

				NewJob: {
					type: 'object',
					required: ['company', 'position', 'location'],
					properties: {
						company: { type: 'string', example: 'Test Inc.' },
						position: { type: 'string', example: 'Frontend Developer' },
						location: { type: 'string', example: 'Remote' },
						salary: { type: 'number', example: 60000 },
						status: {
							type: 'string',
							enum: [
								'applied',
								'no response',
								'interview',
								'test task',
								'rejected',
								'offer',
								'pass',
							],
							example: 'applied',
						},
						jobType: {
							type: 'string',
							enum: ['remote', 'on-site', 'hybrid'],
							example: 'remote',
						},
						notes: {
							type: 'string',
							example: 'Need to follow up after 1 week',
						},
						interviewDate: {
							type: 'string',
							format: 'date',
							example: '2025-06-10',
						},
					},
				},

				Job: {
					type: 'object',
					required: ['company', 'position', 'location', 'createdBy'],
					properties: {
						_id: { type: 'string', example: '64e4d0672fd69d00213f89c0' },
						company: { type: 'string', example: 'Test Inc.' },
						position: { type: 'string', example: 'Frontend Developer' },
						location: { type: 'string', example: 'Remote' },
						salary: { type: 'number', example: 60000 },
						status: {
							type: 'string',
							enum: [
								'applied',
								'no response',
								'interview',
								'test task',
								'rejected',
								'offer',
								'pass',
							],
							example: 'applied',
						},
						jobType: {
							type: 'string',
							enum: ['remote', 'on-site', 'hybrid'],
							example: 'remote',
						},
						notes: {
							type: 'string',
							example: 'Need to follow up after 1 week',
						},
						interviewDate: {
							type: 'string',
							format: 'date',
							example: '2025-06-10',
						},
						createdBy: { type: 'string', example: '60d0fe4f5311236168a109ca' },
						createdAt: { type: 'string', format: 'date-time' },
						updatedAt: { type: 'string', format: 'date-time' },
					},
				},
			},
		},
		security: [
			{
				bearerAuth: [],
			},
		],
	},

	apis: ['./routes/*.js', './controllers/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
