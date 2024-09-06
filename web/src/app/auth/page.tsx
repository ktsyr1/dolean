import Login from "./login";
import Signup from "./signup";
import ResetPassword from "./repassword";
import NewPassword from "./newpassword";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface AuthProps {
    searchParams?: {
        route?: string;
    };
}

const Auth: React.FC<AuthProps> = ({ searchParams }) => {
    // Extract the route value or default to 'login'
    const route = searchParams?.route || 'login';

    const cookieStore = cookies()
    const token = cookieStore.get('authorization')

    // if (token) redirect("/admin")
    // else
    return (
        <section className="w-full">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow ddark:border md:mt-0 sm:max-w-md xl:p-0 ddark:bg-gray-800 ddark:border-gray-700">
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
}

export default Auth;
