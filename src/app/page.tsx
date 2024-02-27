import Image from "next/image";
import CTA, { ECtaColor, ECtaType } from "./_components/CTA";
import Link from "next/link";
import Hero from "./_components/Hero";
import contentImage from '/public/images/content-img.jpg';
import { smallWrapper } from "./proj_constants";

export default function Home() {
  return (
    <>
      <Hero />
      <section className={`bg-white w-screen ${smallWrapper}`}>
        <div className="max-w-full md:w-[42%]">
          <h2 className="text-[2.5rem] font-bold">Конвертер валют</h2>
          <h3 className="text-xl pb-7 text-stoneWhite-500">Переважна діяльність банківської групи за останні чотири звітні квартали 
          становить 50 і більше відсотків.</h3>
          <Link href={"/converter"}>
            <CTA ctaColor={ECtaColor.primary} ctaType={ECtaType.link}>Конвертувати валюту</CTA>
          </Link>
        </div>
        <div className="w-full md:w-[436px]">
          <Image src={contentImage} alt="Content image" sizes="100vw" className="rounded w-full" />
        </div>
      </section>
    </>
  );
}
