function translateBinaryToAscii(bin){

    let ASCIIString
    bin.match(/.{1,8}/g).forEach( currVal => {
        
        console.log(currVal) 

        console.log(parseInt(currVal).toString(2))
    })
    // ascii String
    return "hello" 

}

console.log(translateBinaryToAscii("0110000101100001"))