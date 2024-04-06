
import { smallWrapper } from "../proj_constants";
import type { Metadata } from "next";
import Popup from "../_components/Popup";



export const metadata: Metadata = {
  title: "Convert Page",
  description: "Convert Page Description",
};

export default async function Converter() {

  return (
    <Popup>
      <div className="w-full py-20">
        <section className={`bg-white w-screen ${smallWrapper}`}>
          <div className="place-self-start w-full xl:px-16">
            <h2 className="text-[2.5rem] font-bold mb-[70px]">Converter Intercepted</h2>
          </div>
        </section>
      </div>
    </Popup>
  );
}
