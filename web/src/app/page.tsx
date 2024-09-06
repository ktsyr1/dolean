import Hero from '@/app/(landing)/Hero';
import Coureslist from '@/app/(landing)/CouresList';
import PricingSection from '@/app/(landing)/price';
import AddDefCourses from '@/app/(landing)/DefCourse';
import FAQAccordion from '@/components/theme/FAQ';

const Home = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center ">
            <Hero />
            <Coureslist />
            <AddDefCourses />
            <PricingSection />
            <FAQAccordion />
        </div>
    );
};

export default Home;