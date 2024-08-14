import { useState } from "react";
import Login from "../../components/forms-client/login";
import Signup from "../../components/forms-client/signup";

const Admin = () => {
    return (
        <div>
            <p> لوحة التحكم </p>
            {/* اصتيراد صفحات لوحة التحكم هنا */}
        </div>
    )
};

export default Admin;



// const Admin = () => {
//     let [select, SetSelect] = useState("login")
//     if (select == "login") return <Login />
//     else if (select == "signup") return <Signup />
//     else return <Login />
// };