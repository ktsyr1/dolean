import { useState } from "react";
import Login from "../components/forms-client/login";
import Signup from "../components/forms-client/signup";
import Portfolio from "../components/cv";
import AddDefCourse from "../components/forms-client/defcourse";
import Join from "../components/forms-client/join";
import ResetPassword from "../components/forms-client/repassword";
import EditProfile from "../components/forms-client/editprofile";
import PasswordReset from "../components/forms-client/newpassword";

const Admin = () => {
    let [select, SetSelect] = useState("login")
    if (select == "login") return <Login />
    else if (select == "signup") return <Signup />
    else return <Login />
};

export default Admin;
