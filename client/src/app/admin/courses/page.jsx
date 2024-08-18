import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../../config";
import Cookies from "js-cookie"
import { Header } from "../layoutAdmin";
import { Link } from "react-router-dom";

export default function AdminCourses() {
    const [courses, set] = useState([])
    let token = Cookies.get("x-auth-token")
    useEffect(() => {
        axios.get(`${config.api}/admin/courses`, { headers: { "x-auth-token": token } })
            .then(({ data }) => set(data))
    }, [])
    return (
        <div className="flex flex-col min-h-screen bg-white group/design-root overflow-x-hidden w-full"  >
            <Header title={"الدورات"} add="/admin/ai-course" />
            {courses.map((course, index) => <CourseItem key={index}{...course} />)}

            {/* <AddCourseButton /> */}
        </div>
    );
}

// CourseItem.jsx 

const CourseItem = ({ image: image, title, location, price, _id }) => {
    return (
        <Link to={`/admin/courses/${_id}`} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-start rounded-lg hover:bg-slate-200 group">
            {image.length > 1
                ? <img src={image} alt={title} className="w-32 h-32 object-cover rounded-md bg-gray-200" style={{ aspectRatio: "80 / 80", objectFit: "cover" }} />
                : <div className='w-32 h-32  bg-gray-200 rounded-md flex justify-center items-center text-gray-300 font-bold'>لا يوجد صورة</div>}
            <div className="flex flex-col justify-center *:m-2">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">{title}</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">{location}</p>
            <p className="bg-slate-100 w-min p-2 rounded-lg min-w-[70px] text-center font-bold  group-hover:!bg-white">${price?.toString()?.split(".")[0]}</p>
            </div>
        </Link>
    );
};
// AddCourseButton.jsx 

const AddCourseButton = () => {
    return (
        <div className="flex px-4 py-3">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-transparent text-[#111518] text-base font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Add course</span>
            </button>
        </div>
    );
};