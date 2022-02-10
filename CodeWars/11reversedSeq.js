const reverseSeq = n => {
    return Array.from({length: n}, (_, i) => n-i)
};