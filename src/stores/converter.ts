import { create } from 'zustand';
import { ICurrencyItem } from '@/app/_components/Types/ICurrencyItem';
import { IInput } from '@/app/_components/Types/ICurrencyItem';


interface IStoreConverter {
    inputFrom: IInput,
    inputTo: IInput,
    currencies: ICurrencyItem[],
    setCurrencies: (items: ICurrencyItem[])=> void,
    updateInputs: (from: IInput, to: IInput)=>void,

}

export const useStoreConverter = create<IStoreConverter>()((set, get) => ({

    inputFrom: {
        value: 0,
        currencyName: "USD",
    },
    inputTo: {
        value: 0,
        currencyName: "UAH",
    },
    
    currencies: [],
    setCurrencies: (items: ICurrencyItem[]) => set({currencies: [...items,
        {
        r030: 999,
        txt: 'UAH',
        rate: 1,
        cc: 'UAH',
        exchangedate: '--'
    }]}),
    updateInputs: (from: IInput, to: IInput) => {
        const current = get();
       return set({
        inputFrom: from,
        inputTo: to
       });
    },

  }));


