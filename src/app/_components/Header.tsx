'use server';
import { navLinks } from "../proj_constants";
import GeneralNavigation from "./GeneraNavigation";
import LogoTitle from "./LogoTitle";
import PersonalAccount from "./PersonalAccount";


function Header() {
    return(
        <header className="min-h-[90px] bg-stoneWhite-100 flex justify-center w-screen">
            <div className="w-full xl:w-[1178px] px-4 xl:px-0 xl:place-self-center flex items-center justify-between overflow-hidden">
                <LogoTitle />
                <GeneralNavigation navlinks={navLinks} />
                <PersonalAccount/>
            </div>
        </header>
    );
}

export default Header;