'use client'
import Image from "next/image";
import logoArrow from '/public/images/icon-arrows.svg';
import CTA, { ECtaColor, ECtaType } from "./CTA";
import { format } from "date-fns/format";
import { sub } from "date-fns/sub";


function ConverterForm(): JSX.Element {
    const currentDate = new Date();
    const currentDateF = format(currentDate,"yyyy-MM-dd");
    const weekAgo = sub(currentDate,{weeks: 1,});
    const weekAgoF = format(weekAgo, "yyyy-MM-dd");
    console.log(weekAgo);

    const saveButtonHandler = (event: any): void => {
        const tt = event.target as HTMLFormElement;
        //tt.preventDefault();
        console.log("!!!!!!!!!! FIRE !!!!!!!!!");
    }

    return (
        <>
            <form>
                <div className="text-stoneWhite-500 text-xl flex justify-between gap-8 flex-wrap">
                    <div className="w-full md:w-5/12">
                        <p className="text-xl pb-7">В мене є:</p>
                        <div className="flex gap-3 w-full">
                            <input type="text" className="text-center border rounded py-4 px-2 border-stoneWhite-500 w-[216px] md:w-[150px] lg:w-[220px]" placeholder="Введіть суму" />
                            <select name="currency" id="currency" className="border rounded py-4 px-2 border-stoneWhite-500 w-4/12">
                                <option value="default">UAH</option>
                                <option value="value1">Значение 1</option>
                                <option value="value2">Значение 2</option>
                                <option value="value3">Значение 3</option>
                            </select>
                        </div>

                    </div>
                    <div className="max-w-max self-end mb-4">
                        <Image src={logoArrow} alt="" loading={'eager'} sizes="100vw" role="presentation"
                            style={{ width: '32px', height: 'auto' }} />
                    </div>
                    <div className="w-full md:w-5/12">
                        <p className="text-xl pb-7">Хочу придбати:</p>
                        <div className="flex gap-3 w-full">
                            <input type="text" className="flex text-center border rounded py-4 px-2 border-stoneWhite-500 w-[216px] md:w-[150px] lg:w-[220px]" placeholder="Введіть суму" />
                            <select name="currencyChange" id="currencyChange" className="border rounded py-4 px-2 border-stoneWhite-500 w-4/12">
                                <option value="default">UAH</option>
                                <option value="value1">Значение 1</option>
                                <option value="value2">Значение 2</option>
                                <option value="value3">Значение 3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between pt-6 gap-3">
                    <input type="date" id="start" name="start" min={weekAgoF} max={currentDateF} className="border rounded py-4 px-2 border-stoneWhite-500 w-6/12 md:w-[220px]"/>
                    <div className="w-6/12 md:w-auto">
                        <CTA ctaColor={ECtaColor.primary} ctaType={ECtaType.button}>Зберегти результат</CTA>
                    </div>                  
                </div>
            </form>          
        </>
    );
}

export default ConverterForm;