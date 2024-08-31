import axios from "axios";
import { useEffect, useState } from "react";
import config, { headers } from "../../../config";
import Cookies from "js-cookie"
import { Header } from "../layoutAdmin";
import { Link } from "react-router-dom";
import data from '../../../static/data.json'

export default function AdminUsersDetails() {
    const [users, setUsers] = useState([])
    const [nationality, setNationality] = useState(null)
    useEffect(() => {
        let pram = ""
        if (nationality) pram += `nationality=${nationality}`
        axios.get(`${config.api}/admin/users-details?${pram}`, headers)
            .then(({ data }) => setUsers(data))
    }, [nationality])
    return (
        <div className="flex flex-col min-h-screen bg-white group/design-root overflow-x-hidden w-full"  >
            <Header title={"  تفاصيل المستخدمين"} />
            <div className="flex flex-row p-4 items-center" >
                <p className="font-bold">الجنسية</p>
                <ActionButtons value={null} label="الكل" nationality={nationality} setNationality={setNationality} />
                {data.nationality.slice(1, 4).map(a => <ActionButtons {...a} nationality={nationality} setNationality={setNationality} />)}
            </div>
            {users.map((user, index) => <UserItem key={index}{...user} />)}
        </div>
    );
}

// UserItem.jsx 
const UserItem = ({ fullName, phone, _id }) => {
    return (
        <Link to={`/admin/users-details/${_id}`} className="flex items-center gap-4 bg-white px-4 min-h-[72px] justify-between rounded-lg hover:bg-slate-100">
            <div className="flex flex-col justify-center ">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">{fullName}</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">{phone}</p>
            </div>
            <div className="shrink-0">
                <div className="text-[#111518] flex size-7 items-center justify-center" aria-label="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
                    </svg>
                </div>
            </div>
        </Link>
    );
};
// ActionButtons.jsx 

const ActionButtons = ({ label, value, nationality, setNationality }) => {
    return (
        <div className={`flex justify-center`} onClick={() => setNationality(value)}>
            <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                <button className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#f0f2f5] text-[#111518] text-base font-bold leading-normal tracking-[0.015em] grow ${value == nationality && "bg-primary-600 text-white"}`}>
                    <span className="truncate">{label}</span>
                </button>

            </div>
        </div>
    );
}; 