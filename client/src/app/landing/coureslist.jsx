import { Link } from "react-router-dom";
import axios from "axios";
import config, { headers } from "../../config";
import { useState, useEffect } from 'react';

let CoursesList = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        // افترض أنك تستدعي API للحصول على بيانات المستخدم
        axios.get(`${config.api}/student/courses`, headers)
            .then(({ data }) => setData(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);
    if (!data) return <Spinner />
    else return (
        <section>
            <div className="flex items-center my-4 mx-4">
                <h2 className="text-xl font-bold">الدورات الحديثة</h2>
            </div>
            <div className="flex items-center my-4  ">
                <div className="relative flex-col justify-center flex">
                    <div id="slider" className="flex flex-wrap justify-center space-x-4 pb-4">
                        {data?.slice(0, 3).map((course, index) => <Card key={index} data={course} />)}
                    </div>
                    <Link to="/apply" className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 cursor-pointer w-max mx-auto"> المزيد من الدورات </Link>
                </div>
            </div>
        </section>
    );
}


export default CoursesList;




function Card({ data, className }) {
    let { title, location, image, _id } = data

    return (
        <Link to={`/courses/${_id}`} className={`flex flex-none flex-col justify-between w-full bg-white m-4 max-w-[360px] min-w-[300px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${className}`}>
            {image.length > 1
                ? <img className=" rounded-lg w-auto sh-[300px] " src={image} alt={title} />
                : <div className='h-[300px]  w-auto bg-gray-200 rounded-md flex justify-center items-center text-gray-300 font-bold'>لا يوجد صورة</div>}
            <div className="p-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="text-gray-700 bg-gray-100 p-2 rounded-lg mt-2 w-max">{location}</p>
            </div>
        </Link>
    );
}
