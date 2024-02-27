'use client'
import Link from "next/link";
import Image from "next/image";
import icon from '/public/images/icon3.svg';


function PersonalAccount (){
    return(
    <Link href={'#'} title="PersonalAccount" className="hidden md:flex max-w-max">
        <Image src={icon} alt="" loading={'eager'} className="mr-2" role="presentation" sizes="100vw"
    style={{ width: '16px', height: 'auto' }}/>
        <p>Особистий кабінет</p>
    </Link>
    );
}

export default PersonalAccount;