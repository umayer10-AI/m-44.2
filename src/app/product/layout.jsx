"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const layout = ({children}) => {

    const p = usePathname()

    return (
        <div className='flex '>
            <div className='flex flex-col bg-base-100 h-screen w-50 p-3'>
                <Link href={'/product'} className={p==='/product'? "btn btn-info btn-outline":"btn"}>main</Link>
                <Link href={'/product/profile'} className={p==='/product/profile'? "btn btn-info btn-outline":"btn"}>Profile</Link>
                <Link href={'/product/dashboard'} className={p==='/product/dashboard'? "btn btn-info btn-outline":"btn"}>Dashboard</Link>
                <Link href={'/product/setting'} className={p==='/product/setting'? "btn btn-info btn-outline":"btn"}>Setting</Link>
                <Link href={'/'} className='btn btn-info'>Home</Link>

            </div>
            <div className='w-full'>
                {children}
            </div>
        </div>
    );
};

export default layout;