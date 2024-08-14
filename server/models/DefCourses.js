import mongoose from 'mongoose';

const DefCoursesSchema = new mongoose.Schema({
    title: String,
    context: String,
    image: String,
    Source: String,
    location: String
});

const DefCourses = mongoose.model('DefCourses', DefCoursesSchema);
export default DefCourses;

DefCourses = title, context, image, Source, location