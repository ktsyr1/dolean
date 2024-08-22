import axios from "axios";
import { useEffect, useState } from "react";
import config, { headers } from "../../../config";
import Cookies from "js-cookie"
import { Header } from "../layoutAdmin";
import { Link } from "react-router-dom";

export default function AdminDefCourses() {
    const [courses, set] = useState([])
    let token = Cookies.get("authorization")
    useEffect(() => {
        axios.get(`${config.api}/admin/def-courses`, headers)
            .then(({ data }) => set(data))
    }, [])
    return (
        <div className="flex flex-col m-4 min-h-screen bg-white group/design-root overflow-x-hidden w-full"  >
            <Header title={"مسودة االدورات"} />
            {courses.map((course, index) => <DefCourseItem key={index}{...course} />)}

            {/* <AddCourseButton /> */}
        </div>
    );
}

// CourseItem.jsx 

const DefCourseItem = ({ title, Source, _id,image }) => {
    return (
        <Link to={`/admin/def-courses/${_id}`} className="flex items-center gap-4 group bg-white px-4 min-h-[72px] py-2  rounded-lg hover:bg-slate-100 group">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 group-hover:bg-white bg-slate-100" style={{ backgroundImage: `url(${image})` }} ></div>
            <div className="flex flex-col justify-center">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">{title}</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">{Source}</p>
            </div>
            {/* <p className="bg-slate-100 p-2 rounded-lg min-w-[70px] text-center font-bold group-hover:!bg-white">${price?.toString()?.split(".")[0]}</p> */}
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