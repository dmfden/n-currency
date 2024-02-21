import { TNavLink } from "../GeneraNavigation";
import Link from 'next/link';
import React from "react";

function mapLinks (links:TNavLink[]) {
    return links.map((link, index)=>
    <li key={index}>
        <Link href={link.path}>{link.name}</Link>
    </li>
    );
}

export default mapLinks;