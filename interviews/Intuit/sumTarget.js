/*
1. Write a function(array1, array2, integer) given that...

  * input:  two arrays in the given format, and an integer
  
  * output: an array of pairs (one object from array1, one object from array2) whose 
  *.        uniqueIds sum to the target integer
  
    {uniqueId:1, color: "grey"}
    {uniqueId:3, color:"grey"},
    
    {uniqueId:2, color: "purple"}
    {uniqueId:2, color: "red"},
     integer = 4
    
     
  * note, the "uniqueId" must be a unique within an array, but does not need to be unique across 
  *.      the two arrays
  
  
            array1 = [ 
              {uniqueId:1, color: "grey"},
              {uniqueId:6, color: "blue"},
              {uniqueId:8, color: "yellow"},
              {uniqueId:3, color: "red"},
              {uniqueId:2, color: "purple"}
            ],
            array2 = [
              {uniqueId:3, color:"grey"},
              {uniqueId:6, color: "blue"},
              {uniqueId:7, color: "orange"},
              {uniqueId:2, color: "red"},
              {uniqueId:0, color: "green"}
            ],

*/

function findTargetSum(array1, array2, targetNum){


    // loop thru array1 reduce
    return array1.reduce( ( acc,currObj1 ) =>{

        // if match then push array1 obj and array 2 obj onto acc.
        array2.forEach( currObj2 => {
            if (currObj1.uniqueId + currObj2.uniqueId === targetNum){
                const accArray = [];;
                accArray.push(currObj1);
                accArray.push(currObj2);
                acc.push(accArray);
            }
        })

        return acc;
    },[])

}


// loop thru the first array

 //   1, 6, 8, 3, 2

// target num - 4

// cache 
//  3, -2, -4, 1, 2 

// loop thru the second array
// if cache[array[index]] !== undefined
    // push those values into acc;

const array1 = [ 
    {uniqueId:1, color: "grey"},
    {uniqueId:6, color: "blue"},
    {uniqueId:8, color: "yellow"},
    {uniqueId:3, color: "red"},
    {uniqueId:2, color: "purple"}
  ];

const array2 = [
    {uniqueId:3, color:"grey"},
    {uniqueId:6, color: "blue"},
    {uniqueId:7, color: "orange"},
    {uniqueId:2, color: "red"},
    {uniqueId:0, color: "green"}
];

console.log(findTargetSum(array1, array2, 4));   

// result returned
//  [  
//     [{ uniqueId:1, color: "grey" }, {uniqueId:3, color:"grey"}],
//     [{ uniqueId:2, color: "purple"}, {uniqueId:2, color: "red"}]
//  ] 
