'use client'
import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation'


interface INavLink {
    href: string,
    exact: boolean,
    children: ReactNode,
    className?:string
}


function NavLink({ href, exact, children, className }:INavLink) {
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        className  += ' font-bold text-blueGeneral-100 border-blueGeneral-100';
    }

    return (
        <Link href={href} className={className}>
            {children}    
        </Link>
    );
}

export default NavLink;