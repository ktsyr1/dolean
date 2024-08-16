import React from 'react';
import FormField from '../../Element/FormField';
import { useFormContext } from 'react-hook-form';
import { Governorate, nationality } from '../../../static/data.json';

const BasicInfo = () => {
    const { register, formState: { errors } } = useFormContext(); // retrieve all hook methods

    return (
        <div>
            <h3 className="text-lg font-bold">المعلومات الأساسية</h3>
            <FormField
                label="الاسم الكامل"
                name="fullName"
                validation={{ required: "الاسم الكامل مطلوب" }}
                placeholder=""
            />
            <FormField
                label="رقم الهاتف"
                name="phone"
                validation={{ required: "رقم الهاتف مطلوب" }}
                placeholder=""
                type="tel"
            />
            <FormField
                label="سنة الميلاد"
                name="births"
                validation={{
                    required: "سنة الميلاد مطلوبة",
                    validate: {
                        validYear: (value) => {
                            const selectedYear = new Date(value).getFullYear();
                            const currentYear = new Date().getFullYear();
                            const minYear = 1900;
                            const minValidYear = currentYear - 3;

                            if (selectedYear > currentYear) return "سنة الميلاد لا يمكن أن تكون في المستقبل";
                            if (selectedYear < minYear) return `سنة الميلاد يجب أن تكون بعد ${minYear}`;
                            if (selectedYear > minValidYear) return `العمر يجب أن يكون أكبر من 3 سنوات`;
                            return true;
                        }
                    }
                }}
                placeholder="حدد السنة"
                type="date"
            />
            <FormField
                label="المحافظة"
                name="Governorate"
                validation={{ required: "مكان السكن الحالي مطلوب" }}
                as="select"
                options={Governorate}
            />
            <FormField
                label="المدينة"
                name="city"
                validation={{ required: "المدينة مطلوبة" }}
                placeholder="حدد المدينة"
            />
            <FormField
                label="الجنسية"
                name="nationality"
                validation={{ required: "الجنسية مطلوبة" }}
                as="select"
                options={nationality}
            />
            <FormField
                label="الدورات المطلوبة"
                name="interests"
                validation={{ required: "الدورات المطلوبة مطلوبة" }}
                placeholder="حدد الدورات التي ترغب في الحصول عليها"
                as="textarea"
                rows={4} // تحديد عدد الأسطر الظاهرة في textarea
                // وصف الحقل ليوضح للمستخدم ما يجب إدخاله
                description="استخدم هذا الحقل لتوضيح الدورات التدريبية التي تحتاجها أو ترغب في الحصول عليها. يمكنك ذكر المجالات أو المواضيع التي تهمك."
            />

        </div>
    );
};

export default BasicInfo;

