function BinarySearch(array, targetNumber){
// Given a sorted array of integers, return the index of the given key.

    let high = array.length-1;
    let low = 0;
    while (low <= high){

        middle = Math.floor((high + low)/2);
        let number = array[middle];
        if (targetNumber === number){
            return middle
        };
        if (targetNumber > number){
            low = middle+1;
        }else{
            high = middle-1;
        }
   

    }
    return -1;
}

function BinarySearch1(array, targetNumber, low=0, high=array.length-1){
    // Given a sorted array of integers, return the index of the given key.
    
        if (low > high) return -1

        middle = Math.floor((high + low)/2);
        let number = array[middle];
        if (targetNumber === number) return middle;

        if (targetNumber > number){
            return BinarySearch1(array, targetNumber, middle+1, high);
        }else{
            return BinarySearch1(array, targetNumber, low, middle-1);
        }
    }



module.exports = { BinarySearch, BinarySearch1 }