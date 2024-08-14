import { Link } from "react-router-dom";

let CoursesList = () => {
    return (
        <section>
            <div className="flex items-center justify-between my-4 mx-4">
                <h2 className="text-2xl font-bold">الدورات الحديثة</h2>
                <a className="text-blue-600" href="#">
                    المزيد
                </a>
            </div>
            <div className="  w-full tap:px-24 px-12 space-x-3 -overflow-x-scroll scrollbar-hide- cursor-e-resize select-none ">
                <div className="flex flex-wrap mt-4 -w-max space-x-4  justify-center">
                    {data.map((course, index) => <Card key={index} data={course} />)}
                </div>
            </div>
        </section>
    );
}


export default CoursesList;




function Card({ data, className }) {
    let { image, title, center, link } = data
    return (
        <Link to={link} className={`w-full bg-white m-4 max-w-[360px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${className}`}>
            <div className="min-h-[150px] min-w-[300px] bg-white-400">
                <img className="rounded-t-lg" src={image} alt="product image" />
            </div>
            <div className="p-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <span className="text-gray-700 dark:text-gray-300">{center}</span>
            </div>
        </Link>
    );
}

const data = [
    {
        image: "https://etana-iq.com//storage/2022/04/24/4a403d25657a35a5b25a0841924b3dda64000594.jpg",
        title: "دورة كمبيوتر",
        center: "NRC",
        link: "#"
    },
    {
        image: "https://etana-iq.com//storage/2022/04/24/4a403d25657a35a5b25a0841924b3dda64000594.jpg",
        title: "دورة تمديدات كهربائية",
        center: "NRC",
        link: "#"
    },
    {
        image: "https://etana-iq.com//storage/2022/04/24/4a403d25657a35a5b25a0841924b3dda64000594.jpg",
        title: "دورة تمديدات كهربائية",
        center: "NRC",
        link: "#"
    }
];



