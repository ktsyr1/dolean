import React, { useContext, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import axios from 'axios';
import config, { headers } from '../../../config';
import FormField from '../../../components/Element/FormField';
import { CourseContext } from './page';
import { Storage } from '../../../components/firebase';

const AddCourse = ({ nextStep, prevStep }) => {
    const methods = useForm();
    let { handleSubmit, reset } = methods;
    let { Course } = useContext(CourseContext);
    const [Res, setRes] = useState({});
    const [imageMsg, setImageMsg] = useState();

    useEffect(() => reset(Course), [Course]);

    const onSubmit = async (res) => {
        try {
            // التحقق من قيمة الجنسية
            // const validNationalities = ["Lebanese", "Palestinian", "Syrian", "All"];
            // if (!validNationalities.includes(data.nationality)) {
            //     throw new Error('الجنسية غير صالحة');
            // } 
            res["image"] = Res?.image ? Res.image : "";
            const url = `${config.api}/admin/courses`;
            const { data } = await axios.post(url, { ...res, ...Res }, headers);
            localStorage.setItem("course",data._id)
            // await axios.post(url, data, headers);
            nextStep();
        } catch (error) {
            console.error('Error adding course:', error);
        }
    };

    async function uploadImage(e) {
        setImageMsg("جاري رفع الصورة")
        const image = await Storage.add(e.target.files);
        setImageMsg("تم رفع الصورة")

        setRes({ ...Res, image: image[0] });
    }

    return (
        <FormProvider {...methods}>
            <div className="w-full flex flex-col items-center max-w-md mx-auto p-4 rtl text-slate-900">
                <form className="space-y-4 md:space-y-6 w-full" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ddark:text-white text-center">
                        إضافة دورة جديدة
                    </h1>

                    <FormField
                        label="عنوان الدورة"
                        name="title"
                        type="text"
                        placeholder="أدخل عنوان الدورة"
                        validation={{ required: 'عنوان الدورة مطلوب' }}
                    />

                    <FormField
                        label="وصف الدورة"
                        name="context"
                        as="textarea"
                        rows="4"
                        placeholder="أدخل وصف الدورة"
                        validation={{ required: 'وصف الدورة مطلوب' }}
                    />

                    <FormField
                        label="اعلان الدورة (اختياري)"
                        name="image"
                        type="file"
                        onChange={uploadImage}
                    />
                    <p className={imageMsg == "جاري رفع الصورة" ? "text-red-600 font-bold" : "text-green-600 font-bold"}>{imageMsg}</p>
                    <FormField
                        label="روابط"
                        name="links"
                        type="text"
                        placeholder="أدخل الروابط"
                    />

                    <FormField
                        label="كلمات رئيسية"
                        name="keys"
                        type="text"
                        placeholder="أدخل الكلمات الرئيسية"
                    />

                    <FormField
                        label="موقع"
                        name="location"
                        type="text"
                        placeholder="أدخل الموقع"
                    />

                    <FormField
                        label="المركز"
                        name="center"
                        type="text"
                        placeholder="أدخل المركز"
                    />

                    <div className="flex space-x-4">
                        <FormField
                            label="عمر بداية"
                            name="age.start"
                            type="number"
                            placeholder="أدخل عمر البداية"
                        />

                        <FormField
                            label="عمر نهاية"
                            name="age.end"
                            type="number"
                            placeholder="أدخل عمر النهاية"
                        />
                    </div>

                    <FormField
                        label="جنسية"
                        name="nationality"
                        type="text"
                        placeholder="أدخل الجنسية"
                    />

                    <FormField
                        label="سعر"
                        name="price"
                        type="number"
                        placeholder="أدخل السعر"
                    // validation={{ required: 'السعر مطلوب' }}
                    />

                    <div className="flex space-x-4">
                        <button
                            type="button"
                            onClick={prevStep}
                            className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ddark:bg-gray-600 ddark:hover:bg-gray-700 ddark:focus:ring-gray-800"
                        >
                            رجوع
                        </button>

                        <button
                            type="submit"
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ddark:bg-primary-600 ddark:hover:bg-primary-700 ddark:focus:ring-primary-800"
                        >
                            إضافة الدورة
                        </button>
                    </div>
                </form>
            </div>
        </FormProvider>
    );
};

export default AddCourse;
