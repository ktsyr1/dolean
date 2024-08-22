import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import config from '../../config';
import Cookies from "js-cookie"

const Signup = () => {
    let route = useLocation()
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [message, setMessage] = React.useState('');

    const onSubmit = async (data) => {
        try {
            // استبدل هذا بعنوان API الفعلي الخاص بك
            const url = `${config.api}/auth/signup`;
            axios.post(url, data)
                .then((data) => {
                    Cookies.set('authorization', data.data?.token, { expires: 1 })
                    location.replace("/")
                })
        } catch (error) {
            console.error('حدث خطأ أثناء إنشاء الحساب:', error);
            setMessage('حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة مرة أخرى.');
        }
    };

    // التحقق من تطابق كلمات المرور
    const validatePassword = (value) => {
        if (value !== watch('password')) {
            return 'كلمات المرور غير متطابقة';
        }
        return true;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ddark:text-white text-center">
                تسجيل
            </h1>
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ddark:text-white">الاسم<span className="text-red-500">*</span></label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ddark:bg-gray-700 ddark:border-gray-600 ddark:placeholder-gray-400 ddark:text-white ddark:focus:ring-blue-500 ddark:focus:border-blue-500"
                    placeholder="اسمك"
                    {...register('name', { required: 'الاسم مطلوب' })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ddark:text-white">رقم الهاتف<span className="text-red-500">*</span></label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 text-right border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ddark:bg-gray-700 ddark:border-gray-600 ddark:placeholder-gray-400 ddark:text-white ddark:focus:ring-blue-500 ddark:focus:border-blue-500"
                    placeholder="رقم هاتفك"
                    {...register('phone', { required: 'رقم الهاتف مطلوب' })}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ddark:text-white">البريد الإلكتروني<span className="text-red-500">*</span></label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ddark:bg-gray-700 ddark:border-gray-600 ddark:placeholder-gray-400 ddark:text-white ddark:focus:ring-blue-500 ddark:focus:border-blue-500"
                    placeholder="name@company.com"
                    {...register('email', {
                        required: 'البريد الإلكتروني مطلوب',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'البريد الإلكتروني غير صالح'
                        }
                    })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ddark:text-white">كلمة المرور<span className="text-red-500">*</span></label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ddark:bg-gray-700 ddark:border-gray-600 ddark:placeholder-gray-400 ddark:text-white ddark:focus:ring-blue-500 ddark:focus:border-blue-500"
                    {...register('password', { required: 'كلمة المرور مطلوبة' })}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>
            <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ddark:text-white">تأكيد كلمة المرور<span className="text-red-500">*</span></label>
                <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ddark:bg-gray-700 ddark:border-gray-600 ddark:placeholder-gray-400 ddark:text-white ddark:focus:ring-blue-500 ddark:focus:border-blue-500"
                    {...register('confirmPassword', {
                        required: 'تأكيد كلمة المرور مطلوب',
                        validate: validatePassword
                    })}
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
            </div>
            <div className="flex items-start flex-col">
                <div className="flex items-center h-5">
                    <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 mx-2 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 ddark:bg-gray-700 ddark:border-gray-600 ddark:focus:ring-primary-600 ddark:ring-offset-gray-800"
                        {...register('terms', { required: 'يجب الموافقة على الشروط والأحكام' })}
                    />
                    <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 ddark:text-gray-300">أوافق على <Link className="font-medium text-primary-600 hover:underline ddark:text-primary-500" to="/p/terms-conditions">الشروط والأحكام</Link></label>
                    </div>
                    {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>}
                </div>
            </div>
            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ddark:bg-primary-600 ddark:hover:bg-primary-700 ddark:focus:ring-primary-800">إنشاء حساب</button>
            <p className="text-sm font-light text-gray-500 ddark:text-gray-400">
                لديك حساب بالفعل؟ <Link to="?route=login" className="font-medium text-primary-600 hover:underline ddark:text-primary-500">تسجيل الدخول</Link>
            </p>
            {message && <p className="text-green-600 text-center mt-4">{message}</p>}
        </form>
    );
};

export default Signup;
