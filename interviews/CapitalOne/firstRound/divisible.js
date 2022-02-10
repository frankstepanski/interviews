
const isDivisible = (str, subStr) => str.split(subStr).every( currChar => currChar === "" )


// function findSmallestDivisor(subStr,str){

//     console.log(`subStr = ${subStr}, str = ${str}` )
//     if (!isDivisible(str, subStr)){
//         return -1;
//     }

//     const resultObj = {};
//     let word = ""
//     for (const char of subStr){
//         word = word.concat(char)
//         resultObj[word] = true;
//     }

//     for (const keyWord in resultObj){
//         if (isDivisible(subStr, keyWord)) 
//             return keyWord.length;
//     }

//     return subStr.length;

// }

function findSmallestDivisor(subStr,str){

        console.log(`subStr = ${subStr}, str = ${str}` )
        if (!isDivisible(str, subStr)){
            return -1;
        }
    
        let word = ""
        for (const char of subStr){

            word += char;

            if (word.length === 20){
                let index = str.indexOf(subStr,18)  
                return index-1;
            }

            if (isDivisible(subStr, word))
                return word.length;
        }
    
    }

console.log(findSmallestDivisor("bcdbcd", "bcdbcdbcd"));
console.log(findSmallestDivisor("bcdbcd", "bcdbcdbcdbcd"));

