function reverseDigits(num){

    return num.toString().split('').reverse().map(Number)

}


function revDigits(num){
    return Array.from(String(num),Number).reverse()
}
