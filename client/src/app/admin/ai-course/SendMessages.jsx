import axios from "axios";
import { useEffect, useMemo } from "react";
import config, { headers } from "../../../config";

const SendMessages = ({ nextStep, prevStep }) => {
    let id = useMemo(() => localStorage.getItem("course"))

    console.log(id);
    
    useEffect(() => {
        // افترض أنك تستدعي API للحصول على بيانات المستخدم
        if (id) {

            axios.get(`${config.api}/admin/users-details/filterByCourse/${id}`, headers)
                .then(({ data }) => reset(data))
                .catch(error => console.error('Error fetching user data:', error));
        }
    }, [id]);
    return (
        <div className="w-full flex flex-col items-center max-w-md mx-auto p-4 rtl text-slate-900">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ddark:text-white text-center">
                SendMessages
            </h1>
        </div>
    );
};

export default SendMessages;