import { Person } from "../Person/Person";
import { Employee } from "../Employee/Employee";

export class Customer extends Person, extends Employee {
    constructor(firstName,lastName,age,location) {
        super(firstName,lastName);
        this.age = age;
        this.location = location;
    }

    getAge() {
        return this.age;
    }
    getLocation() {
        return this.location;
    }
    greet() {
        let msg = `Welcome Mr. ${this.getFirstName()} ${this.getLastName}
                   Age : ${this.getAge()}
                   Location : ${this.getLocation()}`;
        console.log(msg);
    }
}