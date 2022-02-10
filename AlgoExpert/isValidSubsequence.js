// Given two non-empty arrays of integers, write a function that 
// determines whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are
// in the same order as they appear [2,4]. Note that a single number in an array and the array itself are both
// valid subsequences of the array.

array = [5,1,22,25,6,-1,8,10]
sequence = [1,6,-1,10]


function isValidSubsequence(array, sequence){
    let seqIndex = 0;
    for (let i=0; i< array.length; i++ ){
       if (array[i] === sequence[seqIndex]){
         seqIndex++;
         if (sequence.length === seqIndex){
             return true
         }
       }
        
    } 
    return false;

}

function isValidSubsequence1(array, sequence){
    let seqIndex = 0;
    for (const num of array){
        if (num === sequence[seqIndex]){
            seqIndex++
        }
    }
    return seqIndex === sequence.length
}


module.exports = { isValidSubsequence, isValidSubsequence1 }