import Courses from '../models/Courses.js';
import UserDetails from '../models/UserDetails.js'; // افترض أن المخطط محفوظ في هذا المسار

// دالة لإنشاء مستند UserDetails جديد 
export const createUserDetails = async (req, res) => {
    try {
        // 2005-08-27T21:00:00.000Z to 20050827
        let births = new Date(req.body.births).toJSON().split("T")[0].replaceAll("-", "")
        req.body.births = Number(births)
        // إنشاء مستند جديد بناءً على البيانات المستلمة
        const newUserDetails = await UserDetails.create(req.body);

        // إعادة الاستجابة بنجاح
        res.status(201).json({
            message: 'تم إنشاء تفاصيل المستخدم بنجاح',
            data: newUserDetails
        });
    } catch (error) {
        // في حالة حدوث خطأ أثناء عملية الإنشاء
        console.error('Error creating user details:', error);
        res.status(500).json({ message: 'حدث خطأ أثناء إنشاء تفاصيل المستخدم', error: error.message });
    }
};

export const UserDetailsFilter = async (req, res) => {
    try {
        // العثور على الدورة المطلوبة باستخدام الـ ID
        const course = await Courses.findOne({ _id: req.params.id }).select("-context -keys");

        if (!course) return res.status(404).json({ message: "Course not found" });

        // بناء الاستعلام باستخدام find
        const query = {};

        // فلترة حسب الجنسية
        if (course.nationality !== "All") query.nationality = course.nationality;


        // فلترة حسب السعر
        if (course.price === 0) query.freeCourses = true;
        else if (course.price > 0) {
            query.paidCourses = true;
            query.paidCoursesLimit = { $gte: course.price };
        }

        // فلترة حسب العمر
        // if (course.age) {
        //     const currentYear = new Date().getFullYear();
        //     const startYear = currentYear - course.age.end;
        //     const endYear = currentYear - course.age.start;

        //     query.births = {
        //         $gte: startYear * 10000 + 101,  // بدء من 1 يناير للسنة المحسوبة
        //         $lte: endYear * 10000 + 1231   // انتهاء في 31 ديسمبر للسنة المحسوبة
        //     };
        // }

        console.log({ query });
        // تنفيذ الاستعلام
        const filteredUsers = await UserDetails.find(query).select(" ");

        res.json({ users: filteredUsers, course });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
