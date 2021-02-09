// 1) write a function called reverse which accepts a string and returns a new string in reverse.

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}


//*****tests*****
// reverse('awesome') //'emosewa


//2) write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str){
    
    //check first and last chars are the same
    //if yes, move on to second and penultimate are the same, etc.
    //if and prev step isn't true, return false

    if (str.length === 1 || (str.length === 2 && str[0] === str[1])){
        return true;
    }
    if (str[0] === str[str.length -1]) {
        return isPalindrome(str.slice(1,-1));
    } else {
        return false;
    }
}

//*****tests*****
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


//3) write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(arr, callback){
    if (arr.length === 1) return callback(arr[0]);
    if (callback(arr[0])) {
        return true;
    } else {
        return someRecursive(arr.slice(1), callback);
    }
}

//*****tests*****
// const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false


//4) write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened

function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }

//*****tests*****
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]


//5) write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.



//*****tests*****
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']