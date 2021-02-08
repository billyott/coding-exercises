//write a function averagePair. given a sorted arr of ints and a target avg, determine if there is a pair of vals in the arr where the avg of the pair queals the target avg. There may be more than one pair that mathces the average target.


function averagePair(arr, num){
    if (arr.length === 0) {
        return false;
    }
    
    let i = 0
    let j = arr.length-1
    
    while (i < j) {
        if ((arr[i] + arr[j])/2.0 === num) {
            return true;
        } else if ((arr[i] + arr[j])/2.0 < num) {
            i++
        } else {
            j--
        }
    }
    return false;
}


//*******tests*******/
averagePair([1,2,3], 2.5)
//true
averagePair([1,3,3,5,6,7,10,12,19], 8)
//true
averagePair([-1,0,3,4,5,6], 4.1)
//false
averagePair([], 4)
//false