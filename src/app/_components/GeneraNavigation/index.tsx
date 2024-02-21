'use client'
import NavLink from "../NavLink";

export type TNavLink = {
    path: string
    name: string
}

interface IGeneralNavProps {
    navlinks: TNavLink[]
}

function GeneralNavigation ({navlinks}:IGeneralNavProps){
   return <nav className="hidden md:flex xl:gap-10 text-stoneWhite-500">
        {navlinks.map((link, index) => <NavLink href={link.path} exact className="nav-item nav-link duration-1000" key={index}>{link.name}</NavLink>)}
    </nav>;
}

export default GeneralNavigation;