import mongoose from 'mongoose';

const DefCoursesSchema = new mongoose.Schema({
    title: String,
    context: String,
    image: String,
    ref: String,
    location: String
});

const DefCourses = mongoose.model('DefCourses', DefCoursesSchema);
export default DefCourses;