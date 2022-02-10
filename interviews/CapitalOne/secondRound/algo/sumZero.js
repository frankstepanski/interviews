function sumZero(arr){

    arr.sort((a,b) =>b-a)  // nlogn
    let arrReversed = arr.slice()   // log n
    arrReversed.reverse()
    let i=0;
    let j=0;
    let closestSum = 100000;
    const obj = {};

    console.log(`arr = ${JSON.stringify(arr)}, arrReversed = ${JSON.stringify(arrReversed)}`)

    while (i < arr.length){  // log n
        
        let sum = Math.abs(arr[i]  + arrReversed[j]);
        if (sum === 0){
            return [arr[i], arrReversed[j]]
        }else if (closestSum > sum){
            closestSum = sum;
            obj[closestSum] = [arr[i], arrReversed[j]]
            j = j === arr.length ? j : j + 1;
        } else {
            i++
        }

    }
    return obj[closestSum];

}


console.log(sumZero([3,2,-4,0,1,-2,5])) //
console.log(sumZero([3,2,-4,0,1,-1,5])) //
console.log(sumZero([3,2,-4,0,1,-6,5])) //
