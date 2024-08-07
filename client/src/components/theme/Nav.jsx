import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    let menu = useRef()
    return (
        <nav className="bg-white dark:bg-gray-800 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
                <div className="flex items-center justify-between">

                    <button type="button" className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white" onClick={()=> ""}>
                        <span className="sr-only">Open Menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                    </button>

                    <div className="flex items-center space-x-8">
                        <Link to={"/"} className="shrink-0 px-8">
                            <h1 className="text-red text-3xl font-bold bg-white text-slate-900 ">دلني</h1>
                        </Link>
                        <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                            {links.map((link, index) => <Item key={index} data={link} />)}
                        </ul>
                    </div>
                    <Link to="/apply" className="inline-flex mx-4 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"> اخبرنا عنك </Link>

                </div>

                <div id="menu-app" className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4" ref={menu}>
                    <ul className="text-gray-900 text-sm font-medium dark:text-white space-y-3">
                        {links.map((link, index) => <Item key={index} data={link} />)}
                    </ul>
                    <Link to="/apply" className="inline-flex mx-4 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"> اخبرنا عنك </Link>
                </div>
            </div>
        </nav>
    );
};
function Item({ data }) {
    return (
        <li>
            <Link to={data.href} className="hover:text-primary-700 font-medium dark:hover:text-primary-500">
                {data.text}
            </Link>
        </li>
    )
}

const links = [
    { href: "/#", text: "الرئيسية" },
    { href: "/courses", text: "الدورات" },
    { href: "/#about", text: "من نحن" },
];
export default Nav;
