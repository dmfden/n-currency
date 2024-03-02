'use server';
import { ICurrencyItem } from "../app/_components/Types/ICurrencyItem";
import { revalidateTag } from 'next/cache';
const API_URL: string = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export async function getAllCurrencies():Promise<ICurrencyItem[]> {
    try {
        const response = await fetch(API_URL, { next: { tags: ['allCurrencies'] } });
        return await response.json();
      }
      catch (error) {
        console.log(error);
      }
      throw new Error("Logic error, this will never be reached.");
}



const API_DATE_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange';


export async function getAllCurrenciesByDate(date:string):Promise<ICurrencyItem[]> {
  
  try {
  
      const response = await fetch(`${API_DATE_URL}?date=${date}&json`);
      return await response.json();
    }
    catch (error) {
      console.log(error);
    }
    throw new Error("Logic error, this will never be reached.");
}


export async function revalidateAllCurrenciesByTag(tag: string) {
  revalidateTag(tag);
}