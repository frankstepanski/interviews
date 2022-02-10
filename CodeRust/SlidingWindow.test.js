const { SlidingWindow } = require("./SlidingWindow.js");

const largeArray = [1,10,4,3,2,4,5,6];  // largeArray.length = 8
// 1, 10, 4
// 10, 4, 3
// 4, 3, 2
// 3, 2, 4
// 2, 4, 5
// 4, 5, 6 index = 5, 
const windowSize = 3;
test("testing sliding windows ", () =>{
    expect(SlidingWindow(largeArray, windowSize)).toEqual([10, 10, 4, 4, 5, 6])
})