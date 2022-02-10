function add(...letters){

    if (letters.length === 0) return 'z'
    //loop thru array of letters
    let charCode = letters.reduce( (acc, currLetter) =>{
        // a = 97 so charCode - 96 
        // therefore add up all charCode and normalize them.
        acc += currLetter.charCodeAt(0) - 96;
        return acc > 26 ? acc - 26 : acc
    },0)

    // return final charCode, put it back to original char values.
    return String.fromCharCode(charCode + 96)
}


function addAlpha(...letters){

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let sum = 25;
    for (const letter of letters)
        sum +=alphabet.indexOf(letter) + 1
    
    return alphabet[sum % 26]

}
console.log(addAlpha("z", "a"))
