import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="p-4 bg-white text-sky-500 flex flex-row justify-between w-full items-center">
            <div className="flex items-center bg-white p-4 pb-2 justify-between w-full">
                <svg width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2.5625H29" stroke="#121417" strokeWidth="3.75" strokeLinecap="round" />
                    <path d="M10.4375 11H29" stroke="#121417" strokeWidth="3.75" strokeLinecap="round" />
                    <path d="M20.5625 19.4375H29" stroke="#121417" strokeWidth="3.75" strokeLinecap="round" />
                </svg>

                <Link to={"/"} className=" ">
                    <h1 className="text-red text-3xl font-bold bg-white text-slate-900 ">dolearn</h1>
                </Link>  
                <div className="flex w-12 items-center justify-end">
                    <button
                        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-[#111418] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
                        <div className="text-[#111418]" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                                viewBox="0 0 256 256">
                                <path
                                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z">
                                </path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div> 
        </nav>
    );
};

export default Nav;
