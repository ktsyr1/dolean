import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Nav />
            <main className="flex-grow justify-center flex m-4">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
