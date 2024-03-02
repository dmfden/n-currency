import Hero from "../_components/Hero";
import { smallWrapper } from "../proj_constants";
import type { Metadata } from "next";
import ConverterForm from "../_components/ConverterForm";
import dynamic from 'next/dynamic';
import { getAllCurrenciesByDate } from "@/actions/currency";
const HistoryCurrencies = dynamic(() => import("../_components/HistoryCurrencies"));


export const metadata: Metadata = {
  title: "Convert Page",
  description: "Convert Page Description",
};

export default async function Converter() {

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
      <HistoryCurrencies />
    </>
  );
}
