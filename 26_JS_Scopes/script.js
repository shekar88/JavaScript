//Scopes

// Example 1
let a = 10;         //global scope / parent scope
{                   //statement block
    let b = 20;     //local scope / child scope
    console.log(b);
}
// let a = 30;
console.log(a);
// console.log(b); //Uncaught ReferenceError: b is not defined

// Example 2
let c = 10;
{
    let c = 20;
    {
        let c = 30;
        {
            let c = 40;
            console.log(c);
        }
        console.log(c);
    }
    console.log(c);
}
console.log(c);

// Example 3
// block scope

let course = 'Engineering';
if(course === 'Engineering') {
    let dept = 'Software';
}
console.log(course);    //Engineering
// console.log(dept);  // Uncaught ReferenceError: dept is not defined

// Example 4
// Function
let greet = function() {
    let msg = 'Good morning';
};
greet();
// console.log(msg);       // script.js:45 Uncaught ReferenceError: msg is not defined

// Example 5
let greetings = function() {
    let msgs = 'Good Morning';
    return msgs;
};
let result = greetings();
console.log(result);        // Good Morning