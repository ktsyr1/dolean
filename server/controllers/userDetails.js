import Courses from '../models/Courses.js';
import UserDetails from '../models/UserDetails.js'; // افترض أن المخطط محفوظ في هذا المسار

// دالة لإنشاء مستند UserDetails جديد
export const createUserDetails = async (req, res) => {
    try {

        // إنشاء مستند جديد بناءً على البيانات المستلمة
        const newUserDetails = await UserDetails.create(req.body);

        // إعادة الاستجابة بنجاح
        res.status(201).json({ message: 'تم إنشاء تفاصيل المستخدم بنجاح', data: newUserDetails });
    } catch (error) {
        // في حالة حدوث خطأ أثناء عملية الإنشاء
        console.error('Error creating user details:', error);
        res.status(500).json({ message: 'حدث خطأ أثناء إنشاء تفاصيل المستخدم', error: error.message });
    }
};


export const UserDetailsFilter = async (req, res) => {
    // Build the query based on the filter criteria
    const query = {};
    let courses = await Courses.findOne({ _id: req.params.id })
    delete courses.context
    delete courses.keys
    if (courses.nationality != "All") query.nationality = courses.nationality


    if (courses.price == 0) query.freeCourses = true
    else if (courses.price > 0 ) {
        query.price = { $gt: 0, $lte: filterBy.paidCoursesLimit };
    }

    // Add more filters as needed
    console.log(query);
    try {
        const filteredCourses = await UserDetails.find(query)
            .select("fullName phone nationality")
        res.json(filteredCourses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}