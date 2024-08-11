import { useState } from "react";
import Login from "../components/forms-client/login";
import Signup from "../components/forms-client/signup";

const Admin = () => {
    let [select, SetSelect] = useState("login")
    if (select == "login") return <Login />
    else if (select == "signup") return <Signup />
    else return <Login />
};

export default Admin;
