import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Dolean API',
            version: '1.0.0',
            description: 'API documentation for your Dolean',
        },
        servers: [
            {
                url: 'http://localhost:5000', // Make sure this matches your actual server URL and scheme                description: 'Development server',
            }, {
                url: "https://courses-lb-api.vercel.app",

                description: 'Production server',
            },
        ],
        components: {
            schemas: {
                Course: {
                    type: 'object',
                    required: ['title', 'context'], // Add other required fields as needed
                    properties: {
                        _id: {
                            type: 'string',
                            description: 'The auto-generated id of the course'
                        },
                        image: {
                            type: 'string',
                            description: 'URL or path to the course image'
                        },
                        title: {
                            type: 'string',
                            description: 'The title of the course'
                        },
                        context: {
                            type: 'string',
                            description: 'The context or description of the course'
                        },
                        links: {
                            type: 'array',
                            items: {
                                type: 'string'
                            },
                            description: 'Array of relevant links for the course'
                        },
                        keys: {
                            type: 'array',
                            items: {
                                type: 'string'
                            },
                            description: 'Array of key terms or topics for the course'
                        },
                        location: {
                            type: 'string',
                            description: 'The location of the course (required if not online)'
                        },
                        center: {
                            type: 'string',
                            description: 'The center or institution offering the course'
                        },
                        age: {
                            type: 'object',
                            properties: {
                                start: {
                                    type: 'number',
                                    default: 0,
                                    description: 'The minimum age for the course'
                                },
                                end: {
                                    type: 'number',
                                    default: 100,
                                    description: 'The maximum age for the course'
                                }
                            }
                        },
                        nationality: {
                            type: 'string',
                            description: 'The nationality requirement for the course, if any'
                        },
                        price: {
                            type: 'number',
                            description: 'The price of the course'
                        }, 
                        isOnline: {
                            type: 'boolean',
                            default: true,
                            description: 'Indicates if the course is online or in-person'
                        }
                    }
                },
                UserDetails: {
                    type: 'object',
                    required: ['fullName', 'phone', 'births', 'Governorate', 'city', 'nationality', 'educationLevel', 'englishLevel', 'computerUsage', 'freeCourses', 'paidCourses'],
                    properties: {
                        create_at: {
                            type: 'string',
                            format: 'date-time'
                        },
                        fullName: {
                            type: 'string'
                        },
                        phone: {
                            type: 'string'
                        },
                        births: {
                            type: 'string',
                            format: 'date'
                        },
                        Governorate: {
                            type: 'string'
                        },
                        city: {
                            type: 'string'
                        },
                        nationality: {
                            type: 'string'
                        },
                        interests: {
                            type: 'string'
                        },
                        educationLevel: {
                            type: 'string',
                            enum: ['Primary', 'Intermediate', 'Secondary', 'Bachelors', 'Masters', 'PhD', 'Diploma', 'Institute', 'Other']
                        },
                        specialization: {
                            type: 'string'
                        },
                        classes: {
                            type: 'string'
                        },
                        graduationYear: {
                            type: 'number'
                        },
                        englishLevel: {
                            type: 'string'
                        },
                        computerUsage: {
                            type: 'string'
                        },
                        freeCourses: {
                            type: 'boolean'
                        },
                        paidCourses: {
                            type: 'boolean'
                        },
                        paidCoursesLimit: {
                            type: 'number'
                        },
                        requiredCourses: {
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        },
                        deleteState: {
                            type: 'boolean'
                        }
                    }
                },
                User: {
                    type: 'object',
                    required: ['name', 'phone', 'email', 'password'],
                    properties: {
                        password: { type: String, required: true },
                        fullName: {
                            type: 'string',
                        },
                        phone: {
                            type: 'string'
                        },
                        email: {
                            type: 'string',
                        },
                    }
                },
                DefCourse: {
                    type: 'object',
                    properties: {
                        title: { type: 'string' },
                        context: { type: 'string' },
                        image: { type: 'string' },
                        ref: { type: 'string' },
                        location: { type: 'string' }
                    }
                },

            },
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        }
    },
    apis: ['./routes/*.js'], // Path to the API routes files
};

export const specs = swaggerJsdoc(options);