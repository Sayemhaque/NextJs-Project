"use client"
import Link from 'next/link';
import React from 'react';
import { usePathname } from "next/navigation"

const Sidebar = () => {
    const pathName = usePathname()
    const routes = [
        { id: 1, title: "Home", to: "/" },
        { id: 2, title: "Services", to: "/services" },
        { id: 3, title: "About", to: "/about" },
        { id: 4, title: "Contact", to: "/contact" }
    ]
    return (
        <div className='p-4 space-y-12 text-white'>
            {/* Logo */}
            <h1 className='text-3xl font-sans italic'>
                Pixamentory
            </h1>
            {/* Links */}
            <ul className='space-y-8 pt-24'>
                {routes.map(({ title, to, id }) =>
                    <li key={id} className={`${pathName === to ? "transition duration-500 ease-in-out bg-white text-zinc-950 px-2 py-1 rounded-md" : ""} font-bold font-serif`}>
                        <Link href={to}>
                            {title}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;