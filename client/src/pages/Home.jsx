
import Signup from "../components/forms-client/signup";
import ResetPassword from "../components/forms-client/repassword";
import EditProfile from "../components/forms-client/editprofile";


const Home = () => {
  return (
    <div className="w-full" >
      <h1 className="text-2xl">Home Page</h1>
      {/* <Login /> */}
      {/* <Join /> */}
      {/* <Portfolio /> */}
      {/* <Signup /> */}
      {/* <ResetPassword/> */}
      <EditProfile/>
    </div>
  );
};

export default Home