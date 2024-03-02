'use client';
import { useStoreOperations } from "@/stores/operations";
import CTA, { ECtaColor, ECtaType } from "./CTA";
import iconArrowR from '/public/images/arrow-r.svg';
import Image from "next/image";
import { smallWrapper } from "../proj_constants";


function HistoryCurrencies(): JSX.Element {

    const operations = useStoreOperations(state=> state.operations);
    const resetHistoryStore = useStoreOperations(state=> state.reset);

    const showHistoryItems =  operations.length > 9 ? operations.slice(-10) : operations.slice();
    showHistoryItems.reverse();
    
    const handleClearButton = ()=> {
        resetHistoryStore();
    }

    

    if (showHistoryItems.length > 0){
      
        return (

            <div className={`bg-white w-full py-20`}>
            <section className={`bg-stoneWhite-100 w-screen ${smallWrapper}`}>
              <div className="place-self-start w-full xl:px-16">
              <div>
                <div className="grid grid-cols-2 items-center content-between mb-8">
                    <h2 className="text-3xl font-bold">Історія конвертації</h2>
                    <div className="place-self-end text-base">
                        <CTA ctaColor={ECtaColor.primary} ctaType={ECtaType.button} ctaHandler={handleClearButton}>Очистити історію</CTA>
                    </div>
                </div>
                <ul className="flex flex-wrap flex-col md:flex-row justify-between text-lg gap-y-4">
                    {showHistoryItems.length > 0 && showHistoryItems.map((el, index)=>
                    <li className="flex justify-between items-center w-full md:w-[47%] pl-5 pr-5 md:pr-6 py-2 bg-white rounded overflow-x-auto animate-fadeInDown" key={`${index}_${el.date}`}>
                        <span className="text-stoneWhite-50">{el.date}</span>
                        <span className="text-stoneWhite-500 font-semibold">{el.from.value} {el.from.currencyName}</span>
                        <div className="max-w-max">
                            <Image src={iconArrowR} alt="" loading={'eager'} sizes="100vw" role="presentation"
                                style={{ width: '18px', height: 'auto' }} />
                        </div>
                        <span className="text-stoneWhite-500 font-semibold">{el.to.value} {el.to.currencyName}</span>
                    </li>)}
    
                </ul>
            </div>
              </div>
            </section>
            </div>
        );
    }
    return <></>;

}

export default HistoryCurrencies;