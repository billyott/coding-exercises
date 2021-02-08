// *****prompt*****

// Write a function called same, which accepts two arrays. 
// The function should return true if every value in the 
// array has it's corresponding value squared in the second array. 
// The frequency of values must be the same.

function same(arr1, arr2) {
    let result = false
    if (arr1.length === arr2.length) {
        let arr2New = [...arr2]
        for (let i = 0; i < arr1.length; i++) {
            let index = arr2New.indexOf(arr1[i]**2)
            if (index >= 0) {
             arr2New.splice(index, 1)   
            }
        }
        if (arr2New.length === 0) {
            result = true
        }
    }
    return result
}

// *****tests*****
same([1,2,3], [4,1,9])
same([1,2,3], [1,9])
same([1,2,3], [4,4,1])