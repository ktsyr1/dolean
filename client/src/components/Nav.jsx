import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="p-4 bg-white text-sky-500 flex flex-row">
            <div className="w-full   mx-auto">
                <h1 className="text-red text-xl bg-white ">مشروعنا</h1>
            </div>
            <div className="w-full text-center mx-auto *:p-4">
                <Link to={"/"} className="text-red text-xl bg-white ">القسم الاول</Link>
                <Link to={"/"} className="text-red text-xl bg-white ">القسم الثاني</Link>
                {/* <Link to={"/"} className="text-red text-xl bg-white ">القسم الاول</Link> */}
                {/* <Link to={"/"} className="text-red text-xl bg-white ">القسم الاول</Link> */}
                {/* <Link to={"/"} className="text-red text-xl bg-white ">القسم الاول</Link> */}
            </div>
        </nav>
    );
};

export default Nav;
