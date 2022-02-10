"use strict";

/*


We are writing a tool to help users manage their calendars. Given an unordered list of times of day when someone is busy, write a function that tells us whether they're available during a specified period of time.

Each time is expressed as an integer using 24-hour notation, such as 1200 (12:00), 1530 (15:30), or 800 (8:00).

Sample input:

meetings = [
  [1230, 1300],
  [845, 900],
  [1300, 1500]
]
845 - 900
>>> 9:00 - 1230
1230 - 1300
1300 - 1500
>>> afer 15:00 


Expected output:

isAvailable(meetings, 915, 1215)   => true
isAvailable(meetings, 900, 1230)   => true
isAvailable(meetings, 850, 1240)   => false
isAvailable(meetings, 1200, 1300)  => false
isAvailable(meetings, 700, 1600)   => false
isAvailable(meetings, 800, 845)    => true
isAvailable(meetings, 1500, 1800)  => true
isAvailable(meetings, 845, 859)    => false
isAvailable(meetings, 846, 900)    => false
isAvailable(meetings, 846, 859)    => false
isAvailable(meetings, 2359, 2400)  => true
isAvailable(meetings, 930, 1600)   => false
isAvailable(meetings, 800, 850)    => false
isAvailable(meetings, 1400, 1600)  => false
isAvailable(meetings, 1300, 1501)  => false

n = number of meetings
m = minutes in range of meetings

*/

const meetings = [
  [1230, 1300],
  [845, 900],
  [1300, 1500]
];
                           
function isAvailable(meetings, beginTime, endTime){
  return meetings.every( currMtg =>{
     const meetingBeginTime = currMtg[0];
     const meetingEndTime = currMtg[1];
     if (endTime <= meetingBeginTime|| beginTime >= meetingEndTime){
       return true;
     } else {
       return false;
     }
  })
  
}


console.log(isAvailable(meetings, 915, 1215) )  //=> true
console.log(isAvailable(meetings, 900, 1230) )  //=> true
console.log(isAvailable(meetings, 850, 1240) )  // => false
console.log(isAvailable(meetings, 1200, 1300))  // => false
console.log(isAvailable(meetings, 700, 1600) )  // => false
console.log(isAvailable(meetings, 800, 845)  )  // => true
console.log(isAvailable(meetings, 1500, 1800))  // => true
console.log(isAvailable(meetings, 845, 859)  )  // => false
console.log(isAvailable(meetings, 846, 900)  )  // => false
console.log(isAvailable(meetings, 846, 859)  )  // => false
console.log(isAvailable(meetings, 2359, 2400))  // => true
console.log(isAvailable(meetings, 930, 1600) )  // => false
console.log(isAvailable(meetings, 800, 850)  )  // => false
console.log(isAvailable(meetings, 1400, 1600))  // => false
console.log(isAvailable(meetings, 1300, 1501))  // => false