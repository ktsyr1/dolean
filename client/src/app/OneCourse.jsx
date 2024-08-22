import axios from 'axios';
import { useEffect, useState } from 'react';
import config, { headers } from '../config';
import { useParams } from 'react-router-dom';
import MarkdownIt from 'markdown-it';  // استيراد مكتبة Markdown-it
import Spinner from '../components/Element/Spinner';


export default function OneCourse() {
    const [data, setData] = useState(null);
    const { id } = useParams();
    const md = new MarkdownIt();  // إنشاء كائن Markdown-it
    useEffect(() => {
        // افترض أنك تستدعي API للحصول على بيانات المستخدم
        axios.get(`${config.api}/student/courses/${id}`, headers)
            .then(({ data }) => setData(data))
            .catch(error => console.error('Error fetching course data:', error));
    }, [id]);

    if (!data) return <Spinner />
    let { title, context, links, keys, location, age, nationality, price, image } = data;
    let priceText = price > 0 ? `${price} ل.ل` : price == 0 ? "مجاناً" : "غير معروف"
    // تحويل Markdown إلى HTML باستخدام markdown-it
    return (
        <div className="bg-white pt-0 mt-0 rounded-lg md:p-6 m-4 w-full flex flex-col md:w-[70%]">
            <div className="bg-white rounded-lg md:px-6 md:mx-4 w-full flex flex-col lg:flex-row  justify-start">
                {image.length > 1
                    ? <img className=" m-auto w-auto rounded-lg md:max-h-[300px] md:w-fit md:my-4" src={image} alt={title} />
                    : <div className='min-h-[220px] min-w-[300px] bg-gray-200 rounded-md flex justify-center items-center text-gray-500'>لا يوجد صورة</div>}
                <div className="flex flex-col m-4">
                    <h2 className="text-2xl font-bold mb-4 lg:max-w-[350px] flex justify-center items-center text-gray-500 ">{title}</h2>
                    <div className="  *:my-4">
                        <Row Icon={Icons.price} data={priceText} />
                        <Row Icon={Icons.location} data={location} />
                        {age?.start && <Row Icon={Icons.age} data={`${age?.start} - ${age?.end} سنة`} />}
                        <Row Icon={Icons.nationality} data={nationality} />
                    </div>
                </div>
            </div>
            <div className="text-gray-700 flex flex-col md:mx-8 my-4">
                {context.split("\\n").filter(a => a != "")?.map((key, index) => <div key={index} dangerouslySetInnerHTML={{ __html: md.render(key) }} />)}
            </div>
            <div className="flex flex-col text-start *:p-2  md:mx-8 my-2">
                <b>الروابط</b>
                {links?.map((link, index) => (
                    <a key={index} href={link} className=" text-primary-500 px-4 " target="_blank" rel="noopener noreferrer">
                        {link}
                    </a>
                ))}
            </div>
            <hr />
        </div >
    );
}
function Row({ Icon, data, className }) {
    return (
        <div className={`flex flex-row  ${className}`}>
            <Icon />
            <b className='mx-4'> {data}</b>

        </div>)
}
let Icons = {
    price: () => (
        <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill="#000000" width={30}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <style type="text/css">
                    {`
                            .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                            .st1{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:3;}
                            .st2{fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
                            .st3{fill:none;}
                        `}
                </style>
                <polyline className="st0" points="22,22 22,29 16,26 10,29 10,22 "></polyline>
                <path className="st0" d="M18.3,3h-4.6c-2.1,0-4.1,1.1-5.2,3l-2.3,4c-1.1,1.9-1.1,4.1,0,6l2.3,4c1.1,1.9,3.1,3,5.2,3h4.6 c2.1,0,4.1-1.1,5.2-3l2.3-4c1.1-1.9,1.1-4.1,0-6l-2.3-4C22.4,4.1,20.5,3,18.3,3z"></path>
                <line className="st0" x1="16" y1="9" x2="16" y2="10"></line>
                <line className="st0" x1="16" y1="16" x2="16" y2="17"></line>
                <path className="st0" d="M17,10h-1.5c-0.8,0-1.5,0.7-1.5,1.5v0c0,0.8,0.7,1.5,1.5,1.5h1c0.8,0,1.5,0.7,1.5,1.5v0c0,0.8-0.7,1.5-1.5,1.5 H15"></path>
                <rect x="-144" y="-360" className="st3" width="536" height="680"></rect>
            </g>
        </svg>
    ),
    location: () => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={30}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M12.5 7.04148C12.3374 7.0142 12.1704 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10C15 9.82964 14.9858 9.6626 14.9585 9.5"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M5 15.2161C4.35254 13.5622 4 11.8013 4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C9.26474 21.0797 8.13831 20.1439 7.19438 19"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                ></path>
            </g>
        </svg>
    ),
    age: () => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={30}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"
                    fill="#0F0F0F"
                ></path>
                <path
                    d="M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4669 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.4981 23.193 10.9549 22.9502C8.41167 22.7075 6.03227 21.5871 4.22504 19.7814C2.41781 17.9757 1.29547 15.5972 1.05063 13.0542C0.805798 10.5112 1.45375 7.96227 2.88327 5.84491C4.31278 3.72755 6.43473 2.17379 8.88489 1.4503C11.0142 0.821568 13.276 0.853957 15.3745 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9185 2.88626 11.1353 2.8783 9.45321 3.37498C7.45005 3.96647 5.71523 5.23677 4.54651 6.96784C3.3778 8.69891 2.84806 10.7828 3.04823 12.8619C3.24839 14.9409 4.16598 16.8855 5.6435 18.3618C7.12102 19.8381 9.06632 20.754 11.1455 20.9525C13.2248 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"
                    fill="#0F0F0F"
                ></path>
                <path
                    d="M7.71056 9.14472L7.29443 9.35279C6.69972 9.65014 6 9.21769 6 8.55279C6 8.214 6.19141 7.9043 6.49443 7.75279L7.78886 7.10557C7.92771 7.03615 8.08082 7 8.23607 7H9C9.55229 7 10 7.44772 10 8V16C10 16.5523 9.55229 17 9 17C8.44772 17 8 16.5523 8 16V9.32361C8 9.17493 7.84354 9.07823 7.71056 9.14472Z"
                    fill="#0F0F0F"
                ></path>
                <path
                    d="M14.5 9H15.2597C15.6686 9 16 9.33145 16 9.74031C16 9.90842 15.9428 10.0715 15.8378 10.2028L12.2191 14.7261C12.0773 14.9034 12 15.1237 12 15.3508V16C12 16.5523 12.4477 17 13 17H17C17.5523 17 18 16.5523 18 16C18 15.4477 17.5523 15 17 15H14.9089C14.7425 15 14.6489 14.8086 14.7511 14.6772L17.5787 11.0417C17.8518 10.6906 18 10.2585 18 9.81378V9C18 7.89543 17.1046 7 16 7H14C12.8954 7 12 7.89543 12 9C12 9.55228 12.4477 10 13 10H13.5C13.7761 10 14 9.77614 14 9.5C14 9.22386 14.2239 9 14.5 9Z"
                    fill="#0F0F0F"
                ></path>
            </g>
        </svg>
    ),
    nationality: () => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={30}
        >
            <path
                d="M5 22V14M5 14L7.47067 13.5059C9.1212 13.1758 10.8321 13.3328 12.3949 13.958C14.0885 14.6354 15.9524 14.7619 17.722 14.3195L17.9364 14.2659C18.5615 14.1096 19 13.548 19 12.9037V5.53669C19 4.75613 18.2665 4.18339 17.5092 4.3727C15.878 4.78051 14.1597 4.66389 12.5986 4.03943L12.3949 3.95797C10.8321 3.33284 9.1212 3.17576 7.47067 3.50587L5 4M5 14V11M5 4V2M5 4V7"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    )
}