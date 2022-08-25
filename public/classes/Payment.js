export class Payment {
    constructor(
    // This type of shortcut declaration only works if we're using access modifiers
    recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
