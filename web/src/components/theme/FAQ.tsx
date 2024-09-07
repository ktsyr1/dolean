"use client"
import React, { useState } from "react";

const FAQAccordion = ({ path }) => {
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
                        {faqItems.filter(a => a.route == path).map((item, index) => (
                            <div
                                key={index}
                                data-state={openIndex === index ? "open" : "closed"}
                                data-orientation="vertical"
                                className="border-b *:text-start"
                            >
                                <h3 data-orientation="vertical" data-state={openIndex === index ? "open" : "closed"} className="flex *:text-start">
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
        "question": "ما هي مدة صلاحية الطلب المقدّم؟",
        "answer": "الطلب صالح لمدة سنة كاملة من تاريخ التقديم. خلال هذه الفترة، نهدف إلى توفير فرص تعليمية تساعدك في اكتساب الخبرات وتحقيق التطور المهني المنشود.",
        "route": "/apply"
    },
    {
        "question": "هل التسجيل في المنصة مجاني؟",
        "answer": "نعم، التسجيل في منصتنا مجاني تماماً لجميع الطلاب. نحن نؤمن بإتاحة فرص التعلم للجميع دون أي تكاليف أولية.",
        "route": "/"
    },
    {
        "question": "كيف يتم إعلامي بالدورات المناسبة لي؟",
        "answer": "نقوم بإرسال إشعارات عبر تطبيق واتساب فور توفر دورات تتناسب مع احتياجاتك وتفضيلاتك التي حددتها عند التسجيل. هذه الطريقة تضمن وصول المعلومات إليك بشكل فوري ومباشر.",
        "route": "/courses"
    },
    {
        "question": "لماذا تحتاجون إلى بياناتي الشخصية؟",
        "answer": "نطلب الحد الأدنى من البيانات الشخصية لأغراض محددة: أولاً، لتخصيص الدورات بما يتناسب مع احتياجاتك الفردية. ثانياً، لضمان تلبية شروط بعض الدورات المحددة بعمر أو جنسية معينة. نلتزم بحماية خصوصيتك واستخدام بياناتك فقط لتحسين تجربتك التعليمية.",
        "route": "/privacy"
    },
    {
        "question": "كيف يتم اختيار الدورات المناسبة لي؟",
        "answer": "نعتمد على نظام ذكي يقوم بتحليل المعلومات التي قدمتها عند التسجيل، مثل مجال اهتمامك، مستوى خبرتك، وأهدافك المهنية. هذا يضمن تقديم اقتراحات مخصصة تتماشى مع طموحاتك واحتياجاتك التعليمية الفريدة.",
        "route": "/courses"
    },
    {
        "question": "هل يمكنني التسجيل في أي وقت؟",
        "answer": "بالتأكيد! منصتنا متاحة للتسجيل على مدار الساعة طوال أيام الأسبوع. بمجرد إكمال التسجيل، سنبدأ فوراً في إرسال اقتراحات الدورات المناسبة لك عند توفرها.",
        "route": "/"
    },
    {
        "question": "كيف أتعرف على الدورات المدفوعة؟",
        "answer": "نحرص على الشفافية التامة فيما يخص تكاليف الدورات. سيتم إعلامك بوضوح إذا كانت الدورة مدفوعة قبل التسجيل، مع توفير كافة التفاصيل المتعلقة بالتكلفة وطرق الدفع المتاحة.",
        "route": "/apply"
    },
    {
        "question": "هل يمكنني التسجيل في الدورات من خارج لبنان؟",
        "answer": "نعم، نرحب بالطلاب من جميع أنحاء العالم للتسجيل في منصتنا. ومع ذلك، يرجى ملاحظة أن بعض الدورات قد تكون مخصصة لمواقع أو معاهد داخل لبنان. سنحرص على توضيح هذه التفاصيل لكل دورة لمساعدتك في اتخاذ القرار المناسب.",
        "route": "/"
    },
    {
        "question": "كيف يمكنني إلغاء الاشتراك في خدمة إرسال الدورات عبر واتساب؟",
        "answer": "يمكنك إلغاء اشتراكك في خدمة الإشعارات عبر واتساب في أي وقت. ما عليك سوى التواصل مع فريق الدعم الخاص بنا، وسنقوم بمعالجة طلبك فوراً. نحن نحترم رغبتك في التحكم بكيفية تلقي المعلومات منا.",
        "route": "/support"
    },
    {
        "question": "هل هناك حد لعدد الدورات التي يمكنني الالتحاق بها؟",
        "answer": "لا يوجد حد أقصى لعدد الدورات التي يمكنك الالتحاق بها. نشجعك على الاستفادة من جميع الفرص التعليمية المتاحة التي تتناسب مع أهدافك وجدولك الزمني.",
        "route": "/"
    },
    {
        "question": "هل يمكنني طلب دورة معينة غير متوفرة حالياً؟",
        "answer": "بالطبع! نرحب بطلباتك واقتراحاتك للدورات. سنبذل قصارى جهدنا لتوفير الدورة المطلوبة من خلال شبكة شركائنا المعتمدين. نحن نقدر مدخلاتك ونسعى دائماً لتلبية احتياجات طلابنا.",
        "route": "/apply"
    },
    {
        "question": "كم من الوقت يستغرق إرسال اقتراحات الدورات المناسبة بعد التسجيل؟",
        "answer": "نسعى جاهدين لتقديم اقتراحات الدورات في أسرع وقت ممكن. عادةً، ستتلقى اقتراحات مخصصة في غضون أيام قليلة بعد إكمال التسجيل. يعتمد التوقيت الدقيق على مدى تطابق الدورات المتاحة مع احتياجاتك المحددة.",
        "route": "/apply"
    }
]
export default FAQAccordion;
