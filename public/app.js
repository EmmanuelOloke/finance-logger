"use strict";
// Classes...
class Invoice {
    // readonly client: string;
    // private details: string;
    // amount: number;
    constructor(
    // This type of shortcut declaration only works if we're using access modifiers
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
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
