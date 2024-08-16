import { Schema, model } from 'mongoose';

const CoursesSchema = new Schema({
    image: String,
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
    price: Number,
    deleteState: { type: Boolean, default: false }
});

const Courses = model('Courses', CoursesSchema);
export default Courses;

// CoursesSchema = { title, context, links, keys, location, age.start, age.end, nationality, price }