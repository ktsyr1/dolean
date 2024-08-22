import { FormProvider, useForm } from 'react-hook-form';
import BasicInfo from './BasicInfo';
import Education from './Education';
import Preferences from './Preferences';
import StaticInfo from './StaticInfo';
import FormStepper from '../../Element/FormStepper';
import { useState } from 'react';
import config from '../../../config';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';


let def = { 
    "fullName": "sdfs",
    "phone": "70723177",
    "births": {
        "$date": "1999-11-11T00:00:00.000Z"
    },
    "Governorate": "Beirut",
    "city": "zahle",
    "nationality": "Palestinian",
    "interests": "سيشبيسب",
    "educationLevel": "Secondary",
    "classes": "سيبس",
    "englishLevel": "Advanced",
    "computerUsage": "Intermediate",
    "freeCourses": true,
    "paidCourses": false,
    "paidCoursesLimit": null,
    "requiredCourses": [],
    "deleteState": false,
    "create_at": {
        "$date": "2024-08-18T17:45:07.690Z"
    },
    "__v": 0
}
const Join = () => {

    const methods = useForm({ defaultValues: def });
    const { handleSubmit } = methods;
    const [step, setStep] = useState(2);

    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const route = query.get("state") || false;
    const steps = [
        <BasicInfo />,
        <Education />,
        <Preferences />
    ];

    console.log(route);

    const onSubmit = data => {
        console.log(data);
        let url = `${config.api}/student/apply`;
        axios.post(url, data).then((response) => {
            console.log(response);
            navigate("?state=success", { replace: true });
        }).catch((error) => {
            console.error("There was an error submitting the form!", error);
        });
    };


    return (
        <FormProvider {...methods}>
            <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 rtl *:text-slate-900">
                <main className="w-full space-y-6">
                    <section className="text-center">
                        <h2 className="text-xl font-bold">اخبرنا عنك</h2>
                        <p className="text-muted-foreground">حتى نستطيع العثور بدقة أعلى على تدريبات تناسبك</p>
                    </section>
                    {route ?
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
