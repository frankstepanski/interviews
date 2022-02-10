

function mergeSort(array){

    if (array.length === 1) return array;

    const middle = array.length/2

    const left = array.slice(0,middle)
    const right = array.slice(middle, array.length);

    return merge(mergeSort(left), mergeSort(right))
}

function merge(leftArray, rightArray){
    
    if ((leftArray) && (rightArray)){

        if (leftArray[0] > rightArray[0]){    //5 > 4


            for (let l=0; l<leftArray.length; l++){
                let addedRight = false;
                for (let r=0; r<rightArray.length; r++){
                    if (leftArray[l] < rightArray[r]){   //5 < 4, 5, 12
                        addedRight = true;
                        rightArray.splice(r, 0, leftArray.shift())
                    }
                }
                if (!addedRight){
                    rightArray.push(...leftArray);
                    return rightArray;
                }

            }
            leftArray.push(...rightArray)
            return leftArray;


        } else { //rightArray[0] > leftArray[0]

            for (let r=0; r<rightArray.length; r++){
                let addedLeft = false;
                for (let l=0; l<leftArray.length; l++){
                    if (rightArray[r] < leftArray[l]){   
                        addedLeft = true;
                        leftArray.splice(l, 0, rightArray.shift())
                    }
                }
                if (!addedLeft){
                     leftArray.push(...rightArray)
                     return leftArray;
                }

            }
            rightArray.push(...leftArray)
            return rightArray;

        }
    } else if (leftArray){
        return leftArray;
    } else {
        return rightArray;
    }
}


function minSum(nums, k) {

    const sortedArray = mergeSort(nums);
    console.log("sortedArray -", JSON.stringify(sortedArray))
    //loop k times
    for (let j=0; j<k; j++ ){
        const largestNumber = sortedArray.shift();
        const dividedNumber = Math.ceil(largestNumber/2);
        let numIndex = 0;
        while (sortedArray[numIndex] > dividedNumber){
            numIndex++;
        } 
        console.log("loop - #", j, ", numIndex -", numIndex, ", dividedNumber -", dividedNumber)
        sortedArray.splice(numIndex, 0, dividedNumber)
        console.log("sortedArray changed -", JSON.stringify(sortedArray));
    }

    return sortedArray.reduce( (acc,currValue) => acc + currValue )
    
}

const array = [10,5,4,12,15,8,2,3,9];

console.log(mergeSort(array)); // [4,5,8,9,10,12,15]
// console.log(mergeSortDesc(array)); // [4,5,8,9,10,12,15]

// console.log(minSum(array, 4))