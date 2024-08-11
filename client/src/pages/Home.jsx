import { Link } from "react-router-dom";
import Hero from "../components/landing/Hero";
import Coureslist from "../components/landing/coureslist";

const Home = () => {
    let a1 = () => {
        return { a: 1212 }
    }
    let a2 = () => ({ a: 1212 })
    console.log(a2());
    return (
        <div className="w-full flex flex-col justify-center items-center p-4  " >
            <Hero />
            {/* <Coureslist /> */}
            <Btn to="/add-course" text="اضافة كورس" />
        </div>
    );
};
let Btn = ({ to, text }) => <><Link to={to} className="bg-slate-700 p-4 m-4 rounded-lg text-white text-center max-w-[400px] w-full" >{text}</Link></>


export default Home