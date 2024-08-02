import Join from "../components/forms-client/join";
import Login from "../components/forms-client/login";

const Home = () => {
  return (
    <div className="w-full" >
      <h1 className="text-2xl">Home Page</h1>
      {/* <Login /> */}
      <Join />
    </div>
  );
};

export default Home;
