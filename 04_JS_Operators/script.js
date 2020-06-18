/* 
JavaScript Operators

-> Assignment Operators : =
-> Arithmetic Operators : + - / * %
-> Short hand Math Operators : +=  -=  /=  *=
-> Conditional Operators :  <  >  <=  => !==
-> Unary Operators : ++   --
-> Logical Operators :  &&  ||  ^
-> Ternary Operator:    ?:
-> Equality Operators :   ==    ===
*/

//-> Assignment Operators : =
//To assign a value to variable/Identifier 
let assOper = 10;
console.log(assOper);

//-> Arithmetic Operators : + - / * %
let a = 10;
let b = 20;
console.log(`Sum of a = ${a} , b = ${b} is : ${a+b}`);
console.log(`Sub of a = ${a} , b = ${b} is : ${a-b}`);
console.log(`Div of a = ${a} , b = ${b} is : ${a/b}`);
console.log(`Muli of a = ${a} , b = ${b} is : ${a*b}`);
console.log(`Modul of a = ${a} , b = ${b} is : ${a%b}`);    //get the remider

//Let find the number is even or odd
let myNum = 12;
if(myNum % 2 === 0) {
    console.log(`${myNum} is an Even number`);
}
else {
    console.log(`${myNum} is an odd number`);
}

//-> Short hand Math Operators : +=  -=  /=  *=
let shorHandA = 20;
let shorHandB = 10;
let add = 10;
add = add + (shorHandA + shorHandB);
// or
add += (shorHandA + shorHandB);
console.log(add);   //40

// add = add - (shorHandA + shorHandB);
//or
// add -= (shorHandA + shorHandB);
console.log(add);   //-20

// add = add / (shorHandA + shorHandB);
//or
// add /= (shorHandA + shorHandB);
console.log(add);   //0.33

// add = add * (shorHandA + shorHandB);
//or
// add *= (shorHandA + shorHandB);
console.log(add);   //300

let d = 20;
let e = 20;
add = 0;
add += (d + e);
console.log(add); 
add = add - (d + e);

//-> Conditional Operators :  <  >  <=  => !==
let marks = 60;
if(marks < 35) {
    console.log(`You Failed the Exam ${marks}`);
}
// else if(marks >= 35 && marks < 50) {
else if(marks >= 35) {
    console.log(`You got 3rd Class in the Exam ${marks}`);
}
else if(marks >= 50) {
    console.log(`You got 2rd Class in the Exam ${marks}`);
}
else {
    console.log(`You got 1st Class in the Exam ${marks}`);
}


//-> Unary Operators : ++   --
let unOper = 10;
console.log(`The unary Operator value is ${unOper}`);
// unOper = unOper + 1;
//or
unOper += 1;
console.log(`The unary Operator value is ${unOper}`);
//or
unOper++;
console.log(`The unary Operator value is ${unOper}`);
//or
unOper--;
console.log(`The unary Operator value is ${unOper}`);

unOper-2;
console.log(`The unary Operator value is ${unOper}`);

//-> Logical Operators :  &&  ||  ^
let stuMarks = 70;
if(marks < 35) {
    console.log(`You Failed the Exam ${marks}`);
}
//else if(stuMarks >= 35 || stuMarks < 50) {
else if(stuMarks >= 35 && stuMarks < 50) {
    console.log(`You got 3rd Class in the Exam ${stuMarks}`);
}
else if(stuMarks >= 50 && stuMarks < 60) {
    console.log(`You got 2rd Class in the Exam ${stuMarks}`);
}
else {
    console.log(`You got 1st Class in the Exam ${stuMarks}`);
}

//Ex 2:
let inRealation = true;
let parentsAgreed = false;
if(inRealation && parentsAgreed) {
	console.log(`Get Marry soon`);
}
else {
    console.log('Wait until the parents Agreed');
}
//-> Ternary Operator:    ?:
/*
    syntax: (condtion) ? true : false;
*/

let ternaryOpe = 65;
let message = '';
(ternaryOpe <= 35) ? message = 'You failed the exam' : message = 'You cleared the Exam';
console.log(message);

//-> Equality Operators :   ==    ===
let equalToOperA = 10;
let equalToOperB = '10';
if(equalToOperA == equalToOperB) {
    console.log(`Both are equal ${typeof equalToOperA} == ${typeof equalToOperB} `);
}
else {
    console.log(`Both are not equal ${typeof equalToOperA} == ${typeof equalToOperB} `);
}

if(equalToOperA === equalToOperB) {
    console.log(`Both are equal ${typeof equalToOperA} === ${typeof equalToOperB}`);
}
else {
    console.log(`Both are not equal ${typeof equalToOperA} === ${typeof equalToOperB}`);
}