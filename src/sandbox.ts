type StringORNum = string | number;
type ObjWithName = {name: string, uid: StringORNum};

// const logDetails = (uid: StringORNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }

// const greet = (user: ObjWithName) => {
//     console.log(`${user.name} says Hello`);
// }


// Function Signatures

//Example 1...
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

//Example 2...

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

//Example 3...
type person = { name: string; age: number}

let logDetails: (obj: person) => void;

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old!`)
}

logDetails({name: 'Emmanuel', age: 27});