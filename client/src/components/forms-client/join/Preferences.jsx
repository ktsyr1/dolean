import React from 'react';
import ToggleButton from '../../Element/ToggleButton';
import { useFormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';

const PreferenceField = ({ label, name, register, errors }) => (
    <div className="space-y-2 my-4">
        <label className="text-sm font-medium leading-none">{label}</label>
        <div className="flex space-x-2 rtl">
            <ToggleButton name={name} value="No" register={register}>لا</ToggleButton>
            <ToggleButton name={name} value="Yes" register={register}>نعم</ToggleButton>
        </div>
        {errors[name] && <span className="text-red-500 text-sm">{errors[name].message}</span>}
    </div>
);

const Preferences = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            <h3 className="text-lg font-bold">طريقة الاقتراحات</h3>
            <PreferenceField
                label="هل تبحث عن دورات مجانية؟"
                name="freeCourses"
                register={register}
                errors={errors}
            />
            <PreferenceField
                label="هل تبحث عن دورات مدفوعة؟"
                name="paidCourses"
                register={register}
                errors={errors}
            />
            <div className="flex items-start flex-col">
                <div className="flex items-center h-5">
                    <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 mx-2 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        {...register('terms', { required: 'يجب الموافقة على الشروط والأحكام' })}
                    />
                    <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">أوافق على <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to="/p/terms-conditions">الشروط والأحكام</Link></label>
                    </div>
                </div>
                    {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>}
            </div>
        </div>
    );
};

export default Preferences;
