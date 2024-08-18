import { Schema, model } from 'mongoose';

const CoursesSchema = new Schema({
    image: String,
    title: String,
    context: String,
    links: [String],
    keys: [String],
    location: {
        type: String,
        validate: {
            validator: function (value) {
                // إذا كانت الدورة ليست أونلاين، يجب أن يكون هناك موقع
                return !this.isOnline || (value && value.trim() !== '');
            },
            message: props => `Location is required if the course is not online.`
        }
    },
    center: String,
    age: {
        start: { type: Number, default: 0 },
        end: { type: Number, default: 100 }
    },
    nationality: String,
    price: Number,
    deleteState: { type: Boolean, default: false },
    isOnline: {
        type: Boolean,
        default: true
    }
});

// استخدام hook للتحقق النهائي قبل الحفظ
CoursesSchema.pre('save', function (next) {
    if (!this.isOnline && (!this.location || this.location.trim() === '')) {
        return next(new Error('Location must be provided if isOnline is false.'));
    }
    next();
});

const Courses = model('Courses', CoursesSchema);

export default Courses;
