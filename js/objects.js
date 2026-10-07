// Objects 
//  Creation Using Object Literal

let obj = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};
console.log(obj);


// Creation Using new Object() Constructor
let obj2 = new Object();
obj2.name= "Sourav",
obj2.age= 23,
obj2.job= "Developer"

console.log(obj2);

// Modifying Object Properties

obj2.name = "Vrishabh"

console.log(obj2);

// Adding properties to the obj

obj2.color = "Blue"

console.log(obj2);

// Remove Property
delete obj2.color;

console.log(obj2);

// checking if a property exists

console.log(obj2.hasOwnProperty("model"))

// Iterating throught objects 
for(let key in obj2)
{
    console.log(key + " " + obj2[key])
}

// Merging 
let obj3 = { name: "Sourav" };
let obj4 = { age: 23};

let obj5 = { ...obj3, ...obj4 };
console.log(obj5);

// Object Length

console.log(Object.keys(obj).length);

// Recognizing a JavaScript Object

console.log(typeof obj === "object" && obj !== null);


/**
 * Constructor
 */

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    };
}

//Creating Instances with a Constructor
const p1 = new Person("Akash", 30);
const p2 = new Person("Anvesh", 25);

p1.sayHello();
p2.sayHello();





