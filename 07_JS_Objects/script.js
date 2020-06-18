// let cameraBrand = 'Canon';
// let cameraPrice = 35000;
// let cameraColor = 'Black';

//lets group the all variables in one
let camera = {
    brand : 'Canon',
    price : 35000,
    color : 'Black',
    mfg : 2019
};

console.log(camera);

//Access the properties of an object
console.log(camera.brand);

//Access the non-existing property
console.log(camera.megaPixel);      //undefined

//Access the properties using do and [] notation
console.log(camera.price);      //35000
console.log(camera['price']);   //35000
// console.log(camera[price]);   //Error

//for dynamic properites dot, [] notation
let prop = 'color';
console.log(camera.prop);       //undefined
console.log(camera[prop]);      //Black

//Nested Object
let student = {
    name : 'Chandra Shekar',
    age : 23,
    course : CSSConditionRule,
    address : {
        street : 'Jubilee Hills',
        city : 'Hyderabad',
        state : 'TS'
    }
};

//access object
console.log(student);

//access nested object
console.log(student.address);

//Access the properties of an nested object
console.log(student.address.street);

//CURD Operations with ab Object

//CREATE Operation
let mobile = {};
//adding properties to object
mobile.brand = 'Apple';
mobile.color = 'Silver';
mobile.price = 35000;
mobile.isInsured = false;
console.log(mobile);

//READ Operation
console.log(mobile.brand);      //Apple

//UPDATE operation
console.log(mobile.price);      //35000

mobile.price = 45000;
console.log(mobile.price);      //45000

//DELETE Operation
console.log(mobile);
delete mobile.isInsured;
console.log(mobile);