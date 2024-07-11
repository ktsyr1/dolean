import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './router/user.js';
import dotenv from 'dotenv';

// تحميل المتغيرات البيئية من ملف .env
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
let { DB, PORT } = process.env
// MongoDB connection
mongoose.connect(DB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Routes
app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
