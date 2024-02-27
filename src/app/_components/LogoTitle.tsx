import Link from "next/link";
import { workSans } from "../fonts";
import Image from "next/image";
import logo from '/public/images/logo.svg';

const wrapperClasses = `flex text-xl font-bold max-w-max ${workSans.className}`;

function LogoTitle (){
    return (
        <Link href={'/'} title="Home" className={wrapperClasses}>
            <Image src={logo} alt="The Cat" loading={'eager'} className="mr-2" sizes="100vw"
    style={{ width: '31px', height: 'auto' }}/>
            <p>Чіп Чендж</p>
        </Link>
    );
}

export default LogoTitle;