'use client'
import Image from "next/image";
import logoArrow from '/public/images/icon-arrows.svg';
import CTA, { ECtaColor, ECtaType } from "./CTA";
import { format } from "date-fns/format";
import { sub } from "date-fns/sub";
import { useEffect } from "react";
import { getAllCurrencies } from "@/actions/currency";
import { useStoreConverter } from "@/stores/converter";
import crossCurrency from "@/helpers/crossCurrency";
import CurrencyInputBlock, { ICurrencyInputBlock } from "./CurrencyInputBlock";
import { IOperation, useStoreOperations } from "@/stores/operations";
import { getAllCurrenciesByDate } from "@/actions/currency";
import { isAfter } from "date-fns";
import { revalidateAllCurrenciesByTag } from "@/actions/currency";

function ConverterForm(): JSX.Element {

    const setCurrencies = useStoreConverter(state => state.setCurrencies);
    const currencies = useStoreConverter(state => state.currencies);
    const inputFrom = useStoreConverter(state => state.inputFrom);
    const inputTo = useStoreConverter(state => state.inputTo);
    const updateInputs = useStoreConverter(state => state.updateInputs);
    const addOperations = useStoreOperations(state => state.addOperation);
    const setCurrenciesDate = useStoreConverter(state => state.setCurrenciesDate);

    useEffect(() => {

        getAllCurrencies().then(result => {
            const currentItemsDate = result[0]?.exchangedate;
            if (currentItemsDate) {
                const dateFromReq = new Date(currentItemsDate);
                const currentDate = new Date();
                const isCurrDateAfterApiDate = isAfter(currentDate, dateFromReq);
                isCurrDateAfterApiDate && revalidateAllCurrenciesByTag("allCurrencies");
                getAllCurrencies().then(result => {
                    setCurrencies(result);
                });

            } else {
                setCurrencies(result)
            }
        });
    }, []);


    const fromRate = currencies.find(el => el.cc === inputFrom.currencyName)?.rate;
    const toRate = currencies.find(el => el.cc === inputTo.currencyName)?.rate;
    const rateRelation = fromRate && toRate && crossCurrency(toRate, fromRate);

    const currentDate = new Date();
    const currentDateF = format(currentDate, "yyyy-MM-dd");
    const weekAgo = sub(currentDate, { weeks: 1, });
    const weekAgoF = format(weekAgo, "yyyy-MM-dd");


    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        const updatedInput = event.currentTarget;
        const inputValue = Number(updatedInput.value);

        if (!rateRelation) {
            return;
        }
        const isUpdatedInputTo = updatedInput.name === 'inputTo';
        const calculatedValue = isUpdatedInputTo ? inputValue * rateRelation : inputValue / rateRelation;

        const toInput = {
            value: isUpdatedInputTo ? inputValue : Number(calculatedValue.toFixed(2)),
            currencyName: inputTo.currencyName,
        }

        const fromInput = {
            value: isUpdatedInputTo ? Number(calculatedValue.toFixed(2)) : inputValue,
            currencyName: inputFrom.currencyName,
        }
        updateInputs(fromInput, toInput);

    }

    const handleSelect = (event: React.FormEvent<HTMLSelectElement>) => {
        const updatedSelect = event.currentTarget;
        const isSelectTo = updatedSelect.name === 'selectTo';

        const toRate = currencies.find(el => el.cc === updatedSelect.value)?.rate;
        let rateRelation = fromRate && toRate && crossCurrency(fromRate, toRate);

        if (isSelectTo) {
            rateRelation = fromRate && toRate && crossCurrency(toRate, fromRate);
        }

        const inputToValue = Number(inputTo.value);
        const inputFromValue = Number(inputFrom.value);

        if (!rateRelation) {
            return;
        }

        const toInput = {
            value: isSelectTo ? inputToValue : Number((inputToValue / rateRelation).toFixed(2)),
            currencyName: isSelectTo ? updatedSelect.value : inputTo.currencyName,
        }

        const fromInput = {
            value: isSelectTo ? Number((inputToValue * rateRelation).toFixed(2)) : inputFromValue,
            currencyName: isSelectTo ? inputFrom.currencyName : updatedSelect.value,
        }

        updateInputs(fromInput, toInput);
    }

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newOperation: IOperation = {
            date: format(new Date(), "dd.MM.yyyy"),
            from: {
                value: inputFrom.value,
                currencyName: inputFrom.currencyName,
            },
            to: {
                value: inputTo.value,
                currencyName: inputTo.currencyName,
            }
        }
        addOperations(newOperation);
    }

    const handleDateInput = (event: React.FormEvent<HTMLInputElement>) => {
        const formattedDate = format(new Date(event.currentTarget.value), "yyyyMMdd");
        getAllCurrenciesByDate(formattedDate)
            .then(result => {
                const currenciesDate = result[0]?.exchangedate;
                setCurrenciesDate(currenciesDate);
                setCurrencies(result);
            });
    }

    const currencyBlockFrom: ICurrencyInputBlock = {
        blockTitle: "В мене є:",
        selectName: "selectFrom",
        inputName: "inputFrom",
        handleInput: handleInput,
        handleSelect: handleSelect,
        inputValue: inputFrom.value,
        selectCurrencyName: inputFrom.currencyName,
    }

    const currencyBlockTo: ICurrencyInputBlock = {
        blockTitle: "Хочу придбати:",
        selectName: "selectTo",
        inputName: "inputTo",
        handleInput: handleInput,
        handleSelect: handleSelect,
        inputValue: inputTo.value,
        selectCurrencyName: inputTo.currencyName,
    }

    return (
        <form onSubmit={handleForm}>
            <div className="text-stoneWhite-500 text-xl flex justify-between gap-8 flex-wrap">
                <CurrencyInputBlock {...currencyBlockFrom} />
                <div className="max-w-max self-end mb-4">
                    <Image src={logoArrow} alt="" loading={'eager'} sizes="100vw" role="presentation" style={{ width: '32px', height: 'auto' }} />
                </div>
                <CurrencyInputBlock {...currencyBlockTo} />
            </div>
            <div className="flex justify-between pt-6 gap-3">
                <input type="date" id="start" name="start" min={weekAgoF} max={currentDateF} className="border rounded py-4 px-2 border-stoneWhite-500 w-6/12 md:w-[220px]" onChange={handleDateInput} />
                <div className="w-6/12 md:w-auto">
                    <CTA ctaColor={ECtaColor.primary} ctaType={ECtaType.button}>Зберегти результат</CTA>
                </div>
            </div>
        </form>
    );
}

export default ConverterForm;