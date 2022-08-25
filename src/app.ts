import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('Pope', 'Web design work', 1000);
// docTwo = new Payment('Dotun', 'DevOps work', 500);

// let docs: HasFormatter[] = [];

// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invoiceOne = new Invoice('Mindera', 'Frontend Work', 2000);
// const invoiceTwo = new Invoice('EukaPay', 'Backend work', 2000);

// let invoices: Invoice[] = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);

// invoices.forEach((invoice) => {
//     console.log(invoice.client, invoice.amount, invoice.format());
// })


// TypeCasting
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//Inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }


    console.log(doc);
})