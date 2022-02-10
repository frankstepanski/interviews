/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in a day by buying and selling a single Apple stock. Keep your
worst case time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).let: Use leters to keep track of the indices of max, min to 
calculate profit along the array.

*/

// calculates the highest profit 
// you can make in a day by buying and selling a single Apple stock
function highestProfit1(stockPrices) {

    let maxProfit = 0;

    // go through every time
    for (let outerTime = 0; outerTime < stockPrices.length; outerTime++) {

        let earlierPrice = stockPrices[outerTime];
        // for every time, go through every other time
        for (let innerTime = outerTime + 1; innerTime < stockPrices.length; innerTime++) {

            let laterPrice   = stockPrices[innerTime];

            // see what our profit would be if we bought at the
            // min price and sold at the current price
            let potentialProfit = laterPrice - earlierPrice;

            // update maxProfit if we can do better
            maxProfit = Math.max(maxProfit, potentialProfit);
        }
    }

    return maxProfit;
}


function highestProfit(stockPrices) {

    let lowestPrice = +Infinity;
    let highestPrice = 0;

    // go through every time
    for (let time = 0; time < stockPrices.length; time++) {

        let price = stockPrices[time];
        if (lowestPrice > price){
            lowestPrice = price;
        }else if (highestPrice < price){
            highestPrice = price;
        }

    }
    
    return highestPrice - lowestPrice;
}

const apple_stock = [10, 7, 5, 8, 11, 9];
console.log(highestProfit(apple_stock));

module.exports = {highestProfit}