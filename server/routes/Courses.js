import express from 'express';
const app = express();

import { isAdmin } from '../middleware/auth.js';
import dynamicControllers from '../controllers/dynamic.js';
import Courses from '../models/Courses.js';
const Courses_Controllers = new dynamicControllers(Courses);

app.use(isAdmin)

/**
 * @swagger
 * /api/admin/courses:
 *   get:
 *     summary: Get all courses
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 *       401:
 *         description: Unauthorized - User not logged in
 *       403:
 *         description: Forbidden - User is not an admin
 */
app.get('/', Courses_Controllers.getAll);

/**
 * @swagger
 * /api/admin/courses:
 *   post:
 *     summary: Create a new course
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       201:
 *         description: Course created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized - User not logged in
 *       403:
 *         description: Forbidden - User is not an admin
 */
app.post('/', Courses_Controllers.create);

/**
 * @swagger
 * /api/admin/courses/{id}:
 *   get:
 *     summary: Get a course by ID
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
 *         description: Course details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       404:
 *         description: Course not found
 *       401:
 *         description: Unauthorized - User not logged in
 *       403:
 *         description: Forbidden - User is not an admin
 */
app.get('/:id', Courses_Controllers.get);

/**
 * @swagger
 * /api/admin/courses/{id}:
 *   put:
 *     summary: Update a course
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: Course updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Course not found
 *       401:
 *         description: Unauthorized - User not logged in
 *       403:
 *         description: Forbidden - User is not an admin
 */
app.put('/:id', Courses_Controllers.update);

/**
 * @swagger
 * /api/admin/courses/{id}:
 *   delete:
 *     summary: Delete a course
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
 *         description: Course deleted successfully
 *       404:
 *         description: Course not found
 *       401:
 *         description: Unauthorized - User not logged in
 *       403:
 *         description: Forbidden - User is not an admin
 */
app.delete('/:id', Courses_Controllers.remove);

export default app;