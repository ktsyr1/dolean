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
