


let CoursesList = () => {
    const data = [
        {
            image: "https://flowbite.com/docs/images/products/apple-watch.png",
            title: "دورة كمبيوتر",
            center: "NRC",
            link: "#"
        },
        {
            image: "https://flowbite.com/docs/images/products/apple-watch.png",
            title: "دورة تمديدات كهربائية",
            center: "NRC",
            link: "#"
        }
    ];

    return (
        
        <section>
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">الدورات الحديثة</h2>
                <a className="text-blue-600" href="#">
                    المزيد
                </a>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                {data.map((course, index) => (
                    <Card 
                        key={index}
                        image={course.image}
                        title={course.title}
                        center={course.center}
                        link={course.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default CoursesList;




function Card({ image, title, center, link }) {
    return (
        <div className="w-full max-w-sm bg-white   border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={link}>
                <img className="p-8 rounded-t-lg" src={image} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href={link}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <span className="text-gray-700 dark:text-gray-300">{center}</span>
                </a>
            </div>
        </div>
    );
}




    
