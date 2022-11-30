function maxProfit(prices: number[]): number {
    let profit = 0;
    let purchaseDate = 0;
    let saleDate = 0 + 1;

    while (purchaseDate !== prices.length - 1) {
        if (prices[purchaseDate] > prices[saleDate]) {
            purchaseDate++
            saleDate++

            continue;
        }

        if (prices[saleDate] < prices[saleDate + 1]) {
            saleDate++

            continue;
        }

        profit = profit + (prices[saleDate] - prices[purchaseDate]);
        purchaseDate = saleDate
        saleDate++
    }

    return profit;
};