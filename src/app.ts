interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Emmanuel',
    age: 27,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent ', amount);
        return amount;
    }
}

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name);
}

greetPerson(me);
console.log(me);


import { Invoice } from './classes/Invoice.js';

const invoiceOne = new Invoice('Mindera', 'Frontend Work', 2000);
const invoiceTwo = new Invoice('EukaPay', 'Backend work', 2000);

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach((invoice) => {
    console.log(invoice.client, invoice.amount, invoice.format());
})


// TypeCasting
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//Inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
})