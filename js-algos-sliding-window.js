// *****prompt*****

// write a function called maxSubarraySum which accepts
// an array of ints and a num called n. The function should
// calculate the max sum of n consectuive elems in the arr.


function maxSubarraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;
    
    if (arr.length < n) {
        return "no";
    }

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;   
        }
    }
    return maxSum;
}


// *****tests***** 
maxSubarraySum([1,2,5,2,8,1,5], 2)
maxSubarraySum([1,2,5,2,8,1,5], 4)
maxSubarraySum([4,2,1,6], 1)
maxSubarraySum([4,2,1,6,2], 4)
maxSubarraySum([], 4)