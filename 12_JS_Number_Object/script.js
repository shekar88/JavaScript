//Min Number in JS
console.log(Number.MIN_SAFE_INTEGER);

//Max Number in JS
console.log(Number.MAX_SAFE_INTEGER);

//Positive Infinity
console.log(Number.POSITIVE_INFINITY);

//Negitive Infinity
console.log(Number.NEGATIVE_INFINITY);

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

//Parse Int     converting into integer
console.log(`\n`);
console.log('-----------parseInt()-------------');
let str = '780';
console.log(typeof str);
let myNum = Number.parseInt(str);
console.log(`${typeof str} => is converted to => ${typeof myNum}`);
str = '780.767';
myNum = Number.parseInt(str);
console.log(`${str} after parse int => ${myNum}`);
console.log('-----------parseFloat()-------------');
myNum = Number.parseFloat(str);
console.log(`${str} after parse float => ${myNum}`);

//toString      converting to String
console.log(`\n`);
console.log('-----------toString()-------------');
let myNumber = 7674080;
let numString = myNumber.toString();
console.log(`${myNumber} => is converted into => ${numString}`);
console.log(`${typeof myNumber} => is converted into => ${typeof numString}`);


//toFixed
console.log(`\n`);
console.log('-----------toFixed()-------------');
let amount = 780;
console.log(amount.toFixed(2));