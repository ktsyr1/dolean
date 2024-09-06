import axios from "axios";
import Link from "next/link";
import Headers from '../config';
import { Header } from '../layout';
import Auth from '@/app/auth/page';

export default async function AdminDefCourses() {

    let headers: any = await Headers()
    if (headers?.Authorization) {
        let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/admin/def-courses`, { headers })

        if (data) return (
            <div className="flex flex-col m-4 min-h-screen bg-white group/design-root overflow-x-hidden w-full"  >
                <Header title={"مسودة االدورات"} />
                {data.map((course: any) => <DefCourseItem key={course._id}{...course} />)}
            </div>
        )
    } else return <Auth />
}

const DefCourseItem = ({ title, Source, _id, image }: any) => {
    return (
        <Link href={`/admin/def-courses/${_id}`} className="flex items-center gap-4 group bg-white px-4 min-h-[72px] py-2  rounded-lg hover:bg-slate-100 group">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 group-hover:bg-white bg-slate-100" style={{ backgroundImage: `url(${image})` }} ></div>
            <div className="flex flex-col justify-center">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">{title}</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">{Source}</p>
            </div>
            {/* <p className="bg-slate-100 p-2 rounded-lg min-w-[70px] text-center font-bold group-hover:!bg-white">${price?.toString()?.split(".")[0]}</p> */}
        </Link>
    );
}; 