import axios from "axios";
import { Header } from "../layout";
import Link from "next/link";
import Headers from "../config";
import Auth from "@/app/auth/page";

export default async function AdminUsers() {

    let headers: any = await Headers()
    if (headers?.Authorization) {
        let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/admin/users`, { headers })

        if (data) return (
            <div className="flex flex-col min-h-screen bg-white group/design-root overflow-x-hidden w-full"  >
                <Header title={"المستخدمين"} />
                {data.map((user: any, index: any) => <UserItem key={index}{...user} />)}
            </div>
        )
    } else return <Auth />
}

// UserItem.jsx 
const UserItem = ({ name, phone, _id }: any) => {
    return (
        <Link href={`/admin/users/${_id}`} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between rounded-lg hover:bg-slate-100">
            <div className="flex flex-col justify-center ">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">{name}</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">{phone}</p>
            </div>
        </Link>
    );
};


