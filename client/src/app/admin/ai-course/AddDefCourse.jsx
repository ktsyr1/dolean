import React, { useContext, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormField from '../../../components/Element/FormField'; // افترض أن FormField موجودة في هذا المسار
import config, { headers } from '../../../config';
import axios from 'axios';
import { Storage } from '../../../components/firebase';
import { CourseContext } from './page';
import { useParams } from 'react-router-dom';

const AddDefCourse = ({ nextStep }) => {
    const methods = useForm();
    const { handleSubmit, reset } = methods;
    const [message, setMessage] = useState('');
    const [res, setRes] = useState({});
    let { setCourse } = useContext(CourseContext)
    const { id } = useParams();

    useEffect(() => {
        // افترض أنك تستدعي API للحصول على بيانات المستخدم
        if (id) {

            axios.get(`${config.api}/admin/def-courses/${id}`, headers)
                .then(({ data }) => reset(data))
                .catch(error => console.error('Error fetching user data:', error));
        }
    }, [id]);
    const onSubmit = async (init) => {
        try {
            setMessage({ message: 'قد تطول مدة مجالجة البيانات اكثر من دقيقة ', type: 'success' });

            const url = `${config.api}/student/def-courses`;
            const { data } = await axios.post(url, { ...init, ...res });
            setMessage({ message: 'تم التسجيل بنجاح! شكراً لإضافة الدورة.', type: 'success' });
            nextStep();
        } catch (error) {
            console.error('Error updating profile:', error);
            setMessage({ message: 'حدث خطأ أثناء تحديث الملف الشخصي. يرجى المحاولة مرة أخرى.', type: 'error' });
        }
    };

    async function uploadImage(e) {
        const image = await Storage.add(e.target.files);
        setRes({ ...res, image: image[0] });
    }

    const pasteFromClipboard = async () => {
        try {
            const text = await navigator.clipboard.readText();
            let json = JSON.parse(text)
            if (json.title && json.context) {
                setCourse(json)
                nextStep()
            }
        } catch (error) {
            console.error('Failed to read clipboard contents: ', error);
            setMessage({ message: 'فشل في قراءة محتويات الحافظة. يرجى المحاولة مرة أخرى.', type: 'error' });
        }
    };

    return (
        <FormProvider {...methods}>
            <div className="w-full flex flex-col items-center max-w-md mx-auto p-4 rtl text-slate-900">
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
                        name="res"
                    />

                    <FormField
                        label="اعلان الدورة (اختياري)"
                        name="image"
                        type="file"
                        onChange={uploadImage}
                    />
                    <div className="w-full flex flex-row items-center max-w-md mx-auto p-4 rtl text-slate-900">

                        <button
                            type="button"
                            onClick={pasteFromClipboard}
                            className="w-full ml-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            لصق
                        </button>
                        <button
                            type="submit"
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            إضافة الدورة
                        </button>
                    </div>

                    {message && (
                        <p className={`text-center mt-4 p-4 rounded-lg ${message.type === 'error' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                            {message.message}
                        </p>
                    )}
                </form>
            </div>
        </FormProvider>
    );
};

export default AddDefCourse;