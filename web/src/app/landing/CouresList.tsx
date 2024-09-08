import Link from "next/link";
import axios from "axios";
import Spinner from "@/components/Element/Spinner";

export default async function CoursesList() {
    let { data }: any = await axios.get(`${process.env.NEXT_PUBLIC_API}/student/courses`)

    if (!data) return <Spinner />
    else return (
        <section className="w-full">
            <div className="flex items-center my-4 mx-4">
                <h2 className="text-xl font-bold">الدورات الحديثة</h2>
            </div>
            <div className="flex items-center my-4 w-full ">
                <div className="relative flex-col justify-center flex w-full">
                    <div id="slider" className="flex flex-wrap justify-center lg:justify-between space-x-4 pb-4 w-full">
                        {data?.slice(0, 3).map((course: any) => <Card key={course._id} data={course} />)}
                    </div>
                    <Link href="/courses" className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 cursor-pointer w-max mx-auto"> المزيد من الدورات </Link>
                </div>
            </div>
        </section>
    );
}

function Card({ data, className }: any) {
    let { title, location, image, _id }: any = data

    return (
        <Link href={`/courses/${_id}`} className={`flex  flex-none flex-col justify-between w-full bg-white m-4 max-w-[360px] min-w-[300px] border-gray-200 rounded-lg shadow ddark:bg-gray-800 ddark:border-gray-700 ${className}`}>
            {image.length > 1
                ? <img loading='lazy' className="max-h-[300px] m-auto rounded-lg w-auto sh-[300px] " src={image} alt={title} />
                : <div className='h-[300px]  w-auto bg-gray-200 rounded-md flex justify-center items-center text-gray-300 font-bold'>لا يوجد صورة</div>}
            <div className="p-5">
                <h5 className="text-xl font-medium tracking-tight text-gray-900 ddark:text-white">{title}</h5>
                <p className="text-gray-700 bg-gray-100 p-2 rounded-lg mt-2 w-max">{location}</p>
            </div>
        </Link>
    );
}
