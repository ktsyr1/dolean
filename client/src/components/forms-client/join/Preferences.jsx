import React from 'react';
import ToggleButton from '../../Element/ToggleButton';
import { useFormContext } from 'react-hook-form';

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
            <PreferenceField
                label="الموافقة على مشاركة اسمك ورقم هاتفك مع المراكز التعليمية"
                name="shareInfo"
                register={register}
                errors={errors}
            />
        </div>
    );
};

export default Preferences;
