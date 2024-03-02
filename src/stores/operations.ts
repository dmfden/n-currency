import { IInput } from "@/app/_components/Types/ICurrencyItem"
import { create } from "zustand";
import { persist, createJSONStorage, devtools } from 'zustand/middleware'

export interface IOperation {
    date: string,
    from: IInput,
    to: IInput
}

interface IOperationsStore {
    //operations: IOperation[];
    addOperation: (operation: IOperation)=>void,
    reset: ()=>void,
}

type TOperation = {
    operations: IOperation[];
}
// define the initial state
const initialState: TOperation = {
    operations: [],
  }

export const useStoreOperations = create<IOperationsStore & TOperation>()(
    devtools(
        persist(
            (set, get) => ({
                ...initialState,
                addOperation: (operation: IOperation)=> set((state)=> ({
                    operations: [...state.operations, operation],
                })),
                reset: () => {
                    set(initialState)
                  },
            }),
            {
                name: "operations-storage",
                storage: createJSONStorage(()=> localStorage),
            }
        )
));