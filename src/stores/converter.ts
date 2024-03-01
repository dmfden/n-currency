import { create } from 'zustand';
import { ICurrencyItem } from '@/app/_components/Types/ICurrencyItem';
import crossCurrency from '@/helpers/crossCurrency';

enum EConvertInputType {
    inputFrom = 'inputFrom',
    inputTo = 'inputTo'
}



interface IConverter {
   
    forExchange: {
        value: number,
        currencyName: string
    },
    exchangeCurrency: {
        value: number,
        currencyName: string
    },
    currencies: ICurrencyItem[],
    setCurrencies: (items: ICurrencyItem[])=> void,
    updateForExchange: (value:number) => void,
    updateExchangeCurrency: (value:number) => void,
    updateInput: ()=>void,
}

export interface IInput {
    value: number,
    currencyName: string
}

interface IStoreConverter {
    inputFrom: IInput,
    inputTo: IInput,
    currencies: ICurrencyItem[],
    setCurrencies: (items: ICurrencyItem[])=> void,
    updateInputs: (from: IInput, to: IInput)=>void,
    updateInputFrom: (input: IInput) => void,
    updateInputTo: (input: IInput) => void,
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
    updateInputFrom: (input: IInput) => {
        const current = get();
        return set({inputFrom: input});
    },
    updateInputTo: (input: IInput) => {
        const current = get();
        return set({inputTo: input});
    }
  }));


