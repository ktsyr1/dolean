import React from 'react';
import { Link } from 'react-router-dom';

// Component for each pricing card
const PricingCard = ({ title, description, price, list = [], to, textLink }) => (
    <div className="flex flex-col p-6 mx-auto max-w-lg- text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow ddark:border-gray-600 xl:p-8 ddark:bg-gray-800 ddark:text-white max-w-[400px]">
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p className="font-light text-gray-500 sm:text-lg ddark:text-gray-400">{description}</p>
        <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold"> {typeof price != "string" ? `$${price}` : price} </span>
            <span className="text-gray-500 ddark:text-gray-400 "> /شهري</span>
        </div>
        <ul role="list" className="mb-8 space-y-4 text-left">
            {list.map(a => (
                <li className="flex items-center space-x-3" key={a}>
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 ddark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>{a}</span>
                </li>
            ))}
        </ul>
        <Link to={to} className={`${typeof price == "string" ? "bg-white text-primary-600" : "text-white bg-primary-600"}   focus:ring-4 focus:ring-primary-200 font-medium rounded-lg border  border-primary-600  text-sm px-5 py-2.5 text-center ddark:text-white ddark:focus:ring-primary-900`}>{textLink}</Link>
    </div>
);

// Main Pricing Section Component
const PricingSection = () => (
    <section className="bg-white ddark:bg-gray-900" id="price">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ddark:text-white">التسعيرة</h2>
                <p className="mb-5 font-light text-gray-500 sm:text-xl ddark:text-gray-400">
                    نركز على إتاحة فرص التعلم للجميع وتمكين المؤسسات التعليمية من الوصول إلى جمهور أوسع. خططنا مصممة لتناسب احتياجات الطلاب والمعاهد والمؤسسات على حد سواء.
                </p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 flex flex-wrap justify-center items-center">
                <PricingCard
                    title="للطلاب"
                    description="الخيار الأمثل للطلاب الراغبين في اكتشاف فرص التعلم المحلية."
                    price={0}
                    list={[
                        "ابحث عن الدورات في منطقتك",
                        "استمتع بوصول كامل لجميع الدورات",
                        "احصل على تنبيهات عبر واتساب",
                        "تلقى تحديثات منتظمة عبر البريد الإلكتروني",
                        "شارك في مجتمع المتعلمين النشط"
                    ]}
                    to={"/apply"}
                    textLink="تسجيل"
                />
                <PricingCard
                    title=" للمعاهد والمؤسسات"
                    description="الأنسب للمعاهد والمؤسسات التعليمية الراغبة في توسيع نطاق وصولها."
                    price="مخصص"
                    list={[
                        "صل سريعاً للطلاب المهتمين بدوراتك",
                        "احصل على إحصائيات عن احتياجات الطلاب",
                        "استفد من أدوات تسويقية متقدمة",
                        "أدر دوراتك وطلابك بسهولة",
                        "احصل على دعم فني متميز",
                    ]}
                    to={"#"}
                    textLink="قريبا"
                />
            </div>
        </div>
    </section>
);

export default PricingSection;
