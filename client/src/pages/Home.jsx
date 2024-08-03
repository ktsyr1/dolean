import Portfolio from "../components/cv";
import Join from "../components/forms-client/join";
import Login from "../components/forms-client/login";
import Signup from "../components/forms-client/signup";

const Home = () => {
  return (
    <div className="w-full" >
      <h1 className="text-2xl">Home Page</h1>
      <Login />
      {/* <Join /> */}
      {/* <Portfolio /> */}
      {/* <Signup /> */}
    </div>
  );
};

export default Home