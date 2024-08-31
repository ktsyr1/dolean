import React, { useState } from "react";

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
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
                                    style={{
                                        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                                        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                                    }}
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
        question: "لماذا يؤدي إيقاف تشغيل الجهاز وتشغيله مرة أخرى إلى حل جميع المشاكل؟",
        answer: "إعادة تشغيل الجهاز يمكن أن تزيل الأخطاء المؤقتة وتعيد ضبط النظام، مما يحل العديد من المشاكل الشائعة.",
    },
    {
        question: "هل الكابلات الإضافية في العلبة زينة إضافية؟",
        answer: "لا، الكابلات الإضافية تُوفر لحالات الاستخدام المختلفة أو لاستبدال الكابلات المفقودة أو التالفة.",
    },
    {
        question: "هل يمكنني ارتداء نظارة الواقع الافتراضي في حفل زفاف ابن عمي؟",
        answer: "على الرغم من أن ذلك ممكن تقنياً، إلا أنه قد لا يكون مقبولاً اجتماعياً أو عملياً في ذلك الموقف.",
    },
    {
        question: "كم مرة يجب أن أقوم بتحديث البرمجيات؟",
        answer: "التحديثات المنتظمة ضرورية للأمان والأداء؛ من المستحسن التحديث فور توفرها.",
    },
    {
        question: "لماذا يسخن جهازي عند استخدامه؟",
        answer: "قد يسخن الجهاز عند تنفيذ مهام متطلبة، بسبب الطاقة المطلوبة والحرارة الناتجة عن المعالج.",
    },
];

export default FAQAccordion;
