import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import axios from 'axios';
import config, { headers } from '../../config';
import FormField from '../Element/FormField';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
    const navigate = useNavigate();
    const token = Cookies.get("authorization");

    useEffect(() => {
        if (!token) {
            navigate("/auth?route=login", { replace: true });
        }
    }, [navigate, token]);

    return token ? <Forms /> : null;
}
const Forms = () => {

    const methods = useForm();
    const { handleSubmit, reset } = methods

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true); // حالة التحميل
    const url = `${config.api}/student/profile`;
    const token = Cookies.get("authorization");
    if (!token) throw new Error('Unauthorized');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(url, headers);
                reset(data); // Populate the form with the fetched data
                setLoading(false); // إنهاء التحميل بعد جلب البيانات
            } catch (error) {
                console.error('Error fetching profile:', error);
                setMessage('حدث خطأ أثناء تحميل البيانات. يرجى المحاولة مرة أخرى.');
                setLoading(false); // إنهاء التحميل حتى في حالة الخطأ
            }
        };

        fetchData();
    }, [reset]);

    const onSubmit = async (res) => {
        try {
            const { data } = await axios.put(url, res, headers);
            setMessage({ message: 'تم تحديث المعلومات بنجاح.', type: 'success' });
        } catch (error) {
            console.error('Error updating profile:', error);
            setMessage({ message: 'حدث خطأ أثناء تحديث الملف الشخصي. يرجى المحاولة مرة أخرى.', type: 'error' });
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 w-full *:w-full flex flex-col items-center max-w-md mx-auto p-4 rtl text-slate-900">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ddark:text-white text-center">
                    تعديل الملف الشخصي
                </h1>

                {loading ? (
                    <p className="text-center">جاري تحميل البيانات...</p>
                ) : (
                    <>
                        <FormField
                            label="الاسم الكامل"
                            name="name"
                            validation={{ required: "الاسم مطلوب" }}
                            placeholder=""
                        />

                        <FormField
                            label="رقم الهاتف"
                            name="phone"
                            type="tel"
                            placeholder="رقم هاتفك"
                            validation={{
                                required: 'رقم الهاتف مطلوب',
                                minLength: {
                                    value: 6,
                                    message: 'رقم الهاتف يجب أن يكون 6 أرقام على الأقل'
                                }
                            }}
                        />


                        <FormField
                            name="email"
                            label="البريد الإلكتروني"
                            type="email"
                            placeholder="name@company.com"
                            validation={{
                                required: 'البريد الإلكتروني مطلوب',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'البريد الإلكتروني غير صالح'
                                }
                            }}
                        />

                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ddark:bg-primary-600 ddark:hover:bg-primary-700 ddark:focus:ring-primary-800">
                            تحديث المعلومات
                        </button>
                    </>
                )}

                {message && (
                    <p className={`text-center mt-4 p-4 rounded-lg ${message.type === 'error' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                        {message.message}
                    </p>
                )}
            </form>
        </FormProvider>
    );
};

