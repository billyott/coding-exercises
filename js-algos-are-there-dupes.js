//make function areThereDuplicates which acceps a variable num of args and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.




function areThereDuplicates() {
    let obj = {};
    
    for (let i = 0; i < arguments.length; i++) {
        obj[arguments[i]] = obj[arguments[i]] + 1 || 1;    
    }
    
    for (let key in obj) {
        if (obj[key] > 1) {
            return true;
        }
    }
    return false;
}


//*******tests*******/
areThereDuplicates(1,2,3)
//false
areThereDuplicates(1,2,2)
//true
areThereDuplicates('a','c','b','a')
//true