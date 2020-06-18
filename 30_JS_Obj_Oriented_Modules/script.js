// import { Person } from "./Person/Person.js"
import { Employee } from "./Employee/Employee.js";
import { Customer } from "./Customer/Customer.js";

let employee = new Employee('Chandra', 'Shekar', 30, 'SE');
employee.greet();

let customer = new Customer('Vijay','Shekar', 24, 'Hyderabad');
customer.greet();