import { FormProvider, useForm } from 'react-hook-form';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Preferences from './Preferences';
import StaticInfo from './StaticInfo';
import FormStepper from '../../Element/FormStepper';
import { useState } from 'react';

const Join = () => {
    const methods = useForm();
    const { register, handleSubmit, formState: { errors } } = methods;
    const [step, setStep] = useState(0);

    const steps = [<BasicInfo />, <Education />, <Preferences />, <StaticInfo />];

    const onSubmit = (data) => {
        console.log(data);
        // تنفيذ أي عملية بعد تقديم النموذج
    };

    return (
        <FormProvider {...methods}>
            <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 rtl *:text-slate-900">
                <main className="w-full space-y-6">
                    <section className="text-center">
                        <h2 className="text-xl font-bold">اخبرنا عنك</h2>
                        <p className="text-muted-foreground">حتى نستطيع العثور بدقة أعلى على تدريبات تناسبك</p>
                    </section>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormStepper step={step} setStep={setStep}>
                            {steps.map((step, index) => <div key={index}> {step} </div>)}
                        </FormStepper>
                    </form>
                </main>
            </div>
        </FormProvider>
    );
};

export default Join;
