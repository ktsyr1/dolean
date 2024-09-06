
import axios from "axios";
import { Header } from "../layout";
import Link from "next/link";
import Nationality from '@/static/data.json'
import Headers from "../config";
import Auth from "@/app/auth/page";

export default async function AdminUsersDetails({ searchParams: { nationality } }: any) {

    let headers: any = await Headers()

    if (headers?.Authorization) {
        let pram = nationality ? `nationality=${nationality}` : ""
        let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/admin/users-details?${pram}`, { headers })

        if (data) return (
            <div className=" flex min-h-screen w-full flex-col bg-white justify-between group/design-root overflow-x-hidden max-w-[800px]"  >
                <div className="flex flex-col min-h-screen bg-white group/design-root overflow-x-hidden w-full"  >
                    <Header title={"  تفاصيل المستخدمين"} />
                    <div className="flex flex-row p-4 items-center" >
                        <p className="font-bold">الجنسية</p>
                        <ActionButtons value={null} label="الكل" nationality={nationality} />
                        {Nationality.nationality.slice(1, 4).map((a: any, i: any) => <ActionButtons {...a} key={i} nationality={nationality} />)}
                    </div>
                    {data.map((user: any, index: any) => <UserItem key={index}{...user} />)}
                </div>
            </div>
        )
    } else return <Auth />
}

// UserItem.jsx 
const UserItem = ({ fullName, phone, _id }: any) => {
    return (
        <Link href={`/admin/users-details/${_id}`} className="flex items-center gap-4 bg-white px-4 min-h-[72px] justify-between rounded-lg hover:bg-slate-100">
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

function ActionButtons({ label, value, nationality }: any) {

    return (
        <div className={`flex justify-center`}  >
            <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                <Link href={`/admin/users-details${value == null ? "" : `?nationality=${value}`}`} className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#f0f2f5] text-[#111518] text-base font-bold leading-normal tracking-[0.015em] grow ${value == nationality && "bg-primary-600 text-white"}`}>
                    <span className="truncate">{label}</span>
                </Link>
            </div>
        </div>
    );
}; 