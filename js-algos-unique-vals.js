// *****prompt*****

// implement a function called countUniqueValues which accepts
// a sorted array and counts the unique values in the array
// there can be negative numbers in the array, but it will always be sorted


// function countUniqueValues(arr) {
    
//     let uniqueVals = 0;
//     let currentVal = "";

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== currentVal) {
//             uniqueVals += 1
//             currentVal = arr[i]
//         }
//     };
//     return uniqueVals;
// }


// *****with multiple pointers - my try*****
function countUniqueValues(arr) {
    let i = 0;
    let j = 1;

    if (arr.length === 0) {
        return 0;
    }

    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        j++
    };
    return i+1;
}

// *****tests*****
countUniqueValues([1,1,1,1,1,2])
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])
countUniqueValues([])
countUniqueValues([-2,-1,-1,0,1])