import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white *:text-slate-900">
            <Nav />
            <main className="flex-grow justify-center flex max-w-[1300px] m-auto w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
