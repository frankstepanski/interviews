function minSum(numbers, k) {

    // numbers = mergeSortDesc(numbers);
    numbers.sort(function(a, b) {
        return a - b;
    });
  


    //loop k times
    // for (let j=0; j<k; j++ ){
    //     console.log("loop k -", j)
    //     const largestNumber = numbers.shift();
    //     const dividedNumber = Math.ceil(largestNumber/2);
    //     let numIndex = 0;
    //     while (numbers[numIndex] > dividedNumber){
    //         numIndex++;
    //     } 
    //     numbers.splice(numIndex, 0, dividedNumber)
    // }

    for (let j=0; j<k; j++ ){

            const largestNumber = numbers.pop();
            const dividedNumber = Math.ceil(largestNumber/2);
            let numIndex = numbers.length-1;
            console.log("loop k -", j, ", largestNumber -", largestNumber, ", dividedNumber -", dividedNumber)
            while (numbers[numIndex] > dividedNumber){
                numIndex--;
                console.log(`finding the right number to stop - ${numbers[numIndex]}`);
            } 

            numbers.splice(numIndex+1, 0, dividedNumber)
            console.log(`numbers - ${JSON.stringify(numbers)}`);
    }


   
    return numbers.reduce( (acc,currValue) => acc + currValue )
    
}

const array = [10,5,4,12,15,8,2,3,9];

// console.log(mergeSort(array)); // [4,5,8,9,10,12,15]
// console.log(mergeSortDesc(array)); // [4,5,8,9,10,12,15]

console.log(minSum(array, 4))