import express from 'express'
import DefCourses from '../models/DefCourses.js';
import { isAdmin } from '../middleware/auth.js';
import dynamicControllers from '../controllers/dynamic.js';
import { defCoursesPreprocessing } from '../controllers/defCourses.js';

const app = express();
const defCoursesController = new dynamicControllers(DefCourses)
app.use(isAdmin)


/**
 * @swagger
 * /api/admin/def-courses:
 *   get:
 *     summary: Get all default courses
 *     tags: [Admin, DefaultCourses]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all default courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DefCourse'
 *       401:
 *         description: Unauthorized - User not logged in
 *       403:
 *         description: Forbidden - User is not an admin
 */
app.get('/', defCoursesController.getAll)

/**
 * @swagger
 * /api/admin/def-courses/{id}:
 *   get:
 *     summary: Get a default course by ID
 *     tags: [Admin, DefaultCourses]
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
 *         description: Default course details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DefCourse'
 *       404:
 *         description: Default course not found
 *       401:
 *         description: Unauthorized - User not logged in
 *       403:
 *         description: Forbidden - User is not an admin
 */
app.get('/:id', defCoursesController.get)

/**
 * @swagger
 * /api/admin/def-courses/{id}:
 *   put:
 *     summary: Update a default course
 *     tags: [Admin, DefaultCourses]
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
 *             $ref: '#/components/schemas/DefCourse'
 *     responses:
 *       200:
 *         description: Default course updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DefCourse'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Default course not found
 *       401:
 *         description: Unauthorized - User not logged in
 *       403:
 *         description: Forbidden - User is not an admin
 */
app.put('/:id', defCoursesPreprocessing)

/**
 * @swagger
 * /api/admin/def-courses/{id}:
 *   delete:
 *     summary: Delete a default course
 *     tags: [Admin, DefaultCourses]
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
 *         description: Default course deleted successfully
 *       404:
 *         description: Default course not found
 *       401:
 *         description: Unauthorized - User not logged in
 *       403:
 *         description: Forbidden - User is not an admin
 */
app.delete('/:id', defCoursesController.remove)

export default app