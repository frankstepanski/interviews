function binarySearch(array, num, lowerIndex=0, higherIndex=array.length-1){

    while (true){

        if (array.length === 1) return 1;

        let middleIndex = Math.floor((higherIndex-lowerIndex)/2) + lowerIndex;
        let middleNum = array[middleIndex];

        if (middleNum === num){
            return middleIndex;
        }else if (middleNum > num){
            if (array[middleIndex+1] < num)  return middleIndex;
            higherIndex = middleIndex;    
        }else{
            if (array[middleIndex+1] > num ) {
                return middleIndex;
            } else if (array[middleIndex+1] === num ){
                return middleIndex+1;
            }
            lowerIndex = middleIndex;
        }
        // console.log(`num - ${num}, lowerIndex - ${lowerIndex}, middleIndex - ${middleIndex}, higherIndex - ${higherIndex}`);
    }

}



function minSum(numbers, k) {

    numbers.sort(function(a, b) {
        return a - b;
    });
  
    console.log(`numbers = ${numbers}`)
    // console.log("Loop k times -", k)
    for (let j=0; j<k; j++ ){
        
        const largestNumber = numbers.pop();
        const dividedNumber = Math.ceil(largestNumber/2);
        if (numbers.length === 0) return [dividedNumber];

        
        const numIndex = binarySearch(numbers, dividedNumber);
        // console.log(`loop #${j}, dividedNumber - ${dividedNumber}, numIndex - ${numIndex}`);
        numbers.splice(numIndex, 0, dividedNumber)
    }


    return numbers.reduce( (acc,currValue) => acc + currValue )
    
}