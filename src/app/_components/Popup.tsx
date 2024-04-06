'use client';
import { usePopupStore } from "@/stores/popup";
import { ReactNode } from "react";
interface IPopup {
    children: ReactNode;
}
function Popup({ children }: IPopup) {
    const isShowPopup = usePopupStore((state) => state.isShown);
    const setPopupVisible = usePopupStore((state) => state.setVisibility);

    if (isShowPopup) {
        return (<div className="block fixed inset-0 bg-black">
            <div className="flex justify-end">
                <button className="text-stoneWhite-100 border p-4 mr-4 mt-4" onClick={() => setPopupVisible(false)}>Close X</button>
            </div>

            {children}
        </div>);
    }
    return (<></>);
}

export default Popup;