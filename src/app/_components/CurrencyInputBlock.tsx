'use client';
import { useStoreConverter } from "@/stores/converter";
import { ICurrencyItem } from "./Types/ICurrencyItem";

export interface ICurrencyInputBlock {
    selectName: string,
    inputName: string,
    handleInput: (event: React.FormEvent<HTMLInputElement>)=>void,
    handleSelect: (event: React.FormEvent<HTMLSelectElement>)=>void,
    inputValue: number,
    selectCurrencyName: string
    
}

function CurrencyInputBlock (props:ICurrencyInputBlock):JSX.Element {
    const currencies = useStoreConverter(state=>state.currencies);

return (
    <div className="w-full md:w-5/12">
    <p className="text-xl pb-7">В мене є:</p>
    <div className="flex gap-3 w-full">
        <input name={props.inputName} id={props.inputName} type="text" className="text-center border rounded py-4 px-2 border-stoneWhite-500 w-[216px] md:w-[150px] lg:w-[220px]"  value={props.inputValue > 0 ? props.inputValue : ''} onChange={props.handleInput} placeholder="Введіть значення"/>
        <select autoComplete="on" name={props.selectName} id={props.selectName} className="border rounded py-4 px-2 border-stoneWhite-500 w-4/12" value={props.selectCurrencyName} onChange={props.handleSelect}> 
            {
                currencies ? currencies.map((el, index)=> {
                    return <option value={el.cc} key={index}>{el.cc}</option>
                }) : ''
            }
        </select>
    </div>

</div>
);
}

export default CurrencyInputBlock;