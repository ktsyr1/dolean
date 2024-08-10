import mongoose from 'mongoose';

const UserDetailsSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date_create: { type: Date, default: Date.now },
    // phone
    // fullname
    births: Number,
    nationality: String,
    Governorate: String,
    city: String,
    noteInterests: String,
    interests: [String],
    scientific_level: String,
    data_share: {
        free: Boolean,
        paid: Boolean
    }
});

const UserDetails = mongoose.model('UserDetails', UserDetailsSchema);
export default UserDetails;