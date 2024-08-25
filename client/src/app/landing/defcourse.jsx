import AddDefCourse from "../../components/forms-client/defcourse";


export default function AddDefCourses() {
    return (
        <div className="AddDefCourses  flex-col justify-center my-6 p-4 w-full h-auto">
            <div className="h-14 items-start justify-end pb-3 pl-4 pt-5  text-right text-neutral-900 text-xl font-bold leading-7">
                شارك الفرص التعليمية من حولك
            </div>
            <div className="AddDefCourses flex flex-wrap md:flex-row justify-center my-6 p-4 w-full h-auto ">
                <AddDefCourse />
                <div className="flex flex-col items-center justify-center mx-auto">
                    <div className="w-96 h-24 text-right text-neutral-900 text-3xl font-bold leading-9">ساعدنا في بناء مجتمع تعليمـي محلـي قــوي</div>
                    <div className="w-96 h-20 justify-center items-start gap-2.5 flex">
                        <div className="w-96 h-16 text-right text-neutral-900 text-sm font-medium leading-snug">هل اكتشفت دورة رائعة في منطقتك؟ شاركها مع مجتمعنا! كل دورة تضيفها تساعد متعلماً آخر في العثور على فرصته المثالية.</div>
                    </div>
                    <div className="w-36 h-6 px-12" />
                    <div className="h-72 px-10 justify-center items-center flex *:w-96 ">
                        <img src="/images/Cartoon2.svg" alt="add coures" />

                    </div>
                </div>
            </div>
        </div>
    )
}
