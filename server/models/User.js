// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    role: { type: String, enum: ['admin', 'user'], required: true, default: "user" },
    name: { type: String, required: true },
    phone: { type: String, required: true }, 
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    deleteState: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);
export default User;