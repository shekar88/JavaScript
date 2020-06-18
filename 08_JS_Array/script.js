//Creation of an arry
let a = 10;
let b = 20;
let c = 30;

let numbersArry = [10, 20, 30];
console.log(numbersArry);
console.log(typeof numbersArry);

//Access the elements of an array
// console.log(numbersArry['0']);
//OR
console.log(numbersArry[0]);        //10
console.log(numbersArry[1]);        //20
console.log(numbersArry[2]);        //30

//Access the non-existing
console.log(numbersArry[3]);        //undefined

//Iteration of array elements
let colorsArr = ['white','black','silver','purple','blue','yellow'];
let res = '';
// 1. Normal for-loop
for(let i = 0; i <= colorsArr.length-1; i++) {
    res += `${colorsArr[i]} `;
}
console.log(`${res}`);

// 2. for-in loop upto ES5
res = '';
for(let index in colorsArr) {
    res += ``;
    console.log(index);                     //0 1 2 3 4 5
    console.log(colorsArr[index]);         //white black silver purple blue yellow

}
//ES6
for(let a of colorsArr) {
    console.log(a);         //0 1 2 3 4 5
    
}

// 3. for-of loop from ES6
res = '';
for(let colur of colorsArr) {
    res += `${colur} `;
}
console.log(res);

// 4. forEach function upto ES5
result = '';
colorsArr.forEach(function(colur) {
    result += `${colur} `;
});
console.log(result);

// 5. forEach with Arrow function from ES6
result = '';
colorsArr.forEach(color =>  result += `${color} ` );
//OR
// colorsArr.forEach((color) => { result += `${color} `; });
console.log(result);
document.getElementById('demo').innerHTML = result;

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
//Access all employess
console.log(employees);

//Iterate employees
result = '';
for(let employee of employees) {
    // console.log(employees);
    // console.log(employee.name);
    result += `${employee.name} `;
}
console.log(result);

//filter the junior employees : age <=30
// console.log(employees);

let juniorEmployees = [];
for(let employee of employees) {
    if(employee.age <= 30) {
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

//Filter active employees : isActive : ture
let activeEmployees = [];
for(let employee of employees) {
    if(employee.isActive) {
        activeEmployees.push(employee);
    }
}
console.log(activeEmployees);

//Video 22
