import CTA, { ECtaColor, ECtaType } from "./CTA";
import iconArrowR from '/public/images/arrow-r.svg';
import Image from "next/image";

const testObj = {
    date: "25.11.2020",
    value: "1000 UAH",
    result: "36,65 USD"
}

function HistoryCurrencies() {
    return (
        <div>
            <div className="grid grid-cols-2 items-center content-between mb-8">
                <h2 className="text-3xl font-bold">Історія конвертації</h2>
                <div className="place-self-end text-base">
                    <CTA ctaColor={ECtaColor.primary} ctaType={ECtaType.button}>Очистити історію</CTA>
                </div>
            </div>
    
                    <ul className="flex flex-wrap flex-col md:flex-row justify-between text-lg gap-y-4">
                        <li className="flex justify-between items-center w-full md:w-[47%] pl-5 pr-5 md:pr-12 py-2 bg-white rounded">
                            <span className="text-stoneWhite-50">{testObj.date}</span>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.value}</span>
                            <div className="max-w-max">
                                <Image src={iconArrowR} alt="" loading={'eager'} sizes="100vw" role="presentation"
                                    style={{ width: '18px', height: 'auto' }} />
                            </div>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.result}</span>
                        </li>
                        <li className="flex justify-between items-center w-full md:w-[47%] pl-5 pr-12 py-2 bg-white rounded">
                            <span className="text-stoneWhite-50">{testObj.date}</span>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.value}</span>
                            <div className="max-w-max">
                                <Image src={iconArrowR} alt="" loading={'eager'} sizes="100vw" role="presentation"
                                    style={{ width: '18px', height: 'auto' }} />
                            </div>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.result}</span>
                        </li>
                        <li className="flex justify-between items-center w-full md:w-[47%] pl-5 pr-12 py-2 bg-white rounded">
                            <span className="text-stoneWhite-50">{testObj.date}</span>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.value}</span>
                            <div className="max-w-max">
                                <Image src={iconArrowR} alt="" loading={'eager'} sizes="100vw" role="presentation"
                                    style={{ width: '18px', height: 'auto' }} />
                            </div>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.result}</span>
                        </li>
                        <li className="flex justify-between items-center w-full md:w-[47%] pl-5 pr-12 py-2 bg-white rounded">
                            <span className="text-stoneWhite-50">{testObj.date}</span>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.value}</span>
                            <div className="max-w-max">
                                <Image src={iconArrowR} alt="" loading={'eager'} sizes="100vw" role="presentation"
                                    style={{ width: '18px', height: 'auto' }} />
                            </div>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.result}</span>
                        </li>
                        <li className="flex justify-between items-center w-full md:w-[47%] pl-5 pr-12 py-2 bg-white rounded">
                            <span className="text-stoneWhite-50">{testObj.date}</span>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.value}</span>
                            <div className="max-w-max">
                                <Image src={iconArrowR} alt="" loading={'eager'} sizes="100vw" role="presentation"
                                    style={{ width: '18px', height: 'auto' }} />
                            </div>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.result}</span>
                        </li>
                        <li className="flex justify-between items-center w-full md:w-[47%] pl-5 pr-12 py-2 bg-white rounded">
                            <span className="text-stoneWhite-50">{testObj.date}</span>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.value}</span>
                            <div className="max-w-max">
                                <Image src={iconArrowR} alt="" loading={'eager'} sizes="100vw" role="presentation"
                                    style={{ width: '18px', height: 'auto' }} />
                            </div>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.result}</span>
                        </li>
                        <li className="flex justify-between items-center w-full md:w-[47%] pl-5 pr-12 py-2 bg-white rounded">
                            <span className="text-stoneWhite-50">{testObj.date}</span>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.value}</span>
                            <div className="max-w-max">
                                <Image src={iconArrowR} alt="" loading={'eager'} sizes="100vw" role="presentation"
                                    style={{ width: '18px', height: 'auto' }} />
                            </div>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.result}</span>
                        </li>
                        <li className="flex justify-between items-center w-full md:w-[47%] pl-5 pr-12 py-2 bg-white rounded">
                            <span className="text-stoneWhite-50">{testObj.date}</span>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.value}</span>
                            <div className="max-w-max">
                                <Image src={iconArrowR} alt="" loading={'eager'} sizes="100vw" role="presentation"
                                    style={{ width: '18px', height: 'auto' }} />
                            </div>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.result}</span>
                        </li>
                        <li className="flex justify-between items-center w-full md:w-[47%] pl-5 pr-12 py-2 bg-white rounded">
                            <span className="text-stoneWhite-50">{testObj.date}</span>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.value}</span>
                            <div className="max-w-max">
                                <Image src={iconArrowR} alt="" loading={'eager'} sizes="100vw" role="presentation"
                                    style={{ width: '18px', height: 'auto' }} />
                            </div>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.result}</span>
                        </li>
                        <li className="flex justify-between items-center w-full md:w-[47%] pl-5 pr-12 py-2 bg-white rounded">
                            <span className="text-stoneWhite-50">{testObj.date}</span>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.value}</span>
                            <div className="max-w-max">
                                <Image src={iconArrowR} alt="" loading={'eager'} sizes="100vw" role="presentation"
                                    style={{ width: '18px', height: 'auto' }} />
                            </div>
                            <span className="text-stoneWhite-500 font-semibold">{testObj.result}</span>
                        </li>
        
                    </ul>
                
            
        </div>
    );
}

export default HistoryCurrencies;