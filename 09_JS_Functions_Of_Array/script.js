/*
//Functions of Arrays
shift()		-> remove the first element from array
unshift()	-> add the first element to array
push()		-> add the element to the array at last
pop()		-> remove the last element from array
sort()		-> to sort the array in ascending order
reverse()	-> to reverse the array elements
splice()	-> to remove/ replace from the middle
split()		-> to split a string to an array
join()		-> to join the array elements to string
slice()		-> to create a new copy of an array
forEach()	-> to loop the array elements
find()		-> find exact element with condtion from array
filter()	-> to filter the array elements
*/

//shift()	-> remove the first element from array
console.log('-------shift()-----')
let technologies = ['html','css','javascript','jquey','bootstrap'];
console.log(technologies);
technologies.shift();
console.log(technologies);

//unshift()	-> add the first element to array
console.log('-------unshift()-----')
technologies = ['html','css','javascript','jquey','bootstrap'];
console.log(technologies);
technologies.unshift('nodejs');
console.log(technologies);

//push()	-> add the element to the array at last
console.log('-------push()-----')
technologies = ['html','css','javascript','jquey','bootstrap'];
console.log(technologies);
technologies.push('angular');
console.log(technologies);

//pop()		-> remove the last element from array
console.log('-------pop()-----')
technologies = ['html','css','javascript','jquey','bootstrap'];
console.log(technologies);
technologies.pop('');
console.log(technologies);

//sort()	-> to sort the array in ascending order
console.log('-------sort()-----')
technologies = ['html','css','javascript','jquey','bootstrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);

//reverse()	-> to reverse the array elements
console.log('-------reverse()-----')
technologies = ['html','css','javascript','jquey','bootstrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

//reverse order of elements
console.log('-----------sort() and reverse()-----------');
technologies = ['html','css','javascript','jquey','bootstrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);
technologies.reverse();
console.log(technologies);
//OR
technologies.sort().reverse();
console.log(technologies);

//splice()	-> to remove/ replace from the middle
/*
    splice(index) -> it removes all the elements from the given index
 */
console.log('-----------splice(index)-----------');
technologies = ['html','css','javascript','jquey','bootstrap'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);

    /*
        splice(index, no-of elements) -> it removes the given no of elements from the given index
    */
    console.log('-----------splice(index,no_of_elements)-----------');
    technologies = ['html','css','javascript','jquey','bootstrap'];
    console.log(technologies);      //["html", "css", "javascript", "jquey", "bootstrap"]
    technologies.splice(2,1);
    console.log(technologies);      //["html", "css", "jquey", "bootstrap"]

    /*
        splice(index, no-of elements, replace elements) -> it replaces the given element at given index
    */
    console.log('-------splice(index, noof-elements,replace-elements)-------');
    technologies = ['html','css','javascript','jquey','bootstrap'];
    console.log(technologies);
    technologies.splice(2,1,'Node js');
    console.log(technologies);              //["html", "css", "Node js", "jquey", "bootstrap"]
    technologies.splice(2,2,'Node js');
    console.log(technologies);              //["html", "css", "Node js", "bootstrap"]

//join()	-> to join the array elements to string
//its converts array to string
console.log('-----------join("spearator")-----------');
technologies = ['html','css','javascript','jquey','bootstrap'];
console.log(technologies);
let techString = technologies.join('-');
console.log(techString);

//split()	-> to split a string to an array
console.log('-----------split()-----------');
console.log(techString);
let newTechs = techString.split('-');
console.log(newTechs);

//slice()	-> to create a new copy of an array
console.log('-----------slice()---------');

//forEach()	-> to loop the array elements
console.log('-----------forEach()---------');
let colorsArr = ['white','black','silver','purple','blue','yellow'];
let result = '';
colorsArr.forEach(function(color) {
    result += `${color} `;
});
console.log(result);
//find()	-> find exact element with condtion from array
console.log('-----------find()---------');

//filter()	-> to filter the array elements
console.log('-----------filter()---------');
let allEmployees = [
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
let juniorEmployees = [];
for(let employee of allEmployees) {
    if(employee.age <= 30) {
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

let jrEmps = allEmployees.filter(function(employee) {
    return employee.age <= 30;
});
console.log(jrEmps);

//filter active employees : isActive : true by using filter
console.log('--------------filter()-------------');
let activeEmployee = [];
for(let employee of allEmployees) {
    if(employee.isActive) {
        activeEmployee.push(employee);
    }
}
console.log(activeEmployee);

let actEmp = allEmployees.filter(function(emp) {
    return emp.isActive;
});
console.log(actEmp);