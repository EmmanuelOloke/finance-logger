const me = {
    name: 'Emmanuel',
    age: 27,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
console.log(me);
import { Invoice } from './classes/Invoice.js';
const invoiceOne = new Invoice('Mindera', 'Frontend Work', 2000);
const invoiceTwo = new Invoice('EukaPay', 'Backend work', 2000);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach((invoice) => {
    console.log(invoice.client, invoice.amount, invoice.format());
});
// TypeCasting
const form = document.querySelector('.new-item-form');
//Inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
