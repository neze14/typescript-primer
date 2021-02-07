const logger = (message: string) => {
    console.log(message)
}

export default logger;

export interface PersonData {
    firstName: string,
    lastName: string,
    gender: string,
    height?: any, //question mark here means optional
    hobbies: string[],
    birthday?: any, //question mark here means optional
    isAlive: boolean
}

export class Person{
    //declare property types
    firstName: string;
    lastName: string;
    gender: string;
    height: number;
    hobbies: string[];
    birthday: Date;
    isAlive: boolean;    

    constructor(personData: PersonData){ //expects parameter of type PersonData
        this.firstName = personData.firstName;
        this.lastName = personData.lastName;
        this.gender = personData.gender;
        this.height = personData.height;
        this.hobbies = personData.hobbies;
        this.birthday = personData.birthday;
        this.isAlive = personData.isAlive;
    }
};