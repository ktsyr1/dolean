"use client"

import { FormProvider, useForm } from 'react-hook-form';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Preferences from './Preferences';
import StaticInfo from './StaticInfo';
import FormStepper from '../../components/Element/FormStepper';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const Join: React.FC = ({ searchParams: { state } }: any) => {
    const methods = useForm();
    console.log({ state });

    const { handleSubmit } = methods;
    const [step, setStep] = useState(2);

    const router = useRouter();
    const steps = [
        <BasicInfo key="basic-info" />,
        <Education key="education" />,
        <Preferences key="preferences" />
    ];

    const onSubmit = async (data: any) => {
        try {
            const url = `${process.env.NEXT_PUBLIC_API}/student/apply`;
            await axios.post(url, data);
            router.replace("?state=success");
        } catch (error) {
            console.error("There was an error submitting the form!", error);
        }
    };

    return (
        <FormProvider {...methods}>
            <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 rtl *:text-slate-900">
                <main className="w-full space-y-6">
                    <section className="text-center">
                        <h2 className="text-xl font-bold">اخبرنا عنك</h2>
                        <p className="text-muted-foreground">حتى نستطيع العثور بدقة أعلى على تدريبات تناسبك</p>
                    </section>
                    {state == "success" ?
                        <StaticInfo />
                        : <form onSubmit={handleSubmit(onSubmit)}>
                            <FormStepper step={step} setStep={setStep}>
                                {steps.map((step, index) => <div key={index}> {step} </div>)}
                            </FormStepper>
                        </form>
                    }
                </main>
            </div>
        </FormProvider>
    );
};

export default Join;
