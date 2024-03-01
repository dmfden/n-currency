function crossCurrency (rateA: number, rateB: number):number {
    if(rateA > 0 && rateB > 0){
        return rateA / rateB;
    }
    return -1;
}

export default crossCurrency;