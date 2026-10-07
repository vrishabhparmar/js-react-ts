/**
 * A higher-order function is a function that does one of the following:
 * 
 * 1. Takes another function as an argument.
 * 2. Returns another function as its result.
 */


const n = [1,2,3,4,5,6];

/**
 * arr.map((element, index, array) => {}
 * 
 * - element: It is a required parameter and holds the current element's value.
 * - index: It is an optional parameter and it holds the index of the current element.
 * - arr: It is an optional parameter and it holds the array.
 */

const sqr = n.map((num) => num * num);

console.log(sqr);


const numbers = [10, 20, 35, 50];

const differences = numbers.map((element, index, array) => {
    if (index === array.length - 1) {
        return null;
    }

    return array[index + 1] - element;
});

console.log(differences);


const ftr = n.filter((val) => val % 2 == 0);

console.log(ftr);

// The reduce function accumulates array elements into a single value based on a callback function.
const acc = n.reduce((acc, curr) => acc + curr);

console.log(acc);

n.forEach(v => console.log(v));

// The find function returns the first element in the array that satisfies a given condition.
const element = n.find(v => v % 2 == 0); // 

console.log(element);

// 
const hasNeg = n.some((num) => num < 0);


// every

const checkIfEven = n.every((num) => num % 2 == 0);
console.log(checkIfEven);






