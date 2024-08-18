import React, { useRef, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormField from '../../Element/FormField';

const PreferenceField = ({ label, name, validation }) => {
    const { register, formState: { errors }, setValue, getValues } = useFormContext();
    const init = useRef();

    // ضبط كلاس الزر حسب ما إذا كان تم اختياره أم لا
    const getButtonClass = (isActive) => {
        return isActive
            ? "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-primary-600 text-white h-10 px-4 py-2 flex-1"
            : "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-1";
    };

    // تحديث قيمة الحقل عند النقر على الزر
    const handleToggle = (value) => {
        console.log(name, value);
        setValue(name, value)
    }

    return (
        <div className="space-y-2 my-4">
            <label className="text-sm font-medium leading-none">{label}</label>
            <input
                aria-describedby={name}
                type="checkbox"
                className="w-4 mx-2 h-4 border hidden border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                {...register(name, validation)}
                ref={init}
            />
            <div className="flex space-x-2 rtl">
                <button type="button" onClick={() => handleToggle(false)} className={getButtonClass(getValues(name) === false)}                >
                    لا
                </button>
                <button type="button" onClick={() => handleToggle(true)} className={getButtonClass(getValues(name) === true)}                >
                    نعم
                </button>
            </div>
            {errors[name] && <span className="text-red-500 text-sm">{errors[name].message}</span>}
        </div>
    );
};


const Preferences = () => {
    const { register, formState: { errors }, control } = useFormContext();
    const paidCourses = useWatch({ control, name: "paidCourses" });
    const freeCourses = useWatch({ control, name: "freeCourses" });
    console.log(paidCourses);
    return (
        <div>
            <h3 className="text-lg font-bold">طريقة الاقتراحات</h3>
            <PreferenceField
                label="هل تبحث عن دورات مجانية؟"
                name="freeCourses"
            />
            <PreferenceField
                label="هل تبحث عن دورات مدفوعة؟"
                name="paidCourses"
            />
            {paidCourses && (
                <FormField
                    label="حدد سقف المدفوعات للدورات المدفوعة"
                    name="paidCoursesLimit"
                    validation={{ required: "سقف المدفوعات مطلوب" }}
                    type="number"
                />

            )}
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
