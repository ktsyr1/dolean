
import axios from 'axios';
import Headers from '../../config';
import { Header } from '../../layout';
import Auth from '@/app/auth/page';

export default async function OneDefCourses({ params: { id } }: any) {
    let URL = `${process.env.NEXT_PUBLIC_API}/admin/def-courses/${id}`
    let headers: any = await Headers()
    if (headers?.Authorization) {
        let { data } = await axios.get(URL, { headers })

        let deleteOne = async () => axios.delete(URL, headers)
            .then(({ data }) => location.replace("/admin/def-courses"))

        if (data) return (
            <main className="w-full">
                <Header to="/admin/def-courses" title="مسودة الدورة" />
                <Card value={{ data, deleteOne }} />
            </main>
        )
    } else return <Auth />
};

const Card = ({ value }: any) => {
    let { data, deleteOne }: any = value
    let { title, context, image, Source, location } = data

    return (
        <section className="py-8 bg-white md:py-16 ddark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                        <img loading='lazy' className="w-full rounded-lg" src={image} alt={title} />
                    </div>

                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ddark:text-white ">
                            {title}
                            <p className="text-gray-500 ddark:text-gray-400 bg-slate-100 my-4 p-2 w-min text-sm rounded-lg"> {location} </p>
                        </h1>

                        <p className="mb-6 text-gray-500 ddark:text-gray-400" dangerouslySetInnerHTML={{ __html: context }} />
                        <hr className="my-6 md:my-8 border-gray-200 ddark:border-gray-800" />
                        {Source && <p className="text-gray-500 ddark:text-gray-400"> المصدر: {Source} </p>}
                        <div className="flex flex-row items-center mt-6">

                            <button onClick={deleteOne} className="text-red-700 mr-4 sm:mt-0 border border-red-700  hover:bg-red-500 hover:text-white focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 ddark:bg-primary-600 ddark:hover:bg-primary-700 focus:outline-none ddark:focus:ring-primary-800 flex items-center justify-center"                             >
                                حذف الدورة
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

