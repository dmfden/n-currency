import LogoTitle from "../LogoTitle";
import { navLinks } from "@/constants";
import mapLinks from "./mapLinks";
import Image from 'next/image';
import phoneIcon from '/public/images/icon-tel2.svg';
import phoneIcon2 from '/public/images/icon-tel1.svg';
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

function Footer() {
    return (
        <footer className="min-h-56 bg-stoneWhite-100 flex justify-center w-screen py-[60px]">
            <div className="w-full xl:w-[1178px] px-4 xl:px-0 grid md:grid-cols-5 md:gap-0 xl:gap-16 justify-between">
                <article>
                    <LogoTitle />
                    <p className="w-auto xl:w-48 text-xs text-stoneWhite-500 pt-5">
                        04128, м.Київ, вул. Хрещатик, 19 Ліцензія НБУ №156 Ⓒ ПАТ ЧіпЧендж, 2019-2023
                    </p>
                </article>
                <article>
                    <ul className="text-stoneWhite-500">
                        {mapLinks(navLinks)}
                    </ul>
                </article>
                <article>
                    <div className="flex items-center">
                        <Image src={phoneIcon} alt="" sizes="100vw" className="mr-4" role="presentation" width={12} />
                        <span>3773</span>
                    </div>
                    <p className="text-xs text-stoneWhite-500 ml-[26px]">Цілодобова підтримка</p>
                </article>
                <article>
                    <div className="flex items-center">
                        <Image src={phoneIcon2} alt="" sizes="100vw" className="mr-4" role="presentation" width={16} />
                        <span>8 800 111 22 33</span>
                    </div>
                    <p className="text-xs text-stoneWhite-500 ml-[26px] w-[150px]">Безкожтовно для дзвінків в межах України</p>
                </article>
                <article>
                    <div className="flex gap-2 justify-end">
                        <Link href="https://www.facebook.com/" target="_blank">
                            <FaFacebookF width={16} role="presentation"/>
                        </Link>
                        <Link href="https://www.instagram.com/" target="_blank">
                            <AiFillInstagram width={16} role="presentation"/>
                        </Link>
                        <Link href="https://twitter.com/" target="_blank">
                            <FaTwitter width={16} role="presentation"/>
                        </Link>
                        <Link href="https://www.youtube.com/" target="_blank">
                            <FaYoutube width={16} role="presentation"/>
                        </Link>
                    </div>
                </article>
            </div>

        </footer>
    );
}

export default Footer;