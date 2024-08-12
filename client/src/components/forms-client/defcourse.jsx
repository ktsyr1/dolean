import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormField from '../Element/FormField'; // افترض أن FormField موجودة في هذا المسار
import config from '../../config';
import axios from 'axios';

const AddDefCourse = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');
    const onSubmit = async (res) => {
        try {
            const url = `${config.api}/student/def-courses`;
            const { data } = await axios.post(url, res);
            setMessage();
        } catch (error) {
            console.error('Error updating profile:', error);
            setMessage({ message: 'حدث خطأ أثناء تحديث الملف الشخصي. يرجى المحاولة مرة أخرى.', type: 'error' });
        }
    };
    return (
        <form className="space-y-4 md:space-y-6 w-full *:w-full flex flex-col items-center max-w-md mx-auto p-4 rtl text-slate-900" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                إضافة دورة
            </h1>

            <FormField
                label="عنوان الدورة"
                name="title"
                type="text"
                placeholder="أدخل عنوان الدورة"
                register={register}
                validation={{ required: 'عنوان الدورة مطلوب' }}
                errors={errors}
            />

            <FormField
                label="كامل إعلان الدورة"
                name="context"
                type="textarea"
                rows="4"
                placeholder="أدخل كامل إعلان الدورة"
                register={register}
                validation={{ required: 'إعلان الدورة مطلوب' }}
                errors={errors}
            />
            {/* add firebase */}
            {/* <FormField
                label="إعلان الدورة كصورة"
                name="image"
                type="file"
                register={register}
                validation={{}}
                errors={errors}
            /> */}

            <FormField
                label="مصدر الدورة"
                name="ref"
                register={register}
                validation={{}}
                errors={errors}
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
    );
};

export default AddDefCourse;
