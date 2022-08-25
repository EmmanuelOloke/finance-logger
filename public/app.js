"use strict";
// Classes...
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice('Mindera', 'Software Engineering Work', 2000);
const invoiceTwo = new Invoice('EukaPay', 'Backend work', 2000);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoiceOne.client = 'Google';
invoiceTwo.amount = 5000;
console.log(invoices);
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
