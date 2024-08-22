import express from 'express'
import dynamicControllers from '../controllers/dynamic.js';
import DefCourses from '../models/DefCourses.js';
import { isLogin } from '../middleware/auth.js';
import Courses from '../models/Courses.js';
import { getProfile, updateProfile } from '../controllers/profileController.js';
import { createUserDetails } from '../controllers/userDetails.js';

const app = express.Router();
const CoursesController = new dynamicControllers(Courses)
const DefCoursesController = new dynamicControllers(DefCourses)

/**
 * @swagger
 * /api/student/courses:
 *   get:
 *     summary: Get all courses
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: List of all courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 */
app.get('/courses', CoursesController.getAll)

/**
 * @swagger
 * /api/student/courses/{id}:
 *   get:
 *     summary: Get a course by ID
 *     tags: [Student]
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
 */
app.get('/courses/:id', CoursesController.get)

/**
 * @swagger
 * /api/student/def-courses:
 *   post:
 *     summary: Create a new default course
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DefCourse'
 *     responses:
 *       201:
 *         description: Default course created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DefCourse'
 *       400:
 *         description: Invalid input
 */
app.post('/def-courses', DefCoursesController.create)
/**
 * @swagger
 * /api/student/apply:
 *   post:
 *     summary: Create user details application
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserDetails'
 *     responses:
 *       201:
 *         description: User details created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserDetails'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
app.post('/apply', createUserDetails)
/**
 * @swagger
 * /api/student/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Student]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Not authorized
 */
app.get('/profile', isLogin, getProfile);

/**
 * @swagger
 * /api/student/profile:
 *   put:
 *     summary: Update user profile
 *     tags: [Student]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Updated user profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Not authorized
 *       400:
 *         description: Invalid input
 */
app.put('/profile', isLogin, updateProfile);

export default app