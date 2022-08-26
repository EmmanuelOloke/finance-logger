import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// TypeCasting
const form = document.querySelector('.new-item-form');
//Inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List Template Instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS...
// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }
// let docOne = addUID({name: 'Emmanuel', age: '27'});
// console.log(docOne.name);
// GENERICS with INTERFACES
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: {name: 'Obianuju'}
// }
// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'shoppingList',
//     data: ['bread', 'milk', 'toilet roll']
// }
// console.log(docThree, docFour);
// ENUMS...
// enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
// interface Resource<T> {
//     uid: number;
//     resourceType: ResourceType;
//     data: T;
// }
// const docOne: Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.BOOK,
//     data: {title: 'The Witch Movie'}
// }
// const docTwo: Resource<object> = {
//     uid: 10,
//     resourceType: ResourceType.PERSON,
//     data: {name: 'Sharon'}
// }
// console.log(docOne, docTwo);
// TUPLES...
// With Tuples, once we declare a position with a certain type, we cannot change it later.
let arr = ['rio', 2, true];
arr[0] = false;
arr[1] = 'sharon',
    arr = [25, false, 'pope'];
let tup = ['pope', 27, true];
tup[0] = 'false';
let student;
student = ['peter', 56];
