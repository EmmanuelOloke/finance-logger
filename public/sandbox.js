"use strict";
// const logDetails = (uid: StringORNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }
// const greet = (user: ObjWithName) => {
//     console.log(`${user.name} says Hello`);
// }
// Function Signatures
//Example 1...
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//Example 2...
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old!`);
};
logDetails({ name: 'Emmanuel', age: 27 });
