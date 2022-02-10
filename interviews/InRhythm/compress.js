
const input = 'aabbbcddddabc';

// ['a',2,'b',3]

// ['a',2]


function compress(input){
    return input.split("").reduce( (acc, currChar,index) => {
         if ( acc.length === 0 ){
             acc.push(currChar)
         }else{
             if (acc[length-1]  )   
                 // check if acc[length-1] is a number using regex  
                 // acc.push(currChar)
             else if (acc[length-2] === currChar {
                 charCount++   
             }else{
                 acc.push[charCount];
             }
         }
        
         return acc;
    },[]).join("");   
}
                                  
function compress(input) {
    let output = '';
    let count = 0;

    for(let currChar = 0; currChar < input.length; currChar++) {
        count++
        if (input[currChar] !== input[currChar + 1]) {
            output += `${input[currChar]}${count > 1 ? count : ''}`;
            count = 0;
        }
    }
    return output;       
}

// loop thru input reduce
    // if next value repeats add to count.
    // pushing values to array
   

// convert back to string

console.log(compress(input) == 'a2b3cd4abc');