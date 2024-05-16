//Interfaces
/*
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;

}

const me: IsPerson = {
    name: "Tultul",
    age: 33,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent ', amount);
        return amount;
    }
};

const greetPerson = (person: IsPerson) => {
    console.log('Assalamu Alaikum', person.name);
}
greetPerson(me);

console.log(me);
*/
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
/*
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Vercetti', 'business work', 950);
docTwo = new Payment('Cipriani', 'restaurant work', 300);
let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice('Abdul-Halim', 'work on the Restaurant Website', 340);
const invTwo = new Invoice('Abdul-Mujib', 'work on the 1971 Website', 330);
//console.log(invOne, invTwo);
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    
    console.log(inv.client, inv.amount, inv.format());
});
//console.log(invoices);
//invOne.client = 'Megaman';
//invTwo.amount = 400
//console.log(invOne, invTwo);
*/
const form = document.querySelector('.new-item-form');
//const form = document.querySelector('form')!;
//const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);
//Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    //console.log(doc)
    list.render(doc, type.value, 'end');
});
/*//GENERICS

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'Michaela', age: 32});
console.log(docOne.age);
//console.log(docOne.name);


//with interfaces
interface Resource<T> {
 uid: number;
 resourceName: string;
 data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: {name: 'Rohan'}
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'groceryList',
    data: ['bread', 'milk', 'toilet roll']
}

console.log(docThree, docFour);
*/
//tuples
let arr = ['Kyo', 45, true];
arr[0] = false;
arr[1] = 'Iori';
arr = [45, false, 'Iori'];
let tup = ['Kyo', 45, true];
tup[0] = 'Iori';
tup[1] = 45;
let student;
student = ['Shingo', 3285645];
