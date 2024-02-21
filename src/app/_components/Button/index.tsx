import { ReactNode} from "react";



export enum EbuttonTypes {
    "primary",
    "secondary"
}

interface IButtonProps {
  children: ReactNode,
  buttonType: EbuttonTypes
}


function Button (props:IButtonProps) {
    const buttonPrimaryClasses = 'bg-blueGeneral-100 text-stoneWhite-100';
    const buttonSecondaryClasses = " bg-stoneWhite-100 text-stoneWhite-500 hover:sepia hover:contrast-200";
    const buttonClasses = props.buttonType === EbuttonTypes.primary ?  buttonPrimaryClasses : buttonSecondaryClasses;

    return <button className={`px-6 py-4 rounded-md text-lg filter hover:hue-rotate-60 font-medium duration-700 hover:-translate-x-2 ${buttonClasses}`}>{props.children}</button>
}

export default Button;