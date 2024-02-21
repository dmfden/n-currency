
import { TNavLink } from "./_components/GeneraNavigation";

const navLinks: TNavLink[] = [
    {
        path: '/',
        name: 'Послуги'
    },
    {
        path: '/converter',
        name: 'Конвертер валют'
    },
    {
        path: '/contacts',
        name: 'Контакти'
    },
    {
        path: '/questions',
        name: 'Задати питання'
    }

];

const smallWrapper = 'min-h-[400px] xl:w-[910px] py-10 px-4 xl:px-0 m-auto flex flex-wrap md:flex-nowrap flex-row justify-between items-center gap-4';
export {navLinks, smallWrapper};