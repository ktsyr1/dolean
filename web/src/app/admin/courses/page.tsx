import axios from "axios";
import Link from "next/link";
import Headers from '../config';
import { Header } from '../layout';
import Auth from '@/app/auth/page';

export default async function AdminCourses() {

    let headers: any = await Headers()
    if (headers?.Authorization) {
        let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/admin/courses`, { headers })

        if (data) return (
            <div className="flex flex-col min-h-screen bg-white group/design-root overflow-x-hidden w-full"  >
                <Header title={"الدورات"} add="/admin/ai-course" />
                {data.map((course: any) => <CourseItem key={course._id}{...course} />)}
            </div>
        )
    } else return <Auth />
}
// CourseItem.jsx 

const CourseItem = ({ image: image, title, location, price, _id }: any) => {
    return (
        <Link href={`/admin/courses/${_id}`} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-start rounded-lg hover:bg-slate-200 group">
            {image.length > 1
                ? <img loading='lazy' src={image} alt={title} className="w-32 h-32 object-cover rounded-md bg-gray-200" style={{ aspectRatio: "80 / 80", objectFit: "cover" }} />
                : <div className='w-32 h-32  bg-gray-200 rounded-md flex justify-center items-center text-gray-300 font-bold'>لا يوجد صورة</div>}
            <div className="flex flex-col justify-center *:m-2">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">{title}</p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">{location}</p>
                <p className="bg-slate-100 w-min p-2 rounded-lg min-w-[70px] text-center font-bold  group-hover:!bg-white">${price?.toString()?.split(".")[0]}</p>
            </div>
        </Link>
    );
}