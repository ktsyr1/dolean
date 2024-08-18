import React, { createContext, useState } from 'react';
import AddDefCourse from './AddDefCourse';
import AddCourse from './AddCourse';
import SendMessages from './SendMessages';
import { Header } from '../layoutAdmin';
export let CourseContext = createContext({})
const AiCourse = () => {
    const [step, setStep] = useState(1);
    const [Course, setCourse] = useState(1);

    const nextStep = () => setStep(step + 1);

    const prevStep = () => setStep(step - 1)
    function View() {
        switch (step) {
            case 1:
                return <AddDefCourse nextStep={nextStep} />;
            case 2:
                return <AddCourse nextStep={nextStep} prevStep={prevStep} />;
            case 3:
                return <SendMessages prevStep={prevStep} />;
            default:
                return <AddDefCourse nextStep={nextStep} />;
        }
    }
    return (
        <CourseContext.Provider value={{ Course, setCourse }} >
            <div >
            <Header title={"اضافة دوراة"} to="/admin/courses" />

                <View />
            </div>
        </CourseContext.Provider>
    )
};

export default AiCourse;