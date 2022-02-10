function binarySearch(array, num, lowerIndex=0, higherIndex=array.length-1){

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



    console.log(`array - ${JSON.stringify(array)}, num - ${num}, lowerIndex - ${lowerIndex}, middleIndex - ${middleIndex}, higherIndex - ${higherIndex}`);
    return binarySearch(array, num, lowerIndex, higherIndex, lowerIndex, higherIndex)

}

const array = [1,2,3,4,5,6,9,9,11,12,15,20,22,23,24];

console.log(binarySearch(array,1)) // 0
console.log(binarySearch(array,2))  // 1
console.log(binarySearch(array,3))  // 2
console.log(binarySearch(array,4))  // 3
console.log(binarySearch(array,5))  // 4
console.log(binarySearch(array,6))  // 5
console.log(binarySearch(array,7))  // 5
console.log(binarySearch(array,8))  // 5 
console.log(binarySearch(array,9))  // 6
console.log(binarySearch(array,10))  // 7
console.log(binarySearch(array,11))  // 8
console.log(binarySearch(array,12))  // 9
console.log(binarySearch(array,13))  // 9
console.log(binarySearch(array,14))   // 9
console.log(binarySearch(array,15))  // 10
console.log(binarySearch(array,16))   // 10
console.log(binarySearch(array,17))   // 10
console.log(binarySearch(array,18))  // 10
console.log(binarySearch(array,19))  // 10
console.log(binarySearch(array,20))  // 11
console.log(binarySearch(array,21))  // 11
console.log(binarySearch(array,22))  // 12
console.log(binarySearch(array,23))  // 13
console.log(binarySearch(array,24))  // 14
// console.log(binarySearch(array,26))  