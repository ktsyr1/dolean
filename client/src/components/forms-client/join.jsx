import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseDetailsSection from './CourseDetailsSection'; // استيراد المكون الجديد




const Join = () => {

    const [formData, setFormData] = useState({
        birthYear: '',
        gender: '',
        currentLocation: '',
        city: '',
        residence: '',
        educationLevel: '',
        specialization: '',
        graduationYear: '',
        englishLevel: '',
        computerUsage: '',
        freeCourses: null,
        paidCourses: null,
        shareInfo: null,
        courseDetails: ''  // حقل جديد لتفاصيل الدورة
    });

    const [submissionStatus, setSubmissionStatus] = useState(null);

   // Load draft from local storage on component mount
   useEffect(() => {
    const savedDraft = JSON.parse(localStorage.getItem('courseDraft'));
    if (savedDraft) {
        setFormData(savedDraft);
    }
}, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleButtonClick = (field, value) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleSaveDraft = () => {
        localStorage.setItem('courseDraft', JSON.stringify(formData));
        alert('Draft saved!');
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/submit-form', formData);
            console.log('Form submitted successfully:', response.data);
            localStorage.removeItem('courseDraft'); // Clear draft on successful submission
            setSubmissionStatus('success');
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmissionStatus('error');
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 rtl *:text-slate-900">

            <main className="w-full space-y-6">
                <section className="text-center">
                    <h2 className="text-xl font-bold">اخبرنا عنك</h2>
                    <p className="text-muted-foreground">حتى نستطيع العثور بدقة أعلى على تدريبات تناسبك</p>
                </section>
                <form onSubmit={handleSubmit}/>
                <section className="space-y-4">
                    <h3 className="text-lg font-bold">المعلومات الأساسية</h3>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="birth-year"
                        >
                            
                            سنة الميلاد
                        </label>
                        <input
                             
                             type="number"
                             id="birthYear"
                             placeholder="حدد السنة"
                             value={formData.birthYear}
                             onChange={handleInputChange}
                             className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                         />
                        
                    </div>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="gender"
                        >
                            الجنسية
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="gender"
                            placeholder="حدد الجنسية"
                        />
                    </div>
                    <div classNameName="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="current-location"
                        >
                            مكان السكن الحالي
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="current-location"
                            placeholder="حدد المحافظة"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="city"
                        >
                            المدينة
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="city"
                            placeholder="حدد المدينة"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="residence"
                        >
                            مكان السكن
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="residence"
                            placeholder="حدد المحافظة"
                            
                        />
                    </div>
                </section>
                <section className="space-y-4">
                    <h3 className="text-lg font-bold">التعليم</h3>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="education-level"
                        >
                            المستوى التعليمي
                        </label>
                        <input
                             id="educationLevel"
                             placeholder="حدد مستوى التعليم"
                             value={formData.educationLevel}
                             onChange={handleInputChange}
                             className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                         />
                     </div>

                    
                   
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="specialization"
                        >
                            الاختصاص
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="specialization"
                            placeholder="حدد الاختصاص"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="graduation-year"
                        >
                            سنة التخرج
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="graduation-year"
                            placeholder="حدد السنة"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="english-level"
                        >
                            لغتك الإنجليزية
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="english-level"
                            placeholder="حدد المستوى"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="computer-usage"
                        >
                            استخدامك للحاسوب
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="computer-usage"
                            placeholder="حدد المستوى"
                        />
                    </div>
                </section>
                <section className="space-y-4">
                    <h3 className="text-lg font-bold">طريقة الاقتراحات</h3>
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            هل تبحث عن دورات مجانية؟
                        </label>
                        <div className="flex space-x-2 rtl">
                                <button
                                    type="button"
                                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-1 ${formData.freeCourses === false ? 'bg-accent' : ''}`}
                                    onClick={() => handleButtonClick('freeCourses', false)}
                                >
                                         لا
                                </button>
                                <button
                                    type="button"
                                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-1 ${formData.freeCourses === true ? 'bg-accent' : ''}`}
                                    onClick={() => handleButtonClick('freeCourses', true)}
                                >
                                    نعم
                                </button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            هل تبحث عن دورات مدفوعة؟
                        </label>
                        <div className="flex space-x-2 rtl">
                                <button
                                    type="button"
                                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-1 ${formData.freeCourses === false ? 'bg-accent' : ''}`}
                                    onClick={() => handleButtonClick('freeCourses', false)}
                                >
                                         لا
                                </button>
                            <button
                                    type="button"
                                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-1 ${formData.freeCourses === true ? 'bg-accent' : ''}`}
                                    onClick={() => handleButtonClick('freeCourses', true)}
                                >
                                    نعم
                                </button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            هل تبحث عن دورات مدفوعة؟
                        </label>
                        <p className="text-sm text-muted-foreground">الموافقة على مشاركة اسمك ورقم هاتفك مع الم</p>
                        <div className="flex space-x-2 rtl">
                              <button
                                    type="button"
                                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-1 ${formData.freeCourses === false ? 'bg-accent' : ''}`}
                                    onClick={() => handleButtonClick('freeCourses', false)}
                                >
                                         لا
                                </button>
                                <button
                                    type="button"
                                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-1 ${formData.freeCourses === true ? 'bg-accent' : ''}`}
                                    onClick={() => handleButtonClick('freeCourses', true)}
                                >
                                    نعم
                                </button>
                        </div>
                    </div>
                </section>
                <CourseDetailsSection
                        formData={formData}
                        handleInputChange={handleInputChange}
                    />
                  <div className="flex space-x-4">
                        <button type="button" onClick={handleSaveDraft} className="inline-flex items-center bg-gray-500 text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-gray-600 h-10 px-4 py-2">
                            حفظ المسودة
                        </button>
                        <button type="submit" className="inline-flex items-center bg-indigo-500 text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-primary/90 h-10 px-4 py-2 w-full mt-6">
                            تسجيل الطلب
                        </button>
                    </div>
                {submissionStatus === 'success' && <p classNameName="text-green-500">تم تقديم النموذج بنجاح!</p>}
                {submissionStatus === 'error' && <p classNameName="text-red-500">حدث خطأ أثناء تقديم النموذج. يرجى المحاولة مرة أخرى.</p>}
            </main>
        </div>
    );
};

export default Join;
