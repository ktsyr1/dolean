import React from 'react';
import ToggleButton from '../../Element/ToggleButton';
import { useFormContext } from 'react-hook-form';

const Preferences = () => {
    const { register, formState: { errors } } = useFormContext() // retrieve all hook methods

    return (
        <div>
            <h3 className="text-lg font-bold">طريقة الاقتراحات</h3>
            <div className="space-y-2">
                <label className="text-sm font-medium leading-none">هل تبحث عن دورات مجانية؟</label>
                <div className="flex space-x-2 rtl">
                    <ToggleButton name="freeCourses" value="No" register={register}>لا</ToggleButton>
                    <ToggleButton name="freeCourses" value="Yes" register={register}>نعم</ToggleButton>
                </div>
                {errors.freeCourses && <span className="text-red-500 text-sm">{errors.freeCourses.message}</span>}
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium leading-none">هل تبحث عن دورات مدفوعة؟</label>
                <div className="flex space-x-2 rtl">
                    <ToggleButton name="paidCourses" value="No" register={register}>لا</ToggleButton>
                    <ToggleButton name="paidCourses" value="Yes" register={register}>نعم</ToggleButton>
                </div>
                {errors.paidCourses && <span className="text-red-500 text-sm">{errors.paidCourses.message}</span>}
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium leading-none">الموافقة على مشاركة اسمك ورقم هاتفك مع المراكز التعليمية</label>
                <div className="flex space-x-2 rtl">
                    <ToggleButton name="shareInfo" value="No" register={register}>لا</ToggleButton>
                    <ToggleButton name="shareInfo" value="Yes" register={register}>نعم</ToggleButton>
                </div>
                {errors.shareInfo && <span className="text-red-500 text-sm">{errors.shareInfo.message}</span>}
            </div>
        </div>
    );
};

export default Preferences;
