import mongoose from 'mongoose';

const CoursesSchema = new mongoose.Schema({
    title: String,
    context: String,
    links: [String],
    keys: [String],
    location: String,
    age: {
        start: Number,
        end: Number
    },
    nationality: String,
    price: Number
});

const Courses = mongoose.model('Courses', CoursesSchema);
export default Courses;

// CoursesSchema = { title, context, links, keys, location, age.start, age.end, nationality, price }