import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Hero from '../components/landing/Hero';
import Coureslist from '../components/landing/coureslist';

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('YOUR_API_ENDPOINT_HERE');
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="w-full flex flex-col justify-center items-center p-4">
            <Hero />
            <Coureslist data={data} />
            <Btn to="/add-course" text="اضافة كورس" />
        </div>
    );
};
let Btn = ({ to, text }) => <><Link to={to} className="bg-slate-700 p-4 m-4 rounded-lg text-white text-center max-w-[400px] w-full" >{text}</Link></>


export default Home;