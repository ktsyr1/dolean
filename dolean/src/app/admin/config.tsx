
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Headers() {

    const cookieStore = cookies()
    const token = cookieStore.get('authorization')

    if (token) {
        return axios.get(`${process.env.NEXT_PUBLIC_API}/auth`, { headers: { Authorization: `Bearer ${token.value}` } })
            .then(({ data }) => {

                if (data?.isAdmin) return ( { Authorization: `Bearer ${token.value}` } )
                else redirect('/auth?route=login')
            })
            .catch((err: any) => redirect('/auth?route=login'))

    } else redirect('/auth?route=login')
}
