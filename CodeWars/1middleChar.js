function middleChar(s){
    return s.substr(s.length/2 -1, s.length % 2 === 0 ? 2: 1)
}

console.log(middleChar("tesla"))
console.log(middleChar("tesla1")) 