import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import config from '../../config';
import axios from "axios"
import Cookies from "js-cookie"
const Login = () => {
    let route = useLocation()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        let url = `${config.api}/auth`
        axios.put(url, data)
            .then((data) => {
                Cookies.set('x-auth-token', data.data?.token, { expires: 1 })
                Cookies.set('isAdmin', data.data?.isAdmin, { expires: 1 })
                console.log(data)
                location.replace("/")
            })
        // يمكنك هنا إضافة منطق تسجيل الدخول الخاص بك
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                تسجيل دخول
            </h1>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">البريد الإلكتروني<span className="text-red-500">*</span></label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    {...register('email', { required: 'البريد الإلكتروني مطلوب' })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">كلمة المرور<span className="text-red-500">*</span></label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register('password', { required: 'كلمة المرور مطلوبة' })}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                <Link to="?route=resetpassword" className="text-sm text-primary-600 hover:underline my-4 dark:text-primary-500 text-left w-full flex justify-end">هل نسيت كلمة المرور؟</Link>
            </div>
            <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                تسجيل دخول
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 w-full text-center my-4">
                ليس لديك حساب؟ <Link to="?route=signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">إنشاء حساب</Link>
            </p>
        </form>
    );
};

export default Login;
