import Hero from "../_components/Hero";
import { smallWrapper } from "../proj_constants";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Convert Page",
  description: "Convert Page Description",
};


export default function Converter() {
  return (
    <>
    <Hero />
      <section className={ `bg-white w-screen ${smallWrapper}`}>
        <div className="max-w-full md:w-[42%]">
          <h2>Converter page</h2>
        </div>
      </section>
    </>
  );
}
