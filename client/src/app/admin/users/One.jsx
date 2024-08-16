import axios from 'axios';
import React, { useEffect, useState } from 'react';
import config, { headers } from '../../../config';
import { useParams } from 'react-router-dom';

const OneUser = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // افترض أنك تستدعي API للحصول على بيانات المستخدم
        axios.get(`${config.api}/admin/users/${id}`, headers)
            .then(({ data }) => setUser(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    if (!user) return <p>Loading...</p>;

    return (
        <main className="w-full">
            <Header to="/admin/users" title={user.name} />
            <ProfileCard {...user} />
        </main>
    );
};
export default OneUser;

function ProfileCard({ name, phone, email }) {

    return (
        <div className="flex flex-wrap items-center justify-center">
            <div className="bg-white duration-200 ease-in-out m-4 rounded-lg shadow-lg w-full">
                <div className="flex justify-center px-5 py-4">
                    <svg width="97" height="96" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48.5 40C57.3366 40 64.5 32.8366 64.5 24C64.5 15.1634 57.3366 8 48.5 8C39.6634 8 32.5 15.1634 32.5 24C32.5 32.8366 39.6634 40 48.5 40Z" stroke="#1C274C" strokeWidth="3.75" />
                        <path d="M80.49 72C80.5 71.3432 80.5 70.676 80.5 70C80.5 60.0588 66.1732 52 48.5 52C30.8269 52 16.5 60.0588 16.5 70C16.5 79.9412 16.5 88 48.5 88C57.424 88 63.8592 87.3732 68.5 86.2536" stroke="#1C274C" strokeWidth="3.75" strokeLinecap="round" />
                    </svg>
                </div>

                <div className="px-14 py-4 text-gray-700 *:my-2 *:text-center">
                    <p className='w-full text-xl font-bold '> {name} </p>
                    <p> {email}</p>
                    <p className='w-full text-xl font-bold my-0'> {phone} </p>
                    <a className='m-auto text-xl font-bold p-2 w-[200px] bg-primary-500 rounded-lg text-white flex justify-center' href={`https://wa.me/${phone.replace(/\s+/g, '')}`}>مراسلة</a>
                </div>
            </div>
        </div>
    );
}
