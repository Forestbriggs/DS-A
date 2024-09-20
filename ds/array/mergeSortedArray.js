function mergeSortedArrays(arr1, arr2) {
    // check that you received arrays
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return 'invalid input'
    }

    let mergedArray = [];
    let arr1Pointer = 0;
    let arr2Pointer = 0;

    // while both arrays have items left check for lower num and push to mergedArray, increment the lower arrays pointer
    while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
        const arr1Val = arr1[arr1Pointer];
        const arr2Val = arr2[arr2Pointer];

        if (arr1Val < arr2Val) {
            mergedArray.push(arr1Val);
            arr1Pointer++;
        } else {
            mergedArray.push(arr2Val);
            arr2Pointer++;
        }
    }

    // check if either array has items left, if so we know they are in order so spread items into mergedArray
    if (arr1Pointer < arr1.length) {
        mergedArray.push(...arr1.slice(arr1Pointer))
    }

    if (arr2Pointer < arr2.length) {
        mergedArray.push(...arr2.slice(arr2Pointer))
    }

    return mergedArray;
}

module.exports = mergeSortedArrays;