import { create } from 'zustand';

interface Ipopup {
    isShown: boolean;
    setVisibility: (isVisible: boolean) => void;
}

export const usePopupStore = create<Ipopup>()((set) => ({
    isShown: true,
    setVisibility: (isVisible: boolean) => set((state) => ({ isShown: isVisible })),
}));

