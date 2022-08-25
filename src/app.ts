
// Classes...

class Invoice {
    // readonly client: string;
    // private details: string;
    // amount: number;

    constructor(
        // This type of shortcut declaration only works if we're using access modifiers
        readonly client: string,
        private details: string,
        public amount: number
    ) {
        
    }

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}

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