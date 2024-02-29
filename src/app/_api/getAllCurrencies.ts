'use server';
const API_URL: string = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
import { ICurrencyItem } from "../_components/Types/ICurrencyItem";


export default async function getAllCurrencies():Promise<ICurrencyItem[]> {
    try {
        const response = await fetch(API_URL);
        return await response.json();
      }
      catch (error) {
        console.log(error);
      }
      throw new Error("Logic error, this will never be reached.");
}
