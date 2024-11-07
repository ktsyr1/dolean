import { Schema, model } from 'mongoose';

export default model('UserDetails', new Schema({
    // user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User',  },
    create_at: { type: Date, default: Date.now },


    fullName: { type: String, required: true },  // اسم المستخدم الكامل
    phone: { type: String, required: true },  // رقم الهاتف
    births: { type: Number, required: true },  // الجنسية
    District: { type: String,  },  // المحافظة
    city: { type: String,  },  // المدينة
    nationality: { type: String,  },  // الجنسية
    interests: String, // الاهتمامات
    
    educationLevel: { type: String, enum: ['Primary', 'Intermediate', 'Secondary', 'Bachelors', 'Masters', 'PhD', 'Diploma', 'Institute', 'Other'],  },  // المستوى التعليمي
    specialization: { type: String },  // التخصص
    classes: { type: String },  // التخصص
    graduationYear: { type: Number },  // سنة التخرج
    englishLevel: { type: String,  },  // مستوى اللغة الإنجليزية
    computerUsage: { type: String,  },  // مستوى استخدام الحاسوب
    
    freeCourses: { type: Boolean,  },  // هل استفاد من الدورات المجانية
    paidCourses: { type: Boolean,  },  // هل استفاد من الدورات المدفوعة
    paidCoursesLimit: { type: Number },  // سقف المدفوعات للدورات المدفوعة
    
    requiredCourses: [String],  // الدورات المطلوبة
    work: String,  // الدورات المطلوبة
    deleteState: { type: Boolean, default: false }
    // add work and gander
}))

// { user_id, District, city, nationality, requiredCourses, educationLevel, specialization, classes, graduationYear, englishLevel, computerUsage, freeCourses, paidCourses, paidCoursesLimit, noteInterests, interests, phone, fullName } 