// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //while loop thru num
    uniqueIndex = 0
    repeat = false
    nums.slice(1).forEach( currNum =>{
        if (nums[uniqueIndex] !== currNum){
            uniqueIndex++;
            nums[uniqueIndex] = currNum;

        }
    })
    return uniqueIndex+1;
       
};

// let nums = [1,1,2]
// console.log("removeDuplicates -",removeDuplicates(nums));

// let nums = [0,0,1,1,1,2,2,3,3,4]
// console.log("removeDuplicates -",removeDuplicates(nums));

let nums = [1,1,2,3]
console.log("removeDuplicates -",removeDuplicates(nums));



