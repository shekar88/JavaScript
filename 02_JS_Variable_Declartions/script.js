/*
    let -> keyword to declare a variable
    a -> variable name/ reference variable / inditifier
    = -> assignment operator
    10 -> value / data
    ; -> end of the statement
*/

let a = 10;
let b = 20;
let sum = a + b;
console.log(sum);

console.log('The Sum of a , b is sum');

console.log('The Sum of a , b is : ' + sum);

//ES5 
console.log('The Sum of ' + a + ' , ' + b + ' is : ' + sum);

//ES6 -> Template String / Template Literal (``) back tick

console.log(`The Sum of ${a} , ${b} is : ${sum}`);

//Rules in Declaring variables
let name = 'chandu';
console.log(`${typeof name}`);
// let name = 'shekar';    //getting error for re-declartion
name='chandu';
name='shekar';
console.log(name);
console.log(Name);