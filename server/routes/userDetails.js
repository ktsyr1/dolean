import express from 'express';
import { isAdmin } from '../middleware/auth.js';
import dynamicControllers from '../controllers/dynamic.js';
import UserDetails from '../models/UserDetails.js';
import { UserDetailsFilter } from '../controllers/userDetails.js';

const app = express.Router();

const UserDetailsController = new dynamicControllers(UserDetails);
// app.use(isAdmin)
/**
 * @swagger
 * /api/admin/user-details:
 *   get:
 *     summary: Get all user details
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all user details
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserDetails'
 *       401:
 *         description: Unauthorized - User not logged in
 *       403:
 *         description: Forbidden - User is not an admin
 */
app.get('/',  UserDetailsController.getAll);

/**
 * @swagger
 * /api/admin/user-details/{id}:
 *   get:
 *     summary: Get user details by ID
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserDetails'
 *       404:
 *         description: User details not found
 *       401:
 *         description: Unauthorized - User not logged in
 *       403:
 *         description: Forbidden - User is not an admin
 */
app.get('/:id',  UserDetailsController.get);

/**
 * @swagger
 * /api/admin/user-details/filterByCourse/{id}:
 *   get:
 *     summary: Filter user details by course ID
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the course to filter by
 *     responses:
 *       200:
 *         description: Filtered list of user details
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserDetails'
 *       401:
 *         description: Unauthorized - User not logged in
 *       403:
 *         description: Forbidden - User is not an admin
 */
app.get('/filterByCourse/:id', UserDetailsFilter);

/**
 * @swagger
 * /api/admin/user-details/{id}:
 *   delete:
 *     summary: Delete user details
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User details deleted successfully
 *       404:
 *         description: User details not found
 *       401:
 *         description: Unauthorized - User not logged in
 *       403:
 *         description: Forbidden - User is not an admin
 */
app.delete('/:id',  UserDetailsController.remove);

export default app;