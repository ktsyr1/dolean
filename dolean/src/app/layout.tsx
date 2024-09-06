import Nav from '@/components/theme/Nav';
import Footer from '@/components/theme/Footer';
import { Analytics } from "@vercel/analytics/react"
import "@/components/index.css"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='ar'>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body dir='rtl'>
                <div className="flex flex-col min-h-screen bg-white *:text-slate-900">
                    <Nav />
                    <Analytics />
                    <main className="flex-grow justify-center flex max-w-[1300px] mt-[100px] m-auto w-full">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
};


