import Nav from '@/components/theme/Nav';
import Footer from '@/components/theme/Footer';
import { Analytics } from "@vercel/analytics/react"
import "@/components/index.css"

import type { Metadata } from 'next'
import Landing from './loading';

export const metadata: Metadata = {
    title: 'دلني  ',
    description: 'حقق أهدافك التعليمية مع الدورات المصممة لك',
    applicationName: 'دلني',
    manifest: '/manifest.json',
    // themeColor: 'white',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.ico',
            sizes: 'any',
            type: 'image/x-icon',
        },
    ],
    openGraph: {
        title: 'دلني ',
        description: 'حقق أهدافك التعليمية مع الدورات المصممة لك',
        type: 'website',
        siteName: 'دلني',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='ar'>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body dir='rtl'>
                <div className="flex flex-col min-h-screen bg-white *:text-slate-900">
                    <Landing />

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


