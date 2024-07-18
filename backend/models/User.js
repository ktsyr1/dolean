import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    role: { type: String, enum: ['admin', 'user'], default: "user" },
    name: { type: String, required: true },
    phone: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);
export default User;