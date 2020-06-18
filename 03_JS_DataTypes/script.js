/*
Datatypes
The type of data which we can assign to a variable
	01 Number -> any number (int, float, double ...)
	02 String -> any text data
	03 Boolean (true/false)
	04 undefined
	05 null
*/

//string
let employeeName = 'Chandra';
//ES5
console.log(employeeName);
console.log(typeof employeeName);

//right
let booleanName = 'ture';
console.log('type of '+ booleanName + ' is ' + typeof booleanName);

let booleanName1 = true;
console.log(booleanName1);

//ES6
let empName = 'Chandu';
console.log(`Value : ${empName} , Type : ${typeof empName}`);

//number
let empAge = 40;
console.log(`Value : ${empAge} , Type : ${typeof empAge}`);

//boolean
let isManager = true;
console.log(`Value : ${isManager} , Type : ${typeof isManager}`);

//undefined
//if you not assigne any value to the variable is Undefined
let undefinedVarable;       //variable Declaration
//ES5
console.log('no value assigned to variable -> ' + undefinedVarable);
//ES6
console.log(`Value : ${undefinedVarable} , Type : ${typeof undefinedVarable}`);

undefinedVarable = 'data_value'; //assignement of a variable
console.log('value assigned to variable -> ' + undefinedVarable);
//ES6
console.log(`Value : ${undefinedVarable} , Type : ${typeof undefinedVarable}`);

//null (dummy value)
let nullTest = null;
//ES5
console.log(nullTest);
//ES6
console.log(`Value : ${nullTest} , Type : ${typeof nullTest}`);

//Re-assignment is allowed
let abc;
console.log(`Value : ${abc} , Type : ${typeof abc}`);
abc = 'reassigned value';
console.log(`Value : ${abc} , Type : ${typeof abc}`);
abc = '10';
console.log(`Value : ${abc} , Type : ${typeof abc}`);
abc = 10;
console.log(`Value : ${abc} , Type : ${typeof abc}`);
abc = true;
console.log(`Value : ${abc} , Type : ${typeof abc}`);
abc = null;
console.log(`Value : ${abc} , Type : ${typeof abc}`);
abc = {};
console.log(`Value : ${abc} , Type : ${typeof abc}`);
