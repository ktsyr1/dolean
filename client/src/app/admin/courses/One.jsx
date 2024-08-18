
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../layoutAdmin';
import OneCourse from '../../OneCourse';
import axios from 'axios';
import config, { headers } from '../../../config';


export default function OneCourses() {
    const { id } = useParams();

    let deleteOne = async () => {
        axios.delete(`${config.api}/admin/courses/${id}`, headers)
            .then(({ data }) => location.replace("/admin/courses"))
    }
    return (
        <div className=" w-full md:*:!w-full"  >
            <Header title={"الدورة"} to="/admin/courses" />
            <OneCourse />
            <div className="flex flex-row items-center mt-6">
                <button className="flex items-center justify-center py-2.5 px-5 text-sm font-medium   focus:outline-none bg-white rounded-lg border border-primary-500 hover:border-primary-700 text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 cursor-pointer hover:bg-primary-500 hover:text-white" >
                    <svg className="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"                         >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                    </svg>
                    تعديل الدورة
                </button>

                <button onClick={deleteOne} className="text-red-700 mr-4 sm:mt-0 border border-red-700  hover:bg-red-500 hover:text-white focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"                             >
                    حذف الدورة
                </button>
            </div>

        </div>
    );
} 