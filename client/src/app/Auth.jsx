import { useLocation } from "react-router-dom";
import Login from "../components/forms-client/login";
import Signup from "../components/forms-client/signup";
import ResetPassword from "../components/forms-client/repassword";
import NewPassword from "../components/forms-client/newpassword";

const Auth = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const route = query.get("route") || "login"
    return (
        <section className="   w-full">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        {route === "login" && <Login />}
                        {route === "signup" && <Signup />}
                        {route === "resetpassword" && <ResetPassword />}
                        {route === "newPassword" && <NewPassword />}
                        {!["login", "signup", "resetpassword", "newPassword"].includes(route) && <Login />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Auth;

