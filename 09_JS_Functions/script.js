// Display from 0 to 10 difference is 1
// let result = '';
// for(let i = 0; i <= 10; i++) {
//     result += `${i} `;
// }
// console.log(result);

function displayNumbers() {
    let result = '';
    for(let i = 0; i <= 10; i++) {
        result += `${i} `;
    }
    console.log(result);
}

displayNumbers();   //function execution

//display from 0 to custome number, difference is 1

function displayCustNumber(cust) {
    let result = '';
    for(let i = 0; i <= cust; i++) {
        result += `${i} `;
    }
    console.log(result);
}
displayCustNumber(20);


//display from starting to ending numbers, difference is 1
function displayStartEndFun(startNum, endNum) {
    let result = '';
    for(let i = startNum; i <= endNum; i++) {
        result += `${i} `;
    }
    console.log(result);
}

displayStartEndFun(10, 40);

//display from starting to ending numbers, difference is custom
function displayNum(startNum, endNum, increment) {
    let result = '';
    for(let i = startNum; i <= endNum; i += increment) {
        result += `${i} `;
    }
    console.log(result);
}
displayNum(10,30,5);


// let custNum = document.getElementById('cust-number');
// myCustNumFun(custNum);
// function myCustNumFun(custNum) {
//     let result = '';
//     for(let i = 0; i <= custNum; i++) {
//         result += `${i} `;
//     }
//     console.log(result);
//     // alert(`${result}`);
// }

//video 19

//Isolated function
//function without parameters   //normal function
function greet() {
    console.log('Good Morning');
}
greet();

//Function expression       //isolated function
let greetings = function() {
    console.log('Good Evening');
}

console.log(greetings);     // it returns function
greetings();                // its returns good evening

//function without return type
//function with parameters
let wishMe = function (name, age) {
    let message = `Hello ${name} you are ${age} yrs old`;
    console.log(message);
}
wishMe('chandu',30);    //Hello chandu you are 30 yrs old
wishMe(40,'chandu');    //Hello 40 you are chandu yrs old
wishMe('chandu,30');    //Hello chandu,30  you are undefined yrs old
wishMe('chandu');       //Hello chandu you are undefined yrs old
wishMe(40);             //Hello 40 you are undefined yrs old
// wishMe( ,40);           //Uncaught SyntaxError: Unexpected token ','
wishMe('',40);          //Hello  you are 40 yrs old
wishMe();               //Hello undefined you are undefined yrs old

//function with return type
let sum = function(a, b) {
    let result = 2*(a+b);
    return result;
};
let output = sum(10,20);
console.log(output);
document.getElementById('my-nums').innerHTML = output;

//Video 20

//function with an object as paramenter
let printObject = function (obj) {
    console.log(obj);
}
printObject({name : 'chandu', age : 30});

//OR
let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 33500
}
printObject(mobile);

//function with an array as a parameter
let printArray = function (arry) {
    let result = '';
    for(let index in arry) {
        result += `INDEX : ${index} => VALUE : ${arry[index]} \n`;
    }
    console.log(result);
}

printArray([10,20,30,40]);

//OR
let colors = ['white','green','black','purple'];
printArray(colors);

//function inside an object
let student = {
    firstName : 'shekar',
    lastName : 'chandra',
    fullName : function() {
        return 'Chandra Shekar';
    }
};
console.log(student);       //{firstName: "shekar", lastName: "chandra", fullName: ƒ}
console.log(student.firstName);     //shekar
console.log(student.lastName);      //chandra
console.log(student.fullName);      //ƒ () {return 'Chandra Shekar';}
console.log(student.fullName());    //Chandra Shekar

//by using 'this' keyword
let studentDet = {
    firstName : 'Chandra',
    lastName : 'Shekar',
    fullName : function() { 
        return `${this.firstName} ${this.lastName}`; 
    }
};
console.log(student.fullName());    //Chandra Shekar

//Nested Function
let outerFunction = function() {
    console.log('I am an outer function');
    let innerFunction = function() {
        console.log('I am an inner Function');
    }
}
outerFunction();        //I am an outer function

let outerFun = function() {
    //innerFunction();    //Error if you try to place here
    console.log('I am an outer function');
    let innerFunction = function() {
        console.log('I am an inner Function');
    }
    innerFunction();
}
outerFun();     //I am an outer function
                //I am an inner Function


//Twisted Function
let twistedFn =  function() {
    let name = 'chandu';
    let printStudent = function() {
        let student = {
            name : 'shekar',
            age : 30,
            course : 'cs'
        };
        return student;
    }
    return printStudent;
};
let innerFunt = twistedFn();
let studentObj = innerFunt();
console.log(studentObj);        //{name: "shekar", age: 30, course: "cs"}
console.log(studentObj.name);   //shekar

// Video 21

//Prepare chicken curry with fucntions

let glassBowl = function(rawChicken, masala) {
    //marinating the chicken
    let marinatedChicken = `MIXING : (${rawChicken} + ${masala})`;
    return marinatedChicken;
};

let coockingBowl = function(marinatedChicken, water) {
    //cooking logic
    let cookedChicken = `COOKING : (${marinatedChicken} + ${water})`;
    return cookedChicken;
};

let eatingPlate = function(cookedChicken, rice) {
  //Eating Logic
  let eating = `EATING (${cookedChicken} + ${rice})`;
  console.log(eating);  
};

let rawChicken = '3kg chicken';
let masala = 'Garlic, pepper, salt';
let marinatedChicken = glassBowl(rawChicken,masala);
let water = '1ltr water';
let cookedChicken = coockingBowl(marinatedChicken,water);
let rice = '1kg rice';
eatingPlate(cookedChicken,rice);

//output
//EATING (COOKING : (MIXING : (3kg chicken + Garlic, pepper, salt) + 1ltr water) + 1kg rice)