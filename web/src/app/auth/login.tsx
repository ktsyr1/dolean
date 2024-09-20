"use client";

import React, { useState } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import FormField from '@/components/Element/FormField';
import { createFatch } from '../action';

interface LoginFormInputs {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const methods = useForm<LoginFormInputs>();
    const { handleSubmit, formState: { errors } } = methods;
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        setLoading(true);
        try {
            const response: any = await createFatch(`/auth/login`, data)
            console.log({response});

            // const response = await axios.post(url, data);
            Cookies.set('authorization', response?.token, { expires: 1 });
            Cookies.set('isAdmin', response?.isAdmin, { expires: 1 });
            router.replace('/'); // استبدال location.reload() بـ router.replace('/')
        } catch (error: any) {
            setErrorMessage(error.response?.data?.message || 'حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormProvider {...methods}>
            <div className="max-w-md mx-auto p-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                        تسجيل دخول
                    </h1>
                    <FormField
                        label="البريد الإلكتروني"
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                        validation={{ required: 'البريد الإلكتروني مطلوب' }}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

                    <FormField
                        label="كلمة المرور"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        validation={{ required: 'كلمة المرور مطلوبة' }}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    {errorMessage && <p className="text-red-500 text-sm text-center mt-4">{errorMessage}</p>}

                    <a href="?route=resetpassword" className="text-sm text-primary-600 hover:underline my-4 text-left w-full flex justify-end">
                        هل نسيت كلمة المرور؟
                    </a>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        {loading ? 'جاري تسجيل الدخول...' : 'تسجيل دخول'}
                    </button>

                    <p className="text-sm font-light text-gray-500 w-full text-center my-4">
                        ليس لديك حساب؟ <a href="?route=signup" className="font-medium text-primary-600 hover:underline">إنشاء حساب</a>
                    </p>
                </form>
            </div>
        </FormProvider>
    );
};

export default Login;
