import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AllAPI from "./routes/AllRoutes.js"
dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api', AllAPI);
app.get("/",(req,res)=> res.send("start api"))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));