// write a function called sameFrequency. given two positive ints
// find out if the two numbers have the same freq of digits


function sameFrequency(n, m){

    if (n.toString().length !== m.toString().length) {
        return false;
    }
    
    let nObj = {};
    let mObj = {};
    
    for (let i = 0; i < n.toString().length; i++) {
        nObj[n.toString()[i]] = nObj[n.toString()[i]] + 1 || 1;
    }
    
    for (let i = 0; i < m.toString().length; i++) {
        mObj[m.toString()[i]] = mObj[m.toString()[i]] + 1 || 1;
    }
    
    console.log(nObj, mObj)
    
    for (let key in nObj) {
        if (nObj[key] !== mObj[key]) {
            return false;
        }
        return true;
    }
    
}


//*******tests*******/
sameFrequency(182, 281)
//true
sameFrequency(34, 14)
//false
sameFrequency(3589578, 5879385)
//true
sameFrequency(22, 222)
//false