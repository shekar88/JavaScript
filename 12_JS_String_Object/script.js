//String Related Operations
let msg = String('Good Morning');

//finding Lenght of a String
console.log(`${msg} -> length is => ${msg.length}`);

//converting into LowerCase
console.log(msg.toLowerCase());

//uppercase
console.log(msg.toUpperCase());

//substr(start index, no of chars)
console.log(msg.substr(0,4));   //Good
console.log(msg.substr(5,7));   //Morning
console.log(msg.substr(3));     //d Morning

//charAt get the character given index
console.log(msg.charAt(5));     //M

//charCodeAt (ASCII)
msg = String('A');
console.log(msg.charCodeAt(0)); //77
msg = 'a';
console.log(msg.charCodeAt(0)); //77

//JSON Object
/* 
    Convert String to Object
    String to Object    : parse()
    Object ot String    : stringify()
*/

let student = {
    name : 'Chandu',
    age : 30,
    course : 'CSE',
    college : 'IIT Hyderabad'
};
console.log(student);

//Object to String
let studentStr = JSON.stringify(student);
console.log(`-> Object to String => \n ${studentStr}`);

//String to Object
let strToObjStudent = JSON.parse(studentStr);
console.log(`-> String to Object => \n`);
console.log(strToObjStudent);