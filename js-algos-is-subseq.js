//Write a function call isSubsequence which takes in two strings and checks whether the characters in the first string appear somewhere in the second string, without their order changing.


function isSubsequence(n, m) {
    if (m.length < n.length) return false;
    
    let i = 0
    let j = 0
    
    while (j < m.length) {
        if (n[i] === m[j]) {
            i++
        } else {
            if (i === n.length) {
                return true;
            }
            j++
        }
    }
    return false;
  }


//*******tests*******/
isSubsequence('hello', 'hello world')
//true
isSubsequence('sing', 'sting')
//true
isSubsequence('abc', 'abracadabra')
//true
isSubsequence('abc', 'acb')
//false (order matters)