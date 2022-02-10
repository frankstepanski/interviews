// Two Number Sum

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any
// two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If 
// no two numbers sum up to the target sum, the function should return an empty array.

// Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer
// to itself in order to obtain the target sum.

// You can assume that there will be at most one pair of numbers summing up to the target sum.

// Sample Input
// array = [3, 5, 4, 8, 11, 1, -1, 6]
// targetSum = 10

// Sample Output

// [-1, 11] // the numbers could be in the reverse order

// O(n^2) time | O(1) space
function TwoNumberSum(intArray, targetSum){
    // if any two numbers in the input array sum up to the target sum, the function should return them in an array
    // else the function should return an empty array.
    
    for (let firstIndex = 0; firstIndex < intArray.length; firstIndex++){
        firstNumber = intArray[firstIndex];
        for (let secondIndex = firstIndex + 1; secondIndex < intArray.length; secondIndex++){
            secondNumber = intArray[secondIndex]
            if (firstNumber + secondNumber === targetSum){
                return [firstNumber, secondNumber]
            }
        }
    }
    // You can assume that there will be at most one pair of numbers summing up to the target sum.
    // no need to return anything.
}

// O(n) time | O(n) space by using object 
function TwoNumberSum1(intArray, targetSum){
    nums = {};
    for (const num in intArray){

        potentialMatch = targetSum - num;
        if (potentialMatch in nums){
            return [potentialMatch, Number(num)]
        }else{
            nums[num] = true;
        }

    }
}






module.exports = { TwoNumberSum, TwoNumberSum1 };




