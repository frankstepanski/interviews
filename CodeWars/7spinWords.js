function spinWords(sentence){

    return sentence.split(' ').map( currWord => {
        return currWord > 4 ? currWord.split("").reverse().join("") : currWord
    }).join(' ')


}

