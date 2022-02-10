/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = word => {

    const matches = {
        '[': ']',
        '{': '}',
        '(': ')'
    }

    const resultArray = [];

    for (const char of word){

        if (char in matches){
            resultArray.push(char);
        } else if (char === ")" || char === "}" || char === "]"){
            let poppedItem = resultArray.pop();
            if (char !== matches[poppedItem]){
                return false
            }
        }

    }
    return resultArray.length === 0;

}

console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false

console.log(balancedParens(' const wow = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' const newton = () => { telescopes.areSicc(); ')); // false

module.exports = { balancedParens} ;
