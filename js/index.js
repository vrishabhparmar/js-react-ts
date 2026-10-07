// Variables

var n = 5; // The var keyword is used to declare a variable. It has a function-scoped or globally-scoped behaviour.

var n = 20; // reasssiging is allowed

let m = 10; // The let keyword is introduced in ES6, has block scope and cannot be re-declared in the same scope.

// const n = 20; // The const keyword declares variables that cannot be reassigned. It's block-scoped as well.

/**
 * Alternate elements of an array
 */

const arr = [10,20,30,40,50]

function getAlternate(arr){
    let res = []

    // Iterate over all the elements 
    for(let i = 0; i < arr.length; i+=2)
    {
        res.push(arr[i]);
    }

    return res;
}

/**
 * Largest Number
 */
let max = 0

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] > max)
    {
        max = arr[i];
    }
}

console.log(max);

/**
 * Second Largest Number
 */

const arr2 = [12, 35, 1, 10, 34, 1]

// arr2.sort((a,b) => a - b);

function getSecondLargest(arr) {
    const n = arr.length;
    let largest = -1, second_largest = -1;

    for(let i = 0; i < n; i++)
    {
        // if element is greater than largest than 
        // set the element as largest 
        // and second_largest as the largest
        if(arr[i] > largest)
        {
            second_largest = largest;
            largest = arr[i];
        }
        else 
        {
            // element is not greater than largest then check if it is greater than second_largest
            if(largest > arr[i] && arr[i] > second_largest)
            {
                second_largest = arr[i];
            }
        }
    }

    return second_largest;

}

console.log(getSecondLargest(arr2));

/**
 * Remove duplicates from Sorted Array

 */

const arr3 = [1, 2, 2, 3, 4, 4, 4, 5, 5];

// Approach 1

function removeDuplicates(arr)
{
    let set = new Set(arr);

    // Put the set elements into a result array
    return Array.from(set).sort((a,b) => a - b);
}

console.log(removeDuplicates(arr3));

// Approch 2

function removeDuplicates2(arr)
{
    let n = arr.length;

    const res = []

    res.push(arr[0]);

    // Since the array is sorted we can simply check the consecutive elements if they are similar

    for(let i = 1; i < n ; i++)
    {
        if(arr[i - 1] != arr[i])
        {
            res.push(arr[i]);
        }
    }

    return res;
}

console.log(removeDuplicates2(arr3));


// Sort an array of objects

const users = [
    { name: "A", age: 30 },
    { name: "B", age: 20 }
  ];

console.log(users);

users.sort((a,b) => a.age - b.age);

console.log(users);

/**
 * Anonymous Function Expression: The function has no name and is typically assigned to a variable.
 */

const sum = function (a,b){return a + b;}
const sum2 = (a,b) => a + b;

console.log(sum(1,2))

/**
 * Named Function Expression: The function is given a name, which is useful for recursion or debugging.
 */

const factorial = function fact(n) {
    if (n === 0) return 1;
    return n * fact(n - 1);
};
console.log(factorial(5));

/**
 * Callback functions are functions passed as arguments to other functions and 
 * are executed later when needed.

 */

setTimeout(()=> console.log('This message appears after 3 seconds'), 3000);

/**
 * Event Handlers
 * Function expressions are useful for event listeners because 
 * they allow you to define a function directly where it is needed.
 */

// document.querySelector("button").addEventListener("click", function() {
//     console.log("Button clicked!");
// });

/**
 * Self-Invoking Functions
 */

(()=> console.log("I am a self invoking function"))();


function counter(){
    let count = 0; // inner variable cannot be accessed outside the scope

    return function(){
        ++counter;
        return count;
    }

}


const counterFunc = counter();

console.log(counterFunc());


{
    
    // Var can Accessible inside & outside the block scope 
    var x = 10;
    
    // let , const Accessible only inside the block scope
    const y = 20;
    let z = 30;
    
    console.log(x);
    console.log(y);
    console.log(z);
}

console.log(x);












