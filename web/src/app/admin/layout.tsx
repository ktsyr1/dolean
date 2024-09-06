
import axios from 'axios';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import Headers from './config';

export default async function Layout({ children }: any) {
    let headers: any = await Headers()
    let isAuth: any

    if (headers?.Authorization) {
        await axios.get(`${process.env.NEXT_PUBLIC_API}/auth`, { headers })
            .then(({ data }) => {
                isAuth = data?.isAdmin
            })
            .catch((err: any) => redirect('/auth?route=login'))
        if (isAuth)
            return (
                <div className=" flex min-h-screen flex-row bg-white justify-center group/design-root overflow-x-hidden w-full "  >
                    <Menu />
                    <div className='w-full max-w-[800px]'>{children} </div>
                </div>
            )
    }
}
function Menu() {

    const data = [
        { title: "مسودة الدورات", herf: "/admin/def-courses" },
        { title: "الدورات", herf: "/admin/courses" },
        { title: "تفاصيل المستخدمين", herf: "/admin/users-details" },
        { title: "المستخدمين", herf: "/admin/users" },
    ];

    return (
        <div className="lg:flex size-full hidden right-0 min-h-screen w-full flex-col bg-white justify-between group/design-root overflow-x-hidden max-w-[400px] fixed">
            <div>
                <div className="flex items-center bg-white p-4 pb-2 justify-between">
                    <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-start pl-12">لوحة التحكم</h2>
                </div>

                {data.map(item => (
                    <Part key={item.title} title={item.title} herf={item.herf} />
                ))}
            </div>
        </div>
    );
}

function Part({ title, herf }: { title: string, herf: string }) {
    return (
        <Link href={herf} className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between rounded-md hover:bg-slate-100">
            <p className="text-[#111518] text-base font-medium leading-normal flex-1 truncate">ادارة {title}</p>
            <div className="shrink-0">
                <div className="text-[#111518] flex size-7 items-center justify-center rotate-180" data-icon="CaretRight" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                    </svg>
                </div>
            </div>
        </Link>
    );
}

export const Header = ({ to = "/admin", title, add }: any) => {
    return (
        <div className="flex items-center flex-row justify-start bg-white p-4 pb-2  ">
            <Link href={to} className="text-[#111518] flex items-center rotate-180" aria-label="Back">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                </svg>
            </Link>
            <h2 className="text-[#111518] text-lg font-bold leading-tight pr-12">{title}</h2>
            {add && <Link href={add} className="text-white bg-primary-700 p-2 px-4 rounded-md flex items-center mx-4 font-bold text-3xl"  >
                +
            </Link>}
        </div>
    );
};