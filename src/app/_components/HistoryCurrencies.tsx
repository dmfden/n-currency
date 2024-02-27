import CTA, { ECtaColor, ECtaType } from "./CTA";

function HistoryCurrencies () {
    return (
        <div>
            <div className="flex content-between">
                <h2 className="text-3xl font-bold mb-9">Конвертер валют</h2>
                <CTA ctaColor={ECtaColor.primary} ctaType={ECtaType.button}>Очистити історію</CTA>
            </div>
            
        </div>
    );
}

export default HistoryCurrencies;