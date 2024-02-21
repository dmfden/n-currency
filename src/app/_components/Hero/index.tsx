import Image from "next/image";
import bgImage from '/public/images/hero-bg.jpg';
import heroImage from '/public/images/conent-img1.jpg';
import Button, { EbuttonTypes } from "../../_components/Button";
import Link from "next/link";
import { smallWrapper } from "../../proj_constants";

function Hero (){
    return (
        <section className="relative w-screen">
                <Image
      alt="Hero image"
      src={bgImage}
      placeholder="blur"
      quality={75}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
            <div className={`z-10 relative w-full ${smallWrapper}`}>
                <div className="text-stoneWhite-100 max-w-full md:max-w-max">
                    <h1 className="text-[3.375rem] font-bold">Чіп Чендж</h1>
                    <h2 className="text-xl pb-7">Обмінник валют - навчальний</h2>
                    <Link href={"/"}>
                        <Button buttonType={EbuttonTypes.secondary}>Конвертер валют</Button>
                    </Link>
                </div>
                <div className="w-full md:w-[342px]">
                    <Image src={heroImage} alt="Credit Cards" sizes="100vw" className="rounded-xl" />
                </div>
            </div>
        </section>
    );
}

export default Hero;