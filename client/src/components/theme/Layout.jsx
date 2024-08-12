import Nav from './Nav';
import Footer from './Footer';
import { Analytics } from "@vercel/analytics/react"
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white *:text-slate-900">
            <Nav />
            <Analytics />
            <main className="flex-grow justify-center flex max-w-[1300px] mt-[100px] m-auto w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
