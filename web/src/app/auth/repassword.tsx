"use client";

import React, { useState } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import FormField from '@/components/Element/FormField'; // تأكد من أن مسار الاستيراد صحيح

interface ResetPasswordInputs {
    email: string;
}

const ResetPassword: React.FC = () => {
    const methods = useForm<ResetPasswordInputs>();
    const { handleSubmit, formState: { errors } } = methods;
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const onSubmit: SubmitHandler<ResetPasswordInputs> = async (data) => {
        setLoading(true);
        try {
            const url = `${process.env.NEXT_PUBLIC_API}/auth/reset-password`;
            await axios.post(url, { email: data.email });
            setMessage('تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.');
        } catch (error: any) {
            console.error('هناك خطأ في إرسال البريد الإلكتروني:', error);
            setMessage(error.response?.data?.message || 'حدث خطأ أثناء إرسال الرابط. يرجى المحاولة مرة أخرى.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormProvider {...methods}>
            <div className="max-w-md mx-auto p-4">
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                        تعيين كلمة المرور
                    </h1>
                    <FormField
                        label="البريد الإلكتروني"
                        name="email"
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
                    <button type="submit" disabled={loading} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >
                        {loading ? 'جاري إعادة التعيين...' : 'إعادة تعيين كلمة المرور'}
                    </button>
                    {message && (
                        <p className={`text-sm ${message.includes('نجاح') ? 'text-green-600' : 'text-red-600'} text-center mt-4`}>
                            {message}
                        </p>
                    )}
                    <p className="text-sm font-light text-gray-500 text-center mt-4">
                        هل لديك حساب؟ <a href="/auth?route=login" className="font-medium text-primary-600 hover:underline">تسجيل الدخول</a>
                    </p>
                </form>
            </div>
        </FormProvider>
    );
};

export default ResetPassword;
