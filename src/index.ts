/*
let firstName: string = "Chineze";

console.log(firstName);

let count: number = 10;

firstName = "Paul";

console.log(firstName);

count = 5;
*/

export class Person{
    //declare property types
    firstName: string;
    lastName: string;
    gender: string;
    height: number;
    hobbies: string[];
    birthday: Date;
    isAlive: boolean; 

    constructor(firstName: string, lastName: string, gender: string, height: number, 
        hobbies: string[], birthday: Date, isAlive: boolean){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
        this.hobbies = hobbies;
        this.birthday = birthday;
        this.isAlive = isAlive;
    }
};

//Accessing object properties
const firstName: string = "Pius";
const lastName:string = "Onobhayedo";
const gender: string = "male";
const height: number = 1.7;
const hobbies: string[] = ['Tennis','Programming'];
const birthday: Date = new Date(1900,4,5);
const isAlive: boolean = true;

const person1 = new Person(firstName, lastName, gender, height, 
    hobbies, birthday, isAlive)

console.log(`Person 1 is ${person1.firstName} whose height is ${person1.height} 
    and birthday is $ {person1.birthday.toLocaleDateString()} and hobbies are ${person1.hobbies}. `);