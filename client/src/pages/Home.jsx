import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Coureslist from "../components/coureslist";
import FormTest from "../components/forms-client/test";

const Home = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center p-4 *:bg-slate-300 *:p-4" >
            <Hero />
            <Coureslist />
            {/* <FormTest /> */}
            <Btn to="/add-course" text="اضافة كورس" />
        </div>
    );
};
let Btn = ({ to, text }) => <><Link to={to} className="bg-slate-700 p-4 m-4 rounded-lg text-white text-center max-w-[400px] w-full" >{text}</Link></>


export default Home