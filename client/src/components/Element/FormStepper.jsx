
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';
export default function FormStepper({ children }) {
    const [currentStep, setCurrentStep] = useState(0);
    const { trigger, formState: { isValid } } = useFormContext();
    const steps = React.Children.toArray(children);

    const nextStep = async () => {
        // تحقق من صحة البيانات للمرحلة الحالية
        const isValidStep = await trigger();
        if (isValidStep) setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }

    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

    console.log(steps.length, currentStep);
    return (
        <div>
            <div>{steps[currentStep]}</div>
            {(steps.length - 1) != currentStep ?
                <div className="flex justify-between mt-4">
                    {currentStep > 0 && <>
                        <button
                            type="button"
                            onClick={prevStep}
                            disabled={currentStep === 0}
                            className="text-primary-700 border border-primary-700 btn btn-primary dark:focus:ring-primary-900 focus:ring-4 focus:ring-primary-300 font-medium hover:bg-primary-800 inline-flex items-center justify-center px-5 py-3 rounded-lg text-base text-center w-full"
                        >
                            السابق
                        </button>
                        <div className='m-2' />
                    </>}
                    <button
                        type="button"
                        onClick={nextStep}
                        className="bg-primary-700 btn btn-primary dark:focus:ring-primary-900 focus:ring-4 focus:ring-primary-300 font-medium hover:bg-primary-800 inline-flex items-center justify-center px-5 py-3 rounded-lg text-base text-center text-white w-full"
                    >
                        {currentStep === steps.length - 1 ? 'تقديم' : 'التالي'}
                    </button>
                </div> :
                <Link to="/" className="bg-primary-700 btn btn-primary dark:focus:ring-primary-900 focus:ring-4 focus:ring-primary-300 font-medium hover:bg-primary-800 inline-flex items-center justify-center px-5 py-3 rounded-lg text-base text-center text-white w-full">العودة للصفحة الرئيسية </Link>
            }
        </div>
    );
};
