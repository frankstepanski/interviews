const { isValidSubsequence, isValidSubsequence1 } = require('./isValidSubsequence.js')
// non-empty array of distinct integers and an integer representing a target sum.

const array = [5,1,22,25,6,-1,8,10]
const sequence = [1,6,-1,10]

test("isValidSubsequence brute solution with O(n)", () =>{
    expect(isValidSubsequence(array, sequence)).toBe(true);
})

test("isValidSubsequence1 solution with for num of array with O(n)", () =>{
    expect(isValidSubsequence1(array, sequence)).toBe(true);
})
