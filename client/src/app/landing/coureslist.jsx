import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import config, { headers } from "../../config";

let CoursesList = () => {

    const [data, setData] = useState(null);
    useEffect(() => {
        // افترض أنك تستدعي API للحصول على بيانات المستخدم
        axios.get(`${config.api}/student/courses`, headers)
            .then(({ data }) => setData(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);
    return (
        <section>
            <div className="flex items-center my-4 mx-4">
                <h2 className="text-xl font-bold">الدورات الحديثة</h2>
                <Link className="text-blue-600 text-md font-bold mx-4" to="/courses"> المزيد </Link>
            </div>
            <div className="  w-full tap:px-24 md:px-12 space-x-3 -overflow-x-scroll scrollbar-hide- cursor-e-resize select-none ">
                <div className="flex flex-wrap mt-4 -w-max space-x-4  justify-center">
                    {data?.slice(0, 6).map((course, index) => <Card key={index} data={course} />)}
                </div>
            </div>
        </section>
    );
}


export default CoursesList;




function Card({ data, className }) {
    let { title, location, image, _id } = data

    return (
        <Link to={`/courses/${_id}`} className={`flex flex-col justify-between w-full bg-white m-4 max-w-[360px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${className}`}>
            <div className="min-h-[220px] min-w-[300px] bg-white-400 bg-slate-50 rounded-lg">
                <img className="rounded-t-lg" src={image} alt="product image" />
            </div>
            <div className="p-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="text-gray-700 bg-gray-100 p-2 rounded-lg mt-2 w-max">{location}</p>
            </div>
        </Link>
    );
}
