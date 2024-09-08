"use client"
import { useRef, useState, Suspense } from 'react';
import Link from 'next/link';
import Cookies from "js-cookie"
const Nav = () => {

    let menu = useRef<any>(null)
    let close = () => menu.current.classList.toggle("hidden")
    let islogin: any = Cookies.get("authorization")
    let isAdmin = Cookies.get("isAdmin")
    let [toAdmin, setToAdmin] = useState<any>(() => {
        if (islogin?.length > 10) return isAdmin ? "/admin" : "/profile"
        else return "/auth?route=login"
    })

    return (
        <nav className="bg-white ddark:bg-gray-800 antialiased fixed w-full z-50">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
                <div className="flex items-center justify-between">

                    <button type="button" className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md ddark:hover:bg-gray-700 p-2 text-gray-900 ddark:text-white" onClick={close}>
                        <span className="sr-only">Open Menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                    </button>

                    <div className="flex items-center space-x-8">
                        <Link href={"/"} className="shrink-0 px-8 flex flex-row">
                            <svg width="52" height="31" viewBox="0 0 52 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.895 15.4281H47.019C47.5564 15.4281 47.9637 15.2374 48.241 14.8561C48.4664 14.5094 48.579 14.1887 48.579 13.8941C48.579 13.8074 48.5617 13.6947 48.527 13.5561L46.447 5.99008L49.463 5.13208L51.569 12.7501C51.6557 13.1834 51.699 13.5647 51.699 13.8941C51.699 15.0034 51.361 15.9741 50.685 16.8061C50.2344 17.3607 49.6884 17.7941 49.047 18.1061C48.4057 18.4181 47.7297 18.5741 47.019 18.5741H39.895V15.4281Z" fill="#121417" />
                                <path d="M31.1373 18.574C30.7039 18.574 30.3313 18.4267 30.0193 18.132C29.7073 17.82 29.5513 17.4474 29.5513 17.014C29.5513 16.5634 29.7073 16.1907 30.0193 15.896C30.3139 15.584 30.6866 15.428 31.1373 15.428H32.4893C32.8013 15.428 33.0613 15.324 33.2693 15.116C33.4946 14.8907 33.6073 14.622 33.6073 14.31V0.426025H36.7533V14.31C36.7533 15.0727 36.5626 15.7834 36.1813 16.442C35.7999 17.1007 35.2799 17.6207 34.6213 18.002C33.9799 18.3834 33.2779 18.574 32.5153 18.574H31.1373Z" fill="#121417" />
                                <path d="M26.7455 2.09009C27.2482 2.09009 27.6815 2.27209 28.0455 2.63609C28.4095 2.98275 28.5915 3.40742 28.5915 3.91009C28.5915 4.43009 28.4095 4.87209 28.0455 5.23609C27.6815 5.58275 27.2482 5.75609 26.7455 5.75609C26.2428 5.75609 25.8095 5.58275 25.4455 5.23609C25.0815 4.87209 24.8995 4.43009 24.8995 3.91009C24.8995 3.40742 25.0815 2.98275 25.4455 2.63609C25.8095 2.27209 26.2428 2.09009 26.7455 2.09009ZM31.2435 15.4281C31.6768 15.4281 32.0408 15.5841 32.3355 15.8961C32.6475 16.1908 32.8035 16.5548 32.8035 16.9881C32.8035 17.4214 32.6475 17.7941 32.3355 18.1061C32.0235 18.4181 31.6508 18.5741 31.2175 18.5741H30.2555C29.6142 18.5741 28.9988 18.4528 28.4095 18.2101C27.8375 17.9501 27.3348 17.6034 26.9015 17.1701C26.4855 17.6034 26.0002 17.9501 25.4455 18.2101C24.8908 18.4528 24.3102 18.5741 23.7035 18.5741H22.4555C21.9702 18.5741 21.5715 18.4268 21.2595 18.1321C20.9475 17.8374 20.7915 17.4648 20.7915 17.0141C20.7915 16.5634 20.9475 16.1908 21.2595 15.8961C21.5715 15.5841 21.9702 15.4281 22.4555 15.4281H23.3395C23.8422 15.4281 24.2668 15.2548 24.6135 14.9081C24.9602 14.5441 25.1335 14.1194 25.1335 13.6341V8.53809H28.2795V13.6601C28.3488 14.1628 28.5742 14.5874 28.9555 14.9341C29.3368 15.2634 29.7702 15.4281 30.2555 15.4281H31.2435Z" fill="#121417" />
                                <path d="M6.45391 3.91016C6.95658 3.91016 7.38991 4.09216 7.75391 4.45616C8.11791 4.80282 8.29991 5.22749 8.29991 5.73016C8.29991 6.25016 8.11791 6.69216 7.75391 7.05616C7.38991 7.40282 6.95658 7.57616 6.45391 7.57616C5.95124 7.57616 5.51791 7.40282 5.15391 7.05616C4.78991 6.69216 4.60791 6.25016 4.60791 5.73016C4.60791 5.22749 4.78991 4.80282 5.15391 4.45616C5.51791 4.09216 5.95124 3.91016 6.45391 3.91016Z" fill="#0D7DF2" />
                                <path d="M22.4323 15.4279C22.883 15.4279 23.2643 15.5752 23.5763 15.8699C23.8883 16.1646 24.0443 16.5286 24.0443 16.9619C24.0443 17.3952 23.8883 17.7766 23.5763 18.1059C23.2643 18.4179 22.883 18.5739 22.4323 18.5739C21.8776 18.5739 21.2276 18.5046 20.4823 18.3659C20.7596 18.7472 20.8983 19.1979 20.8983 19.7179C20.8983 20.6539 20.6643 21.5119 20.1963 22.2919C19.7283 23.0892 19.0956 23.7132 18.2983 24.1639C17.5183 24.6319 16.669 24.8659 15.7503 24.8659H7.82029C6.53762 24.8659 5.35029 24.5452 4.25829 23.9039C3.16629 23.2626 2.29962 22.3959 1.65829 21.3039C1.01696 20.2119 0.696289 19.0159 0.696289 17.7159V12.9839H3.84229V17.7159C3.84229 18.4439 4.01562 19.1112 4.36229 19.7179C4.72629 20.3419 5.21162 20.8272 5.81829 21.1739C6.42496 21.5379 7.09229 21.7199 7.82029 21.7199H15.7503C16.2876 21.7199 16.7556 21.5206 17.1543 21.1219C17.553 20.7232 17.7523 20.2552 17.7523 19.7179C17.7523 19.2326 17.605 18.7992 17.3103 18.4179C17.033 18.0192 16.6603 17.7506 16.1923 17.6119L12.0843 15.9479L13.4623 13.0619L15.7503 14.0499C16.3223 14.2926 16.6603 14.4312 16.7643 14.4659C18.567 15.1072 20.4563 15.4279 22.4323 15.4279ZM9.06829 26.5299C9.57096 26.5299 10.0043 26.7032 10.3683 27.0499C10.7323 27.4139 10.9143 27.8472 10.9143 28.3499C10.9143 28.8526 10.7323 29.2859 10.3683 29.6499C10.0043 30.0139 9.57096 30.1959 9.06829 30.1959C8.56562 30.1959 8.13229 30.0139 7.76829 29.6499C7.40429 29.2859 7.22229 28.8526 7.22229 28.3499C7.22229 27.8472 7.40429 27.4139 7.76829 27.0499C8.13229 26.7032 8.56562 26.5299 9.06829 26.5299ZM13.9043 26.5299C14.407 26.5299 14.8403 26.7032 15.2043 27.0499C15.5683 27.4139 15.7503 27.8472 15.7503 28.3499C15.7503 28.8526 15.5683 29.2859 15.2043 29.6499C14.8403 30.0139 14.407 30.1959 13.9043 30.1959C13.4016 30.1959 12.9683 30.0139 12.6043 29.6499C12.2403 29.2859 12.0583 28.8526 12.0583 28.3499C12.0583 27.8472 12.2403 27.4139 12.6043 27.0499C12.9683 26.7032 13.4016 26.5299 13.9043 26.5299Z" fill="#121417" />
                                <path d="M50 29.074H50.5V28.574V21.074H51.5V30.074H21.5V29.074H50Z" stroke="#121417" />
                                <path d="M2.00001 9.57397V5.57397C2.00001 4.49874 2.52756 3.50721 3.2304 2.80437C3.41463 2.62014 3.6187 2.44795 3.8389 2.29416C3.67272 2.39472 3.50883 2.50486 3.35002 2.62397C2.4355 3.30987 2.00002 4.0506 2.00001 4.57397L2.00001 9.57397ZM2.00001 9.57397L2.00001 4.57399L2.00001 9.57397Z" stroke="#121417" strokeWidth="2" />
                            </svg>

                            {/* <h1 className="text-red text-3xl font-bold bg-white text-slate-500 ">بيتا</h1> */}

                        </Link>
                        <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                            <MenuList />
                        </ul>
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <CastamLink href="/apply" classnames="mx-4 " text="اخبرنا عنك" />
                        <Suspense>

                            <Link href={toAdmin} className="mx-6 " >
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={40}>
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <circle cx="12" cy="6" r="4" stroke="#1C274C" strokeWidth="1.5"></circle>
                                        <path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path>
                                    </g></svg>
                            </Link>
                        </Suspense>
                    </div>
                </div>
                <div id="menu-app" className="bg-gray-50 fixed w-[300px] ddark:bg-gray-700 ddark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden lg:hidden px-4 mt-4" ref={menu} onClick={close}  >
                    <ul className="text-gray-900 text-sm font-medium ddark:text-white space-y-3 *:py-2">
                        <MenuList />
                    </ul>
                    <CastamLink href="/apply" classnames="my-4 w-full " text="اخبرنا عنك" />
                </div>
            </div>
        </nav>
    );
};

let CastamLink = (props: any) => (
    <Link className={`inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ddark:focus:ring-primary-900 ${props.styles}`} {...props}> {props.text} </Link>
)
export function ItemMenu({ data, className }: any) {
    return (
        <li>
            <Link href={data.href} className={`hover:text-primary-700 font-medium ddark:hover:text-primary-500 ${className}`}>
                {data.text}
            </Link>
        </li>
    )
}
export function MenuList() {
    return (
        <>
            {MenuData.map((link: any, index: any) => <ItemMenu key={index} data={link} />)}
        </>
    )
}
export const MenuData: any = [
    { href: "/", text: "الرئيسية" },
    { href: "/courses", text: "الدورات" },
    // { href: "/#price", text: "التسعيرة" },
];
export default Nav;