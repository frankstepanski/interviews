// Write a function that returns integers between repeating integers
// input = [2, 3, 4, 2, 3, 5]
// output = [3, 4, 4, 2]

function repeatingIntegers(array){

    // cache values in obj
    const cache = {}
     
    // loop thru input
    return array.reduce( (acc, currVal, index) =>{
        console.log("currVal -", currVal, ", cache[currVal] -", cache[currVal], ", acc=", acc)
        if (cache[currVal] !== undefined){
            console.log("cache1 ***** -", cache)
            return [...acc, ...array.slice(cache[currVal]+1, index)] 
        }else{
            console.log("cache2 -", cache)
            cache[currVal] = index
        }
        return acc;   

    },[])

}

console.log("repeatingIntegers -",repeatingIntegers([4,3,4,5,2,5]))

