import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormField from '../Element/FormField'; // افترض أن FormField موجودة في هذا المسار
import config from '../../config';
import axios from 'axios';

const AddDefCourse = () => {
    const methods = useForm();
    const { handleSubmit, reset } = methods
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = async (res) => {
        try {
            const url = `${config.api}/student/def-courses`;
            const { data } = await axios.post(url, res);
            setMessage({ message: 'تم التسجيل بنجاح! شكراً لإضافة الدورة.', type: 'success' });
            setSubmitted(true); // تسجيل النجاح
        } catch (error) {
            console.error('Error updating profile:', error);
            setMessage({ message: 'حدث خطأ أثناء تحديث الملف الشخصي. يرجى المحاولة مرة أخرى.', type: 'error' });
        }
    };

    const closeModal = () => {
        setSubmitted(false);
        reset({})
        setMessage('');
    };

    return (
        <FormProvider {...methods}>
            <div className="w-full flex flex-col items-center max-w-md mx-auto p-4 rtl text-slate-900">
                {!submitted ? (
                    <form className="space-y-4 md:space-y-6 w-full" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            إضافة دورة
                        </h1>

                        <FormField
                            label="عنوان الدورة"
                            name="title"
                            type="text"
                            placeholder="أدخل عنوان الدورة"
                            validation={{ required: 'عنوان الدورة مطلوب' }}
                        />

                        <FormField
                            label="كامل إعلان الدورة"
                            name="context"
                            as="textarea"
                            rows="4"
                            placeholder="أدخل كامل إعلان الدورة"
                            validation={{ required: 'إعلان الدورة مطلوب' }}
                        />

                        <FormField
                            label="مصدر الدورة"
                            name="ref"
                        />

                        <button
                            type="submit"
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            إضافة الدورة
                        </button>

                        {message && (
                            <p className={`text-center mt-4 p-4 rounded-lg ${message.type === 'error' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                {message.message}
                            </p>
                        )}
                    </form>
                ) : (
                    <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white text-center dark:bg-gray-800 rounded-lg shadow-xl">
                        <div className="w-16 h-16 mb-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                            <div className="flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-circle-check-big w-10 h-10 text-green-500 dark:text-green-400"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                            </div>
                            <span className="sr-only">نجاح</span>
                        </div>
                        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">تمت إضافة الدورة بنجاح!</h2>
                        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">شكراً لك على إضافة الدورة. مساهمتك تثري مجتمعنا التعليمي.</p>
                        <button
                            onClick={closeModal}
                            className="py-2 px-4 text-sm font-medium text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition duration-300"
                        >
                            إضافة دورة جديدة
                        </button>
                    </div>
                )}
            </div>
        </FormProvider>
    );
};

export default AddDefCourse;
