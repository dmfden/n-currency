'use client';
import { useStoreConverter } from "@/stores/converter";

function CurrenciesDate (): JSX.Element {
const currenciesDate = useStoreConverter(state=>state.currenciesDate);

if(currenciesDate){
    return (
        <div className="bg-blueGeneral-100 saturate-50 mt-6 p-4 rounded-md animate-backInLeft">
            <p className="text-white">Завантажені дані на: {currenciesDate}</p>
        </div>
    );
}
    return (
        <></>
    );
}
export default CurrenciesDate;