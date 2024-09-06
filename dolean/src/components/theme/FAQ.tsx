"use client"
import React, { useState } from "react";

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex items-center justify-center max-w-[1300px] w-full">
            <div className="bg-card rounded-lg text-card-foreground w-[90%]">
                <div className="p-6">
                    <h2 className="text-2xl font-semibold">الأسئلة الشائعة</h2>
                    <div className="w-full mt-4" data-orientation="vertical">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                data-state={openIndex === index ? "open" : "closed"}
                                data-orientation="vertical"
                                className="border-b"
                            >
                                <h3 data-orientation="vertical" data-state={openIndex === index ? "open" : "closed"} className="flex">
                                    <button
                                        type="button"
                                        aria-controls={`faq-content-${index}`}
                                        aria-expanded={openIndex === index}
                                        data-state={openIndex === index ? "open" : "closed"}
                                        data-orientation="vertical"
                                        id={`faq-trigger-${index}`}
                                        className="[&[data-state=open]>svg]:rotate-180 flex flex-1 font-medium items-center justify-between py-4 transition-all"
                                        onClick={() => toggle(index)}
                                    >
                                        {item.question}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                                        >
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    </button>
                                </h3>
                                <div
                                    data-state={openIndex === index ? "open" : "closed"}
                                    id={`faq-content-${index}`}
                                    hidden={openIndex !== index}
                                    role="region"
                                    aria-labelledby={`faq-trigger-${index}`}
                                    data-orientation="vertical"
                                    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down py-4"
                                // style={{
                                //     "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                                //     "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                                // }}
                                >
                                    {openIndex === index && <p>{item.answer}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
const faqItems = [
    {
        question: "مدة الطلب المتقدم",
        answer: "تعتمد مدة الطلب المتقدم على طبيعة الدورة والموارد المتاحة، وعادة ما يتم معالجة الطلبات في غضون أيام قليلة.",
    },
    {
        question: "تكلفة التسجيل",
        answer: "تختلف تكلفة التسجيل حسب الدورة أو البرنامج الذي تختاره، وهناك بعض الدورات التي قد تكون مجانية أو منخفضة التكلفة.",
    },
    {
        question: "طريقة إرسال الدورات",
        answer: "يتم إرسال الدورات إلى البريد الإلكتروني المسجل، ويمكنك استلامها على الفور بعد إتمام التسجيل.",
    },
    {
        question: "لماذا نطلب كل هذه البيانات؟",
        answer: "نجمع البيانات لضمان تقديم تجربة مخصصة وتقديم الدورات التي تلبي احتياجاتك التعليمية بشكل أفضل.",
    },
    {
        question: "آلية إرسال الدورات واختيارها لتناسبك",
        answer: "نقوم باختيار الدورات بناءً على البيانات التي تزودنا بها لضمان أن الدورة التي تحصل عليها تتناسب مع احتياجاتك وطموحاتك.",
    },
];

export default FAQAccordion;
