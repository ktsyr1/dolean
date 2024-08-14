import React, { useState } from 'react';
import FormField from '../../Element/FormField';
import { useFormContext } from 'react-hook-form';

const educationOptions = [
    { value: "", label: "حدد المستوى التعليمي", isSpecialization: false, isClass: true, graduationYear: false },
    { value: "Primary", label: "ابتدائي", isSpecialization: false, isClass: true, graduationYear: false },
    { value: "Intermediate", label: "متوسط", isSpecialization: false, isClass: true, graduationYear: false },
    { value: "Secondary", label: "ثانوي", isSpecialization: true, isClass: true, graduationYear: true },
    { value: "Bachelors", label: "بكالوريوس", isSpecialization: true, isClass: false, graduationYear: true },
    { value: "Masters", label: "ماجستير", isSpecialization: true, isClass: false, graduationYear: true },
    { value: "PhD", label: "دكتوراه", isSpecialization: true, isClass: false, graduationYear: true },
    { value: "Diploma", label: "دبلومة", isSpecialization: true, isClass: false, graduationYear: true },
    { value: "Institute", label: "معهد", isSpecialization: true, isClass: false, graduationYear: true },
    { value: "Other", label: "غير ذلك", isSpecialization: true, isClass: false, graduationYear: false }
];

const Education = () => {
    const { register, formState: { errors } } = useFormContext() // retrieve all hook methods
    const [selectedOption, setSelectedOption] = useState(null);


    const handleEducationChange = (event) => {
        const selectedValue = event.target.value;
        const selected = educationOptions.find(option => option.value === selectedValue);
        setSelectedOption(selected);
    };
    return (
        <div>
            <h3 className="text-lg font-bold">التعليم</h3>
            <FormField
                label="المستوى التعليمي"
                name="educationLevel"
                validation={{
                    required: "المستوى التعليمي مطلوب",
                    validate: (value) => {
                        const validValues = ["Primary", "Intermediate", "Secondary", "Bachelors", "Masters", "PhD", "Diploma", "Institute", "Other"];
                        return validValues.includes(value) || "القيمة المختارة غير صالحة";
                    }
                }}
                as="select"
                options={educationOptions.map(option => ({
                    value: option.value,
                    label: option.label
                }))}
                onChange={handleEducationChange}
            />
            {selectedOption?.isSpecialization && (
                <FormField
                    label="الاختصاص"
                    name="specialization"
                    validation={{ required: "الاختصاص مطلوب" }}
                    placeholder="حدد الاختصاص"
                />
            )}
            {selectedOption?.isClass && (
                <FormField
                    label="الصف الدراسي"
                    name="classes"
                    validation={{ required: "الصف الدراسي مطلوبة" }}
                    placeholder="الخامس"
                />
            )}
            {selectedOption?.graduationYear && (
                <FormField
                    label="سنة التخرج"
                    name="graduationYear"
                    type="number"
                    validation={{
                        required: "سنة التخرج مطلوبة",
                        min: { value: 1950, message: "السنة يجب أن تكون بعد 1950" },
                        max: { value: 2030, message: "السنة يجب أن تكون قبل 2030" }
                    }}
                    placeholder="حدد السنة"
                />
            )}
            <FormField
                label="لغتك الإنجليزية"
                name="englishLevel"
                as="select"
                validation={{ required: "مستوى اللغة الإنجليزية مطلوب" }}
                options={[
                    { value: "", label: "حدد المستوى" },
                    { value: "Beginner", label: "مبتدئ" },
                    { value: "Intermediate", label: "متوسط" },
                    { value: "Advanced", label: "متقدم" },
                    { value: "Fluent", label: "طليق" }
                ]}
            />
            <FormField
                label="استخدامك للحاسوب"
                name="computerUsage"
                as="select"
                validation={{ required: "استخدامك للحاسوب مطلوب" }}
                options={[
                    { value: "", label: "حدد المستوى" },
                    { value: "Basic", label: "أساسي" },
                    { value: "Intermediate", label: "متوسط" },
                    { value: "Advanced", label: "متقدم" }
                ]}
            />
        </div>
    );
};

export default Education;
