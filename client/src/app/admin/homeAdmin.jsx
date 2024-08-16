import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config";
import Cookies from "js-cookie"
import { Link } from "react-router-dom";

export default function HomeAdmin() {
    const [admin, set] = useState([])
    let token = Cookies.get("x-auth-token")
    useEffect(() => {
        axios.get(`${config.api}/admin`, { headers: { "x-auth-token": token } })
            .then(({ data }) => set(data))
    }, [])



    let data = [
        { title: "مسودة الدورات", herf: "/admin/def-courses", value: admin.defCourses },
        { title: "الدورات", herf: "/admin/courses", value: admin.courses },
        { title: "تفاصيل المستخدمين ", herf: "/admin/users-details", value: admin.userDetails },
        { title: "المستخدمين", herf: "/admin/users", value: admin.users },
    ]
    return (
        <div className=" flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden max-w-[800px]"  >
            <div>
                <div className="flex items-center bg-white p-4 pb-2 justify-between">
                    <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-start pl-12">لوحة التحكم</h2>
                </div>
                <div className="flex flex-wrap gap-4 p-4">
                    {data.map(a => <Box key={a.title} {...a} />)}
                </div>
                {data.map(a => <Part key={a.title} {...a} />)}
            </div>
        </div >
    )
}

function Box({ title, value }) {
    return (
        <div className="flex min-w-[158px] justify-between flex-1 flex-col gap-2 rounded-xl p-6 bg-[#f0f2f5] cursor-pointer">
            <p className="text-[#111518] text-base font-medium leading-normal">{title}</p>
            <p className="text-[#111518] tracking-light text-2xl font-bold leading-tight">+{value}</p>
        </div>
    )
}

function Part({ title, herf }) {

    return (
        <Link to={herf} className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
            <p className="text-[#111518] text-base font-medium leading-normal flex-1 truncate">ادارة {title}</p>
            <div className="shrink-0">
                <div className="text-[#111518] flex size-7 items-center justify-center rotate-180" data-icon="CaretRight" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                    </svg>
                </div>
            </div>
        </Link>
    )
}