/*
Parent class / base class
Person

chlid class

*/

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    greet() {
        let msg = `Welcome Mr: ${this.getFirstName()} ${this.getLastName()}`;
        console.log(msg);
    }
}

//chlid class
class Employee extends Person{
    constructor(firstName,lastName,age,designation) {
        super(firstName, lastName);
        this.age = age;
        this.designation = designation;
    }

    getAge() {
        return this.age;
    }
    getDesignation() {
        return this.designation;
    }
    greet() {   //Override the parent
        let msg = `Hello Mr: ${this.getFirstName()} ${this.getLastName()} 
                   Age : ${this.getAge()} 
                   Designation : ${this.getDesignation()}`;
        console.log(msg);
    }
}

let employee = new Employee('Chandra','Shekar', 40, 'Software Engineer');
employee.greet();

class Customer extends Person {
    constructor(firstName,lastName,age, location) {
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

    greet() {   //Override the parent
        let msg = `Hello Mr: ${this.getFirstName()} ${this.getLastName()} 
                   Age : ${this.getAge()} 
                   Location : ${this.getLocation()}`;
        console.log(msg);
    }
}

let customer = new Customer('Vijay', 'Shekar', 30, 'hyderabad');
customer.greet();