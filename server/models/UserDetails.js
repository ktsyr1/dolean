import mongoose from 'mongoose';

const UserDetailsSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date_create: { type: Date, default: Date.now },
    // phone
    // fullname
    births: Number,
    Governorate: String,
    city: String,
    nationality: String,

    scientific_level: { type: String, enum: ['Primary', 'Intermediate', 'Secondary', 'Bachelors', 'Masters', 'PhD', 'Diploma', 'Institute', 'Other'], required: true },

    noteInterests: String,
    interests: [String],
    data_share: {
        free: Boolean,
        paid: Boolean
    }
});

const UserDetails = mongoose.model('UserDetails', UserDetailsSchema);
export default UserDetails;