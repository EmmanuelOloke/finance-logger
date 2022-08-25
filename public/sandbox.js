"use strict";
let greet;
greet = () => {
    console.log("Hello, again!");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(30, 10, 'chief');
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
