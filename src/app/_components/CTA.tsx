import { ReactNode} from "react";

export enum ECtaColor {
    "primary",
    "secondary"
}

export enum ECtaType {
  "link" = "link",
  "button" = "button",
}
interface IButtonProps {
  children: ReactNode,
  ctaColor: ECtaColor,
  ctaType: ECtaType,
  ctaHandler?: (event:any)=>void,
}


function CTA(props: IButtonProps) {
  
  const buttonPrimaryClasses = 'bg-blueGeneral-100 text-stoneWhite-100';
  const buttonSecondaryClasses = " bg-stoneWhite-100 text-stoneWhite-500 hover:sepia hover:contrast-200";
  const buttonClasses = props.ctaColor === ECtaColor.primary ? buttonPrimaryClasses : buttonSecondaryClasses;
  const CtaTag = props.ctaType === ECtaType.button ? 'button' : 'div';

  return (
  <CtaTag onClick={props.ctaHandler} className={`max-w-max px-6 py-4 rounded-md text-lg filter hover:hue-rotate-60 font-medium duration-700 hover:-translate-x-2 ${buttonClasses}`}>
    {props.children}
  </CtaTag>
  );
}

export default CTA;