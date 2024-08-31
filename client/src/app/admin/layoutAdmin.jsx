import { Routes, Route, Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import Cookies from "js-cookie"
import axios from 'axios';
// init
import HomeAdmin from './homeAdmin';
import NotFound from '../NotFound';
import config, { headers } from '../../config';
import Auth from '../Auth';

// courses
import AdminCourses from './courses/page';
// def-courses
import AdminDefCourses from './def-courses/page';
import OneDefCourses from './def-courses/One';
// User
import AdminUsers from './users/page';
import OneUser from './users/One';
// Users Details
import AdminUsersDetails from './users-details/page';
import OneUsersDetails from './users-details/One'
import AiCourse from './ai-course/page';
import OneCourses from './courses/One';
import Spinner from '../../components/Element/Spinner';
import WaPage from './wa/page';

export default function AdminLayout() {

    return (
        <Layout>
            <Routes>
                <Route index element={<HomeAdmin />} />
                {/* Uncomment and add additional routes as needed */}
                <Route path="/wa" element={<WaPage />} />
                <Route path="/users" element={<AdminUsers />} />
                <Route path="/users/:id" element={<OneUser />} />
                <Route path="/users-details" element={<AdminUsersDetails />} />
                <Route path="/users-details/:id" element={<OneUsersDetails />} />
                <Route path="/courses" element={<AdminCourses />} />
                <Route path="/courses/:id" element={<OneCourses />} />
                <Route path="/ai-course" element={<AiCourse />} />
                <Route path="/def-courses" element={<AdminDefCourses />} />
                <Route path="/def-courses/:id" element={<OneDefCourses />} />
                <Route path="*" element={<NotFound to="/admin" />} />
            </Routes>
        </Layout>
    );
}

function Layout({ children }) {
    let [isAuth, setIsAuth] = useState(null)
    let token = Cookies.get("authorization")
    useMemo(() => {
        if (token) {

            return axios.get(`${config.api}/auth`, headers)
                .then(({ data }) => data?.isAdmin ? setIsAuth(true) : setIsAuth(false))
                .catch(err => setIsAuth(false))
        } else setIsAuth(false)
    }, [])

    if (isAuth == false) return <Auth />
    else if (isAuth) return (
        <div className="  flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden smax-w-[800px]"  >
            {children}
        </div>
    )
    else return <Spinner />

}

export const Header = ({ to = "/admin", title, add }) => {
    return (
        <div className="flex items-center flex-row justify-start bg-white p-4 pb-2  ">
            <Link to={to} className="text-[#111518] flex items-center rotate-180" aria-label="Back">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                </svg>
            </Link>
            <h2 className="text-[#111518] text-lg font-bold leading-tight pr-12">{title}</h2>
            {add && <Link to={add} className="text-white bg-primary-700 p-2 px-4 rounded-md flex items-center mx-4 font-bold text-3xl"  >
                +
            </Link>}
        </div>
    );
};