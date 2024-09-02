import express from 'express';
import users from "./userRoutes.js"
import DefCourses from "./def-courses.js"
import Courses from "./Courses.js"
import userDetails from "./userDetails.js"
import { AdminStates } from '../controllers/admin.js';
import { isAdmin } from '../middleware/auth.js';
import Wa from './wa.js';
const app = express();
// localhost:5000/api/auth
/**
 * @swagger
 * components:
 *   schemas:
 *     AdminStates:
 *       type: object
 *       properties:
 *         # Add properties based on what AdminStates actually returns
 *         # For example:
 *         totalUsers:
 *           type: number
 *         totalCourses:
 *           type: number
 *         # Add more properties as needed
 */

/**
 * @swagger
 * /api/admin:
 *   get:
 *     summary: Get admin states
 *     description: Retrieve various states or statistics for admin dashboard. Only accessible by admins.
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful retrieval of admin states
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AdminStates'
 *       401:
 *         description: Unauthorized - User not logged in
 *       403:
 *         description: Forbidden - User is not an admin
 *       500:
 *         description: Server error
 */
app.get('/', isAdmin, AdminStates);
app.use('/users', users);
app.use('/users-details', userDetails);
app.use('/courses', Courses);
app.use('/def-courses', DefCourses);
app.use('/wa', Wa);

export default app;