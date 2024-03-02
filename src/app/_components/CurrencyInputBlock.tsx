'use client';
import { useStoreConverter } from "@/stores/converter";

export interface ICurrencyInputBlock {
    blockTitle: string,
    selectName: string,
    inputName: string,
    handleInput: (event: React.FormEvent<HTMLInputElement>)=>void,
    handleSelect: (event: React.FormEvent<HTMLSelectElement>)=>void,
    inputValue: number,
    selectCurrencyName: string
    
}

function CurrencyInputBlock(props: ICurrencyInputBlock): JSX.Element {
    const currencies = useStoreConverter(state => state.currencies);
    const inputClasses = "text-center border rounded py-4 px-2 border-stoneWhite-500 w-[216px] md:w-[150px] lg:w-[220px]";
    const selectClasses = "border rounded py-4 px-2 border-stoneWhite-500 w-4/12";
    const inputValue = props.inputValue > 0 ? props.inputValue : '';
    
    return (
        <div className="w-full md:w-5/12">
            <p className="text-xl pb-7">{props.blockTitle}</p>
            <div className="flex gap-3 w-full">
                <input name={props.inputName} id={props.inputName} type="text" className={inputClasses} value={inputValue} onChange={props.handleInput} placeholder="Введіть значення" />
                <select autoComplete="on" name={props.selectName} id={props.selectName} className={selectClasses} value={props.selectCurrencyName} onChange={props.handleSelect}>
                    {
                        currencies.length > 0 && currencies.map((el, index) => {
                            return <option value={el.cc} key={index}>{el.cc}</option>
                        })
                    }
                </select>
            </div>

        </div>
    );
}

export default CurrencyInputBlock;