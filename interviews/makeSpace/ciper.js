/*

Your friends are now complaining that it's too hard to make sure the lengths of their status updates are not prime numbers.

You decide to create a substitution cipher. The cipher alphabet is based on a key shared amongst those of your friends who don't mind spoilers.

Suppose the key is:
"The quick onyx goblin, grabbing his sword, jumps over the lazy dwarf!". 

We use only the unique letters in this key to set the order of the characters in the substitution table.

T H E Q U I C K O N Y X G B L R A S W D J M P V Z F

(spaces added for readability)

We then align it with the regular alphabet:
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
T H E Q U I C K O N Y X G B L R A S W D J M P V Z F

Which gives us the substitution mapping: A becomes T, B becomes H, C becomes E, etc.

Write a function that takes a key and a string and encrypts the string with the key.

Example:
key = "The quick onyx goblin, grabbing his sword, jumps over the lazy dwarf!"
encrypt("It was all a dream.", key) -> "Od ptw txx t qsutg."
encrypt("Would you kindly?", key) -> "Pljxq zlj yobqxz?"

Complexity analysis:

m: The length of the message
k: The length of the key


*/

const message1 = "One does not simply walk into Mordor";
const r1 = 6;
const c1 = 6;

const message2 = "1.21 gigawatts!";
const r2 = 5;
const c2 = 3;
const r3 = 3;
const c3 = 5;

// function takes in string, two numbers
function cipher(msg, c, r){

    let shortMsg = [];
    const matrix = msg.split("").reduce((acc,currChar,index)=>{
        
        if (index % c === 0){
            shortMsg = [];
            acc.push(shortMsg);
        }
        shortMsg.push(currChar)  
        return acc;

    },[])
    console.log("matrix -", matrix);

    let resultStr = "";
    matrix[0].forEach( ( _, index) =>{
        resultStr = matrix.reduce( (acc, currArray) =>{
            return acc + currArray[index];
        },resultStr)
    })
        
    return resultStr;
  
}

console.log(cipher(message1,c1,r1));
console.log(cipher(message2,c2,r2));
console.log(cipher(message2,c3,r3));
