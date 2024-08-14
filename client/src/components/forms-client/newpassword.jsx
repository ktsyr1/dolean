import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import axios from 'axios';
import config from '../../config';
import FormField from '../Element/FormField';
import Cookies from "js-cookie";
import { useLocation } from 'react-router';

const NewPassword = () => {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const token = query.get("token")

    const methods = useForm();
    const { handleSubmit, watch } = methods
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const url = `${config.api}/auth/new-password`;
            let { data: res } = await axios.post(url, { newPassword: data.newPassword, token });
            location.replace("/")

            // افتراض أن الطلب تم بنجاح
            setMessage(res);
        } catch (error) {
            setMessage(error.response.data);
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormProvider {...methods}>
            <div>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                        تعيين كلمة مرور جديدة
                    </h1>

                    <FormField
                        label="كلمة المرور الجديدة"
                        name="newPassword"
                        type="password"
                        placeholder="••••••••"
                        validation={{
                            required: 'كلمة المرور الجديدة مطلوبة',
                            minLength: {
                                value: 8,
                                message: 'كلمة المرور يجب أن تكون 8 أحرف على الأقل'
                            },
                            // pattern: {
                            //     value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            //     message: 'كلمة المرور يجب أن تحتوي على أحرف وأرقام'
                            // }
                        }}
                    />

                    <FormField
                        label="تأكيد كلمة المرور الجديدة"
                        name="confirmNewPassword"
                        type="password"
                        placeholder="••••••••"
                        validation={{
                            required: 'تأكيد كلمة المرور الجديدة مطلوب',
                            validate: value => value === watch('newPassword') || 'كلمة المرور لا تتطابق'
                        }}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        {loading ? 'جاري التعيين...' : 'تعيين كلمة المرور'}
                    </button>
                </form>

                {message && (
                    <p className={`text-center mt-4 p-4 rounded-lg ${message.state ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {message.message}
                    </p>
                )}

                <p className="text-sm font-light text-gray-500 dark:text-gray-400 my-4">
                    لديك حساب بالفعل؟ <a href="/auth?route=login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">تسجيل الدخول</a>
                </p>
            </div>
        </FormProvider>
    );
};

export default NewPassword;
