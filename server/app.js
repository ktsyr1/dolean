import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AllAPI from "./routes/AllRoutes.js"
import swaggerUi from 'swagger-ui-express';
import { specs } from './lib/swagger.js';
import cors from 'cors'

dotenv.config();
const app = express();
app.use(cors()); // السماح بكل الأصول

app.use(express.json());
app.use(express.static("/api-docs"));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { swaggerOptions: { persistAuthorization: true } }));
app.use('/api', AllAPI);
app.get("/", (req, res) => res.send("start api"))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));