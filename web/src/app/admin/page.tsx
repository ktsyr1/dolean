import axios from "axios";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function HomeAdmin() {
    const cookieStore = cookies();
    const token: any = cookieStore.get('authorization');

    if (!token) redirect('/auth?route=login');

    try {
        // Fetch admin data
        const { data: admin } = await axios.get(`${process.env.NEXT_PUBLIC_API}/admin`, {
            headers: { authorization: `Bearer ${token.value}` }
        });

        const data = [
            { title: "مسودة الدورات", herf: "/admin/def-courses", value: admin.defCourses },
            { title: "الدورات", herf: "/admin/courses", value: admin.courses },
            { title: "تفاصيل المستخدمين", herf: "/admin/users-details", value: admin.userDetails },
            { title: "المستخدمين", herf: "/admin/users", value: admin.users },
        ];

        return (
            <div className="flex size-full min-h-screen w-full flex-col bg-white justify-between group/design-root overflow-x-hidden max-w-[800px]">
                <div>
                    <div className="flex items-center bg-white p-4 pb-2 justify-between">
                        <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-start pl-12">لوحة التحكم</h2>
                    </div>
                    <div className="flex flex-wrap gap-4 p-4">
                        {data.map(item => (
                            <Box key={item.title} {...item} />
                        ))}
                    </div>
                    {/* {data.map(item => (
                        <Part key={item.title} title={item.title} herf={item.herf} />
                    ))} */}
                </div>
            </div>
        );
    } catch (error: any) {
        // Handle the error gracefully
        console.error('Error fetching admin data:', error.response?.data || error.message);

        // Optionally, you can redirect to an error page or display an error message
        return <div>Failed to load admin dashboard. Please try again later.</div>;
    }
}

function Box({ title, value, herf = "" }: { title: string, value: number, herf?: string }) {
    return (
        <Link href={herf} className="flex min-w-[158px] justify-between flex-1 flex-col gap-2 rounded-xl p-6 bg-[#f0f2f5] cursor-pointer">
            <p className="text-[#111518] text-base font-medium leading-normal">{title}</p>
            <p className="text-[#111518] tracking-light text-2xl font-bold leading-tight">+{value}</p>
        </Link>
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
