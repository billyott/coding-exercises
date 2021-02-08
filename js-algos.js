//********* js anagrams *********

// *****prompt*****
// Given two string, write a function to determine if the second string
// is an anagram of the first. This is a word, phrase, or name, formed 
// by rearraging the letters of another, such as "cinema", formed from
// "iceman".

// *****pseudocode****
// 1. immediately disqualify strs with unequal len
// 2. create objs to hold counts for each char
// 3. loop through each str to get the counts and set them in the obj
// 4. loop through first obj and check against second obj for same counts


// *****first go*****
function validAnagram(str1, str2) {
    let obj1 = {}
    let obj2 = {}

    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = obj1[str1[i]] + 1 || 1
    } 

    for (let i = 0; i < str2.length; i++) {
        obj2[str2[i]] = obj2[str2[i]] + 1 || 1
    }

    let equal = true

    Object.keys(obj1).forEach(key => {
        if (obj1[key] !== obj2[key]) {
            equal = false
        }
    })

    return equal;
}


// *****refactor*****
function validAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let obj1 = createFreqCount(str1)
    let obj2 = createFreqCount(str2)
    let areObjsEqual = true

    Object.keys(obj1).forEach(key => {
        if (obj1[key] !== obj2[key]) {
            areObjsEqual = false
        }
    })

    return areObjsEqual;
}

function createFreqCount(str) {
    obj = {}
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = obj[str[i]] + 1 || 1
    } 
    return obj;
}


// *****refactor2 - CS's method*****
function validAnagram(str1, str2) {
    if (str1.length !== str2.length){
        return false;
    }

    const obj = {};

    for (let i = 0; i < str1.length; i++) {
        obj[str1[i]] = obj[str1[i]] + 1 || 1; 
    }

    for (let i = 0; i < str2.length; i++) {
        if (!obj[str2[i]]) {
            return false;
        } else {
            obj[str2[i]] -= 1;
        }
    }

    return true;
}



// *****tests*****
validAnagram('','')
validAnagram('aaz','zza')
validAnagram('anagram','nagaram')
validAnagram('awesome','awesom')
validAnagram('qwerty','qeywrt')
validAnagram('texttwisttime', 'timetwisttext')

