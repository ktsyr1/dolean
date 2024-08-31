import { Link } from 'react-router-dom';
import Hero from './landing/Hero';
import Coureslist from './landing/coureslist';
import PricingSection from './landing/price';
import AddDefCourses from './landing/defcourse';
import FAQAccordion from '../components/theme/FAQ';

const Home = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center ">
            <Hero />
            <Coureslist />
            <AddDefCourses />

            {/* <Btn to="/add-course" text="اضافة كورس" /> */}
            <PricingSection />
            <FAQAccordion />
        </div>
    );
};
let Btn = ({ to, text }) => <><Link to={to} className="bg-slate-700 p-4 m-4 rounded-lg text-white text-center max-w-[400px] w-full" >{text}</Link></>


export default Home;