// import Portfolio from "../components/cv";
import CourseForm from "../components/forms-client/defcourse";
// import Join from "../components/forms-client/join";
// import Login from "../components/forms-client/login";
// import Signup from "../components/forms-client/signup";
// import ResetPassword from "../components/forms-client/repassword";
// import EditProfile from "../components/forms-client/editprofile";
// import Login from "../components/forms-client/login";
// import Join from "../components/forms-client/join";
import PasswordReset from "../components/forms-client/newpassword";


const Home = () => {
  return (
    <div className="w-full" >
      <h1 className="text-2xl">Home Page</h1>
      {/* <Login /> */}
      {/* <Join /> */}
      {/* <Portfolio /> */}
      {/* <CourseForm /> */}
      <PasswordReset />
      {/* <Signup /> */}
    </div>
  );
};

export default Home