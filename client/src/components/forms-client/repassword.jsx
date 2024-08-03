import { useState } from 'react';
import { Link } from 'react-router-dom';

let ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // هنا يمكنك إضافة منطق إرسال البريد الإلكتروني لإعادة تعيين كلمة المرور
        setMessage('تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.');
    }

    return (
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                تعيين كلمة المرور
            </h1>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">البريد الإلكتروني</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">إعادة تعيين كلمة المرور</button>
            {message && <p className="text-sm text-green-600">{message}</p>}
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                هل لديك حساب؟ <Link to="?route=login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">تسجيل الدخول</Link>
            </p>
        </form>
    )
}

export default ResetPassword;

