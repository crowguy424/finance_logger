import { HasFormatter } from '../interfaces/HasFormatter.js'
//classes
export class Invoice implements HasFormatter {
    //readonly client: string;
    //private details: string;
    //public amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) { }

    format() {

        return `${this.client} owes USD${this.amount} for ${this.details} `;

    }
}