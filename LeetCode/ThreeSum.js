function mergeSort(array){
    if (array.length <  2){
        return array;
    }

    const middle = Math.floor(array.length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle)
    console.log('left:', left);
    console.log('right:', right);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right){
    const sortedResult = [];
    while (left.length && right.length){
        if (left[0] < right[0]){
            sortedResult.push(left[0])
            left.shift();
        }else{
            sortedResult.push(right[0])
            right.shift()
        }
    }
    return [ ...sortedResult, ...left, ...right];
}


// console.log(`mergeSort([4,2,15,0,-4,-2,11,12,6]) = ${mergeSort([4,2,15,0,-4,-2,11,12,6])}`)

const bubbleSort = (arr) => {

    let change;
    sortedArr = arr.slice();
    do {
        change = false;
        for (let i=0; i< sortedArr.length; i++){
            if (sortedArr[i] > sortedArr[i+1]){
                temp = sortedArr[i];
                sortedArr[i] = sortedArr[i+1];
                sortedArr[i+1] = temp;
                change = true;
            } 
        }
    } while (change);
    return sortedArr;
}

const insertionSort = array =>{
    for (let i=1; i< array.length; i++){

        let j = i - 1;
        array[j] > array[i]

        while (array[])po
        if (array[i] > array[i+1]){
            let temp = array[i];
            let j = j-1;
            while ()
            array[i] = array[i+1];
            array[i+1] = temp;
        }
    }
}

function threeSum(array){
    
    const array = mergeSort(array);
    const cache = {};
    return array.reduce((acc, currValue,index )=>{    
        const targetValue = currValue * -1;
        const subArray = array.slice(index+1)
        const twoSumArray = twoSum(subArray, targetValue)
        twoSumArray.forEach(currArray =>{

           let key = ''.concat(currArray[0]).concat(currArray[1]).concat(currArray[2]);
           if (!cache[key]) {
               acc.push(currArray);
               cache[key] = true;
           }
            
        })
        console.log(`acc = `, acc)
        return acc;
    },[])
    

} 

function twoSum(nums, targetNumber){   
    // console.log("nums =", nums, ", targetNumber =", targetNumber)
    cache = {};
    resultArray = [];
    for (const num of nums){
        // console.log("num =", num);
        const potentialNum = targetNumber-num;
        if (potentialNum in cache){
            let tempArray = [targetNumber * -1, num, potentialNum]
            tempArray = insertionSort(tempArray);
            resultArray.push(tempArray)
        }else {
            // console.log("cache =", cache);
            cache[num] = true;
        }

    }
    console.log("resultArray -", resultArray)
    return resultArray;
}

const arrayEqual = (a, b) => a.every( (currValue, index) =>  currValue === b[index] ) 

// const compare = (a,b) => 

// const a = [1,3,4];
// const b = [1,3,4];
// const c = [1,2,3];

// console.log(`test array a,b if equal, ${arrayEqual(a,b)}`);
// console.log(`test array b,c if equal, ${arrayEqual(b,c)}`);


// const arr = [-1, 0, 1, 2, -1, -4] 
// threeSum(arr)



// console.log(`bubbleSort([-6,4,-12]) = ${bubbleSort([-6,4,-12])}`);


