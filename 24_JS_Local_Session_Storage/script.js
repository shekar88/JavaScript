// Local Storage from simple string
let empName = 'chandu';
//set data
localStorage.setItem('ename',empName);

//get data
console.log(localStorage.getItem('ename'));

//delete the key
localStorage.removeItem('ename');

//clear
localStorage.clear();

//local storage with an array(with object form)
let colors = [
    {id : 1, name : 'white'},
    {id : 2, name : 'black'},
    {id : 3, name : 'silver'},
    {id : 4, name : 'purple'},
    {id : 5, name : 'yellow'}
];
//set data
localStorage.setItem('sColor',JSON.stringify(colors));

console.log(localStorage.getItem('sColor'));
console.log(typeof localStorage.getItem('sColor'));

let theStoredColors = JSON.parse(localStorage.getItem('sColor'));
console.log(theStoredColors);

localStorage.removeItem('sColor');


//Session Storage with simple string
let studentName = 'shekar';
//set data
sessionStorage.setItem('stuName', studentName);

//get data
console.log(sessionStorage.getItem('stuName'));

//delete data
sessionStorage.removeItem('stuName');
sessionStorage.clear();

//Session Storage with an Array
let ssColors = [
    {id : 1, name : 'green'},
    {id : 2, name : 'pink'},
    {id : 3, name : 'red'},
    {id : 4, name : 'orange'}
];

//set data
sessionStorage.setItem('sessStorageColor',ssColors);
//[object Object],[object Object],[object Object],[object Object]
sessionStorage.setItem('sessStorageColor',JSON.stringify(ssColors));
//[{id: 1, name: "green"}, {id: 2, name: "pink"}, {id: 3, name: "red"}, {id: 4, name: "orange"}]

//get data
console.log(sessionStorage.getItem('sessStorageColor'));
//[{"id":1,"name":"green"},{"id":2,"name":"pink"},{"id":3,"name":"red"},{"id":4,"name":"orange"}]

theSessStorageColors = JSON.parse(sessionStorage.getItem('sessStorageColor'));
console.log(theSessStorageColors);

//delete data
sessionStorage.removeItem('sessStorageColor');
sessionStorage.clear();