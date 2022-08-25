let greet: Function;

greet = () => {
    console.log("Hello, again!")
}

const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a+b);
    console.log(c);
}

add(30, 10, 'chief');

const minus = (a: number, b: number) => {
    return a - b;
}

let result = minus(10, 7);