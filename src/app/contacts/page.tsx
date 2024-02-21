import { smallWrapper } from "../proj_constants";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contacts Page",
  description: "Contacts Page Description",
};


export default function Contacts() {
  return (
    <>
    <section className={ `bg-white w-screen ${smallWrapper}`}>
    <div className="max-w-full md:w-[42%]">
      <h2>Contacts page</h2>
    </div>
      </section>
</>
  );
}
