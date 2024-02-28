import Hero from "../_components/Hero";
import { smallWrapper } from "../proj_constants";
import type { Metadata } from "next";
import ConverterForm from "../_components/ConverterForm";
import HistoryCurrencies from "../_components/HistoryCurrencies";
import getAllCurrencies from "../_api/getAllCurencies";

export const metadata: Metadata = {
  title: "Convert Page",
  description: "Convert Page Description",
};


export default async function Converter() {
  const currencyArr = await getAllCurrencies();
  

  const historyBlock = true;


  return (
    <>
      <Hero />
      <div className="bg-stoneWhite-100 w-full py-20">
        <section className={`bg-white w-screen ${smallWrapper}`}>
          <div className="place-self-start w-full xl:px-16">
            <h2 className="text-[2.5rem] font-bold mb-[70px]">Конвертер валют</h2>
          <ConverterForm />
          </div>
        </section>
      </div>
      {historyBlock && 
      <div className={`bg-white w-full py-20`}>
        <section className={`bg-stoneWhite-100 w-screen ${smallWrapper}`}>
          <div className="place-self-start w-full xl:px-16">
            <HistoryCurrencies />
          </div>
        </section>
        </div>}
    </>
  );
}
