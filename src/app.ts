import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

// TypeCasting
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//Inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List Template Instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
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

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {title: 'The Witch Movie'}
}

const docTwo: Resource<object> = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: {name: 'Sharon'}
}

console.log(docOne, docTwo);