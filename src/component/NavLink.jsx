"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = () => {

    const p = usePathname()

    return (
        <ul className="flex items-center gap-4">
            <li><Link href="/" className={p==='/'? "btn btn-accent btn-outline" : "btn"}>Home</Link></li>
            <li><Link href="/about" className={p==='/about'? "btn btn-accent btn-outline" : "btn"}>About</Link></li>
            <li><Link href="/cart" className={p==='/cart'? "btn btn-accent btn-outline" : "btn"}>Cart</Link></li>
            <li><Link href="/product" className={p==='/product'? "btn btn-accent btn-outline" : "btn"}>Product</Link></li>
        </ul>
    );
};

export default NavLink;