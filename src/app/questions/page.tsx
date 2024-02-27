import { smallWrapper } from "../proj_constants";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Questions Page",
  description: "Questions Page Description",
};


export default function Questions() {
  return (
    <>
    <section className={ `bg-white w-screen ${smallWrapper}`}>
      <div className="max-w-full md:w-[42%]">
        <h2>Questions page</h2>
      </div>
    </section>
</>
  );
}
