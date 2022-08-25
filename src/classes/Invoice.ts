// Classes...

export class Invoice {
    constructor(
        // This type of shortcut declaration only works if we're using access modifiers
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}