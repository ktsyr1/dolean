import React from 'react';

let Coursecard = () => {
    return (
        <div className="max-w-md mx-auto p-4 text-zinc-800">
            <main>
                <h2 className="text-center text-2xl font-bold mb-4">الدورات الحديثة</h2>
                {courses.map((course, index) => <Card key={index} data={course} />)}
                <button className="inline-flex items-center bg-slate-100 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full mt-4">
                    مشاهدة كل الدورات المتاحة
                </button>
            </main>
        </div>
    );
};

export default Coursecard;

function Card({ data: { title, university, type, imageUrl } }) {
    return (
        <div className="bg-card flex items-center m-4 rounded-lg space-x-4 text-card-foreground">
            <img src={imageUrl} alt={title} className="w-20 h-20 object-cover rounded-md bg-gray-200" width="80" height="80" style={{ aspectRatio: "80 / 80", objectFit: "cover" }} />
            <div className='p-4'>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{university}</p>
                <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    {type}
                </div>
            </div>
        </div>
    );
}
const courses = [
    {
        title: 'التعلم الآلي للجميع',
        university: 'جامعة لندن',
        type: 'اونلاين',
        imageUrl: 'https://www.w3schools.com/REACT/screenshot_myfirstreact.png',
    },
    {
        title: 'مقدمة في بايثون',
        university: 'جامعة هارفارد',
        type: 'اونلاين',
        imageUrl: 'https://www.w3schools.com/REACT/img_snowtops.jpg',
    },
    {
        title: 'معسكر تدريبي لتطوير الويب',
        university: 'جامعة كولومبيا',
        type: 'اونلاين',
        imageUrl: 'https://www.w3schools.com/REACT/img_lights.jpg',
    },
    {
        title: 'تحليل البيانات باستخدام R',
        university: 'جامعة ستانفورد',
        type: 'اونلاين',
        imageUrl: 'https://www.w3schools.com/REACT/img_mountains.jpg',
    },
    {
        title: 'إدارة الأعمال الرقمية',
        university: 'جامعة أوكسفورد',
        type: 'اونلاين',
        imageUrl: 'https://www.w3schools.com/REACT/img_forest.jpg',
    },
    {
        title: 'التسويق عبر وسائل التواصل الاجتماعي',
        university: 'جامعة كاليفورنيا',
        type: 'اونلاين',
        imageUrl: 'https://www.w3schools.com/REACT/img_snow.jpg',
    },
    {
        title: 'التعلم العميق بالذكاء الاصطناعي',
        university: 'معهد ماساتشوستس للتكنولوجيا',
        type: 'اونلاين',
        imageUrl: 'https://www.w3schools.com/REACT/img_mountains_wide.jpg',
    },
    {
        title: 'أساسيات تصميم تجربة المستخدم',
        university: 'جامعة بنسيلفانيا',
        type: 'اونلاين',
        imageUrl: 'https://www.w3schools.com/REACT/img_nature_wide.jpg',
    },
];
