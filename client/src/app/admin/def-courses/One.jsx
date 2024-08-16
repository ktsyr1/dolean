import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import config, { headers } from '../../../config';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../layoutAdmin';
let DefCoursesContext = createContext()
const OneDefCourses = () => {
    const [data, setData] = useState(null);
    const [Course, setCourse] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // افترض أنك تستدعي API للحصول على بيانات المستخدم
        axios.get(`${config.api}/admin/def-courses/${id}`, headers)
            .then(({ data }) => setData(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    let AiPreprocessing = async () => {
        let { data :app} = axios.put(`${config.api}/admin/def-courses/${id}`, {}, headers)
        setCourse(app)
    }

    let deleteOne = async () => {
        axios.delete(`${config.api}/admin/def-courses/${id}`, headers)
        .then(({ data }) => location.replace("/admin/def-courses"))
    }
    if (!data) return <p>Loading...</p>;

    return (
        <DefCoursesContext.Provider value={{ data, AiPreprocessing, deleteOne }} >
            <main className="w-full">
                <Header to="/admin/def-courses" title="مسودة الدورة" />
                {Course ? <AddCourse /> : <Card />}
            </main>
        </DefCoursesContext.Provider>
    );
};
export default OneDefCourses;

const Card = () => {
    let { data, AiPreprocessing, deleteOne } = useContext(DefCoursesContext)
    let { title, context, image, Source, location } = data

    return (
        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                        <img className="w-full rounded-lg" src={image} alt={title} />
                    </div>

                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white ">
                            {title}
                            <p className="text-gray-500 dark:text-gray-400 bg-slate-100 my-4 p-2 w-min text-sm rounded-lg"> {location} </p>
                        </h1>

                        <p className="mb-6 text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: context }} />
                        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                        {Source && <p className="text-gray-500 dark:text-gray-400"> المصدر: {Source} </p>}
                        <div className="flex flex-row items-center mt-6">
                            <button onClick={AiPreprocessing} className="flex items-center justify-center py-2.5 px-5 text-sm font-medium   focus:outline-none bg-white rounded-lg border border-primary-500 hover:border-primary-700 text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 cursor-pointer hover:bg-primary-500 hover:text-white" >
                                <svg className="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"                         >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                </svg>
                                معالجة بواسطة ai
                            </button>

                            <button onClick={deleteOne} className="text-red-700 mr-4 sm:mt-0 border border-red-700  hover:bg-red-500 hover:text-white focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"                             >
                                حذف الدورة
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

