// Template Strings (`) back tick operator
let mobile = {
    brand : 'Apple',
    color : 'black',
    price : 35000
};
// ES5
let msgEs5 = "BRAND :"+ mobile.brand + " Color " + mobile.color + " Price " + mobile.price;
console.log(msgEs5);

//ES6
let msgEs6 = `Brand : ${mobile.brand} Color : ${mobile.color} Price : ${mobile.price}`;
console.log(msgEs6);

let templateEs5 = "<ul>" +
                    "<li>" + mobile.brand + "</li>"+
                    "<li>" + mobile.color + "</li>"+
                    "<li>" + mobile.price + "</li>"+
                  "</ul>";
document.write(templateEs5);

let templateEs6 = `<ul>
                        <li>${mobile.brand}</li>
                        <li>${mobile.color}</li>
                        <li>${mobile.price}</li>
                  </ul>`;
document.write(templateEs6);

// Video 49
// Optional Parameters
// Example 1
let greet = function(name, age = 35) {
  let msg = `Hello ${name} and your age ${age} years Old`;
  console.log(msg);
};
greet('chandu',45);

// Example 2
let printNumber =  function(start, end=10) {
  let result = '';
  for(let i = start; i <= end; i++) {
    result += `${i} `;
  }
  console.log(result);
};
printNumber(1,10);
printNumber(1);

// Video 50
/* 
Function Type 
1. Normal Function
2. Function Expression 
3. Arrow Function
*/

// 1. Normal Function
let resultNF = '';
function printNumberNormalFun() {
  let msg = '';
  for(i = 0; i<=10; i++) {
    msg += `${i} `;
  }
  return msg;
}
resultNF = printNumberNormalFun();
console.log(resultNF);

// 2. Function Expression
let resultFE = '';
let printNumFunctionExpression = function() {
  let msg = '';
  for(let i = 1; i<=10; i++) {
    msg += `${i} `;
  }
  return msg;
}
resultFE = printNumFunctionExpression();
console.log(resultFE);

// 3. Arrow Functions
let resultArrow = '';
let printNumArrowFun = () => {
  let msg = '';
  for(let i=0; i<=20;i++) {
    msg += `${i} `;
  }
  return msg;
};
resultArrow = printNumArrowFun();
console.log(resultArrow);

// usage of Arrow Function
//Array of objects
let employees = [
  {
      id: 1,
      name : 'chandu',
      age : 30,
      designation : 'Manager',
      isActive : true
  },
  {
      id: 2,
      name : 'shekar',
      age : 24,
      designation : 'SE',
      isActive : true
  },
  {
      id: 3,
      name : 'chandra',
      age : 20,
      designation : 'Sr.Egg',
      isActive : false
  },
  {
      id: 4,
      name : 'shekhar',
      age : 32,
      designation : 'LT',
      isActive : true
  },
  {
      id: 5,
      name : 'chandrashekar',
      age : 31,
      designation : 'SE',
      isActive : true
  }
];

//get the Junior Employess
let juniorEmployess = employees.filter(function(emp) {
  return emp.age < 30;
});
console.log(juniorEmployess);

// Junior Employees with Arrow Function
let jrEmployees = employees.filter((employ) => {
  return employ.age <= 30;
});
console.log(jrEmployees);
//or
let junEmp = employees.filter(employee => employee.age <= 30);
console.log(junEmp);


//Limitation of Arrow function
let student = {
  firstName : 'Chandu',
  lastName : 'Shekar',
  fullName : function() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(student.fullName());

let myStudnent = {
  firstName : 'Vijay',
  lastName : 'Shekar',
  fullName : () => {
    // return `${this.firstName} ${this.lastName}`;
    //dont use this keyword here it will not recigioze
    return `${myStudnent.firstName} ${myStudnent.lastName}`;
  }
};
console.log(myStudnent.fullName());

// Video 51

// For-Of Loops Concept
//here we need employees array
//Array of objects
let emp = [
  {
      id: 1,
      name : 'chandu',
      age : 30,
      designation : 'Manager',
      isActive : true
  },
  {
      id: 2,
      name : 'vijay',
      age : 24,
      designation : 'SE',
      isActive : true
  },
  {
      id: 3,
      name : 'kavi',
      age : 20,
      designation : 'Sr.Egg',
      isActive : false
  },
  {
      id: 4,
      name : 'munna',
      age : 32,
      designation : 'LT',
      isActive : true
  },
  {
      id: 5,
      name : 'malli',
      age : 31,
      designation : 'SE',
      isActive : true
  }
];

// Normal For loop //ES5
console.log('\n--- for Loop ES5---');
let resultForLoop = '';
for(let i = 0; i <= emp.length-1; i++) {
  let employeeForLoop = emp[i];
  resultForLoop += `${employeeForLoop.name.toUpperCase()} `;
}
console.log(resultForLoop);

//for-in loop up to ES5
console.log('\n--- For in Loop ES5---');
let resultForInLoop  = '';
for(let index in emp) {
  let empForInLoop = emp[index];
  resultForInLoop += `${empForInLoop.name.toUpperCase()} `;
}
console.log(resultForInLoop);

//forEach function ES5
console.log('\n--- forEach Loop ES5---');
let resultForEachLoop = '';
emp.forEach(function(employee) {
  resultForEachLoop += `${employee.name.toUpperCase()} `;
});
console.log(resultForEachLoop);

//for-of Loop of ES6
console.log('\n--- for of Loop ES6---');
let resultForOfLoop = '';
for(let empl of emp) {
  resultForOfLoop += `${empl.name.toUpperCase()} `;
}
console.log(resultForOfLoop);

//forEach function with Arrow function ES6
console.log('\n--- forEach Loop with Arrow Function ES6---');
let resultForEachLoopArow = '';
emp.forEach((employee) => {
  resultForEachLoopArow += `${employee.name.toUpperCase()} `;
});
console.log(resultForEachLoopArow);

// Video 52

// Destructuring Concepts

let myDescrArray = {
  name : 'Chandrashekar',
  age : 30,
  course : 'SE',
  address : {
    street : 'Hitech City',
    city : 'Hyderabad',
    state : 'TS'
  },
  hobbies : {
    regular : {
      id : 1,
      regHobbies : ['Reading Books', 'Playing Cricket']
    },
    occasional : {
      id : 1,
      occHobbies : ['Cooking', 'Movie Collection']
    }
  }
};
console.log(myDescrArray);

// Destructuring 
let {street, city, state} = myDescrArray.address;
console.log(`${street}`);

//Regular Hobbies
let {regHobbies} = myDescrArray.hobbies.regular;
console.log(regHobbies);

// Video 53

// Spread Operator Concept(...)

let numbersArray = [10,50,39,40,42,44,34,53,32,46,36];
let min = Math.min(numbersArray);   //NaN
console.log(min);
min = Math.min(...numbersArray);    //10
console.log(min);

let colorsArray1 = ['white','black','blue','red','green'];
let colorsArray2 = ['yellow','silver','orange'];
let colorArray = [];
for(let color of colorsArray1) {
  colorArray.push(color);
}
console.log(colorArray);
for(let color of colorsArray2) {
  colorArray.push(color);
}
console.log(colorArray);

//OR
let colArr = [...colorsArray1, ...colorsArray2];
console.log(colArr);
