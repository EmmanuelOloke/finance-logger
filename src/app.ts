
// Classes...

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(client: string, details: string, amount: number) {
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

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoiceOne.client = 'Google';
invoiceTwo.amount = 5000;
console.log(invoices)


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