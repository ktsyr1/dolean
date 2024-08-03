import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-4" >
      <h1 className="text-2xl">Home Page</h1>

      <Btn to="/auth?route=login" text="تسجيل الدخول" />
      <Btn to="/apply" text="التسجيل على دورة " />
      <Btn to="/profile" text="تعديل الملف الشخصي" />
      <Btn to="/add-course" text="اضافة كورس" />
    </div>
  );
};
let Btn = ({to, text}) => <><Link to={to} className="bg-slate-700 p-4 m-4 rounded-lg text-white text-center max-w-[400px] w-full" >{text}</Link></>


export default Home