"use client"
import React, { createContext, useState } from 'react';
import AddDefCourse from './AddDefCourse';
import AddCourse from './AddCourse';
import SendMessages from './SendMessages';
import Link from 'next/link';

export let CourseContext = createContext({})

export default function AiCourse() {
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
            <Header title={"اضافة دوراة"} to="/admin/courses" />
            <View />
        </CourseContext.Provider>
    )
};

const Header = ({ to = "/admin", title, add }: any) => {
    return (
        <div className="flex items-center flex-row justify-start bg-white p-4 pb-2  ">
            <Link href={to} className="text-[#111518] flex items-center rotate-180" aria-label="Back">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                </svg>
            </Link>
            <h2 className="text-[#111518] text-lg font-bold leading-tight pr-12">{title}</h2>
            {add && <Link href={add} className="text-white bg-primary-700 p-2 px-4 rounded-md flex items-center mx-4 font-bold text-3xl"  >
                +
            </Link>}
        </div>
    );
};