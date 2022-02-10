const {BinarySearch, BinarySearch1} = require('./BinarySearch.js')

const array = [1,4,5,6,8,9,10,11];

test("BinarySearch with looping will be O(n)", () =>{
    let targetNumber = 1;
    expect(BinarySearch(array, targetNumber)).toBe(0)
    targetNumber = 4;
    expect(BinarySearch(array, targetNumber)).toBe(1)
    targetNumber = 8;
    expect(BinarySearch(array, targetNumber)).toBe(4)
    targetNumber = 11;
    expect(BinarySearch(array, targetNumber)).toBe(7)
    targetNumber = 7;
    expect(BinarySearch1(array, targetNumber)).toBe(-1) 
    targetNumber = 2;
    expect(BinarySearch1(array, targetNumber)).toBe(-1) 
})
test("BinarySearch1 with recursion will be O(log(n))", () =>{
    let targetNumber = 1;
    expect(BinarySearch1(array, targetNumber)).toBe(0)
    targetNumber = 4;
    expect(BinarySearch1(array, targetNumber)).toBe(1)
    targetNumber = 8;
    expect(BinarySearch1(array, targetNumber)).toBe(4)
    targetNumber = 11;
    expect(BinarySearch1(array, targetNumber)).toBe(7) 
    targetNumber = 7;
    expect(BinarySearch1(array, targetNumber)).toBe(-1) 
    targetNumber = 2;
    expect(BinarySearch1(array, targetNumber)).toBe(-1) 
})