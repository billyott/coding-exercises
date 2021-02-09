//1) Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents 

//Math.pow(base, exponent)

function power(base,exp){
    if(exp === 0) return 1;
    if(exp === 1) return base;
    return base * power(base, exp-1);
}

//******tests******
// power(2,0)
// //1
// power(2,2)
// //4
// power(2,4)
// //16


//2) Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an int and all the ins below it; e.g. factorial four (4!) is equal to 24 because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.

function factorial(num){
    if (num === 0) return 1;
    if (num === 1) return num;
    return num * factorial(num-1);
}

//******tests******
// factorial(1) 
// // 1
// factorial(2) 
// // 2
// factorial(4) 
// // 24
// factorial(7) 
// // 5040


//3) Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
    if (arr.length === 0) return null;
    if (arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1));
}

//******tests******
// productOfArray([1,2,3])
// // 6
// productOfArray([1,2,3,10]) 
// // 60


//4) Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num){
    if (num === 1) return 1;
    return num + recursiveRange(num-1);
}

//*****tests*****
// recursiveRange(6) 
// // 21
// recursiveRange(10) 
// // 55 

//5) Write a recursive function called fib which accepts a number and returns the nth number in the fibonacci sequence. Recall that the fibonacci sequence is the sequence of whole numbers 1, 2, 3, 5, 8, ...which starts with 1 and 1, and where every number thereafter is a equal to the sum of the previous two numbers.


function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

//*****tests*****
// fib(4) 
// // 3
// fib(10) 
// // 55
// fib(28) 
// // 317811
// fib(35) 
// // 9227465
