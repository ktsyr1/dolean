import { useState } from 'react';
import { useForm } from 'react-hook-form';

let EditProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');

    const onSubmit = (data) => {
        // Log the form data to the console
        console.log('Form data:', data);
        // هنا يمكنك إضافة منطق تحديث الملف الشخصي
        setMessage('تم تحديث الملف الشخصي بنجاح.');
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 w-full">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            تعديل الملف الشخصي
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الاسم الكامل</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="اسمك" 
                                    {...register('name', { required: 'الاسم مطلوب' })} 
                                />
                                {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم الهاتف</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    id="phone" 
                                    className="bg-gray-50 text-right border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="رقم هاتفك" 
                                    {...register('phone', { required: 'رقم الهاتف مطلوب' })} 
                                />
                                {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">البريد الإلكتروني</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="name@company.com" 
                                    {...register('email', { required: 'البريد الإلكتروني مطلوب' })} 
                                />
                                {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                            </div>
                         
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">تحديث المعلومات</button>
                            {message && <p className="text-sm text-green-600">{message}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditProfile;
