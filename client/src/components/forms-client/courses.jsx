import React from 'react';

const courses = [
    {
        id: 1,
        title: 'دورة تطوير الويب',
        description: 'تعلم أساسيات تطوير الويب من الصفر باستخدام HTML و CSS و JavaScript.',
        image: 'https://via.placeholder.com/150', // استبدل بالرابط الفعلي للصورة
    },
    {
        id: 2,
        title: 'دورة تعلم React',
        description: 'غوص عميق في إطار العمل React لتطوير تطبيقات الويب الديناميكية.',
        image: 'https://via.placeholder.com/150', // استبدل بالرابط الفعلي للصورة
    },
    // أضف المزيد من الدورات هنا
];

const CourseCard = ({ title, description, image }) => {
    return (
        <div className="flex bg-white shadow-md rounded-lg overflow-hidden mb-6">
            <img src={image} alt={title} className="w-1/3 object-cover" />
            <div className="p-4 w-2/3">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="bg-primary-600 text-white text-center px-4 py-2 rounded-md">
                    {title}
                </div>
            </div>
        </div>
    );
};

const CoursesPage = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-8 px-4">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    الدورات المتاحة
                </h1>
                <div className="space-y-6">
                    {courses.map(course => (
                        <CourseCard
                            key={course.id}
                            title={course.title}
                            description={course.description}
                            image={course.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesPage;
