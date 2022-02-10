// Description #
// Given a large array of integers and a window of size ww, 
// find the current maximum value in the window as the window slides through the entire array.

function SlidingWindow(largeArray, windowSize){
    const maximums = [];

    for (let index=0; index< largeArray.length; index++){ 

        if (index + windowSize > largeArray.length){
            break;
        }

        maxNumber = largeArray.slice(index, index + windowSize).reduce( (acc, currSubValue) =>{
            acc = currSubValue > acc ? currSubValue : acc
            return acc;
        },Number.MIN_VALUE)
        maximums.push(maxNumber);

    }


    // find all maximums for a window size equal to 33 in the array given below
    return maximums;

}

module.exports = { SlidingWindow }