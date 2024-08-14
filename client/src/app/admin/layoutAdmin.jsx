import { Routes, Route, Link } from 'react-router-dom';
import HomeAdmin from './homeAdmin';
import NotFound from '../NotFound';
import { useMemo, useState } from 'react';
import AdminUsers from './Users';
import AdminCourses from './courses';
import AdminDefCourses from './def-courses';
import Cookies from "js-cookie"
import axios from 'axios';
import config from '../../config';
import Auth from '../Auth';
import OneUser from './OneUser';
export default function AdminLayout() {
    let [isAuth, setIsAuth] = useState(false)

    return (
        <Layout>
            <Routes>
                <Route index element={<HomeAdmin />} />
                {/* Uncomment and add additional routes as needed */}
                <Route path="/users" element={<AdminUsers />} />
                <Route path="/user-details" element={<AdminUsers />} />
                <Route path="/users/:id" element={<OneUser />} />  
                <Route path="/courses" element={<AdminCourses />} />
                <Route path="/def-courses" element={<AdminDefCourses />} />

                <Route path="*" element={<NotFound to="/admin" />} />
            </Routes>
        </Layout>
    );
}

function Layout({ children }) {
    let [isAuth, setIsAuth] = useState(null)
    let token = Cookies.get("x-auth-token")
    useMemo(() => {
        if (token) {
            return axios.get(`${config.api}/auth`, { headers: { "x-auth-token": token } })
                .then(({ data }) => data?.isAdmin ? setIsAuth(true) : setIsAuth(false))
        } else setIsAuth(false)
    }, [])
    if (isAuth == false) return <Auth />
    else if (isAuth) return (
        <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden max-w-[800px]"  >
            {children}
        </div>
    )
    else return <>loding</>

}

export const Header = ({ to = "/admin", title }) => {
    return (
        <div className="flex items-center bg-white p-4 pb-2  ">
            <Link to={to} className="text-[#111518] flex items-center rotate-180" aria-label="Back">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                </svg>
            </Link>
            <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 pr-12">{title}</h2>
        </div>
    );
};