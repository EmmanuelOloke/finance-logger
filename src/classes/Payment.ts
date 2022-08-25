// Classes with Interface...
import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
    constructor(
        // This type of shortcut declaration only works if we're using access modifiers
        readonly recipient: string,
        private details: string,
        public amount: number
    ) {}

    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}