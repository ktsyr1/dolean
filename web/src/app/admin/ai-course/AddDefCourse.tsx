"use client"
import React, { useContext, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormField from '@/components/Element/FormField'; // افترض أن FormField موجودة في هذا المسار
import axios from 'axios';
import JsCookie from 'js-cookie';
import { Storage } from '@/components/firebase';
import { CourseContext } from './page';
import { useParams } from 'next/navigation';

type TypeMessage = {
    message: string
    type: string
}
const AddDefCourse = ({ nextStep }: any) => {
    const methods = useForm();
    const { handleSubmit, reset } = methods;
    const [message, setMessage] = useState<TypeMessage | any>('');
    const [res, setRes] = useState<any>({});
    let token = JsCookie.get("authorization")
    let { setCourse }: any = useContext(CourseContext)
    const { id }: any = useParams();
    let headers = { Authorization: `Bearer ${token}` }

    useEffect(() => {
        // افترض أنك تستدعي API للحصول على بيانات المستخدم
        if (id) {

            axios.get(`${process.env.NEXT_PUBLIC_API}/admin/def-courses/${id}`, { headers })
                .then(({ data }) => reset(data))
                .catch(error => console.error('Error fetching user data:', error));
        }
    }, [id]);
    const onSubmit = async (init: any) => {
        try {
            setMessage({ message: 'قد تطول مدة مجالجة البيانات اكثر من دقيقة ', type: 'success' });

            const url = `${process.env.NEXT_PUBLIC_API}/student/def-courses`;
            const { data } = await axios.post(url, { ...init, ...res });
            setMessage({ message: 'تم التسجيل بنجاح! شكراً لإضافة الدورة.', type: 'success' });
            nextStep();
        } catch (error) {
            console.error('Error updating profile:', error);
            setMessage({ message: 'حدث خطأ أثناء تحديث الملف الشخصي. يرجى المحاولة مرة أخرى.', type: 'error' });
        }
    };

    async function uploadImage(e: any) {
        const image: any = await Storage.add(e.target.files);
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

    const pasteClipboardLink = async () => {
        try {
            const text = await navigator.clipboard.readText();
            console.log(text);
            let { data: html }: any = await axios.get(`${process.env.NEXT_PUBLIC_MICRO}/metadata?url=${text}`)
            let context = html.description.slice(html.description.indexOf(":") + 2)
            console.log({ html, context });
            document.querySelector("[name=context]").textContent = context
            // let json = JSON.parse(text)
            // if (json.title && json.context) {
            //     setCourse(json)
            //     nextStep()
            // }
        } catch (error) {
            console.error('Failed to read clipboard contents: ', error);
            setMessage({ message: 'فشل في قراءة محتويات الحافظة. يرجى المحاولة مرة أخرى.', type: 'error' });
        }
    };

    return (
        <FormProvider {...methods}>
            <div className="w-full flex flex-col items-center max-w-md mx-auto p-4 rtl text-slate-900">
                <form className="space-y-4 md:space-y-6 w-full" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ddark:text-white text-center">
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
                            className="w-min ml-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ddark:bg-primary-600 ddark:hover:bg-primary-700 ddark:focus:ring-primary-800"
                        >
                            <IconPaste />
                        </button>
                        <button
                            type="button"
                            onClick={pasteClipboardLink}
                            className="w-min ml-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ddark:bg-primary-600 ddark:hover:bg-primary-700 ddark:focus:ring-primary-800"
                        >
                            <IconsInsta />
                        </button>
                        <button
                            type="submit"
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ddark:bg-primary-600 ddark:hover:bg-primary-700 ddark:focus:ring-primary-800"
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


function IconsInsta() {
    return (
        <svg viewBox="0 0 20 20" width={20} version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff">
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="#fff">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]">
                        </path>
                    </g>
                </g>
            </g>
        </svg >
    )
}
function IconPaste() {
    return (
        <svg viewBox="0 0 24 24" width={20} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C11.2347 0 10.6293 0.125708 10.1567 0.359214C9.9845 0.44429 9.82065 0.544674 9.68861 0.62717L9.59036 0.688808C9.49144 0.751003 9.4082 0.803334 9.32081 0.853848C9.09464 0.984584 9.00895 0.998492 9.00053 0.999859C8.99983 0.999973 9.00019 0.999859 9.00053 0.999859C7.89596 0.999859 7 1.89543 7 3H6C4.34315 3 3 4.34315 3 6V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V6C21 4.34315 19.6569 3 18 3H17C17 1.89543 16.1046 1 15 1C15.0003 1 15.0007 1.00011 15 1C14.9916 0.998633 14.9054 0.984584 14.6792 0.853848C14.5918 0.80333 14.5086 0.751004 14.4096 0.688804L14.3114 0.62717C14.1793 0.544674 14.0155 0.44429 13.8433 0.359214C13.3707 0.125708 12.7653 0 12 0ZM16.7324 5C16.3866 5.5978 15.7403 6 15 6H9C8.25972 6 7.61337 5.5978 7.26756 5H6C5.44772 5 5 5.44772 5 6V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V6C19 5.44772 18.5523 5 18 5H16.7324ZM11.0426 2.15229C11.1626 2.09301 11.4425 2 12 2C12.5575 2 12.8374 2.09301 12.9574 2.15229C13.0328 2.18953 13.1236 2.24334 13.2516 2.32333L13.3261 2.37008C13.43 2.43542 13.5553 2.51428 13.6783 2.58539C13.9712 2.75469 14.4433 3 15 3V4H9V3C9.55666 3 10.0288 2.75469 10.3217 2.58539C10.4447 2.51428 10.57 2.43543 10.6739 2.37008L10.7484 2.32333C10.8764 2.24334 10.9672 2.18953 11.0426 2.15229Z" fill="#fff"></path>
            </g></svg>
    )
}