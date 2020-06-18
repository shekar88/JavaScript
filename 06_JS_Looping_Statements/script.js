/*
Conditional & Looping Statements
    01 if-else
    02 switch
    03 for loop
    04 while loop
    05 do-while loop
*/

// for loop
// for loop Example 1:  Display 0 to 10 difference is 1
for (let index = 0; index <= 10; index++) {
    console.log(index); 
    document.getElementById('test').innerHTML = `${index}`;   
}

let forLoopResult = '';
for(let i = 0; i <= 10; i++) {
    // forLoopResult = forLoopResult + i;
    // forLoopResult += i;           //short hand form
    // forLoopResult += `${i} `;     //0 1 2 3 4 5 6 7 8 9 10 
    // forLoopResult += `${i} ,`;    //0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,

    if(i <= 9) {                    //0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10
        forLoopResult += `${i} , `;
    }
    else {
        forLoopResult += `${i}`;
    }
}
console.log(forLoopResult);
document.getElementById('for-loop-result-1').innerHTML = `${forLoopResult}`;
function myForLoopFunEx1() {    
    document.getElementById('for-loop-result-1').innerHTML = `for Loop Example 1 Result -> ${forLoopResult}`;
}

/* for Loop Example 2: Display values from 20 to 0 difference is 2*/
forLopEx2Result = '';
for (let a = 20; a >= 0; a -= 2) {      //a = a-2
    //console.log(a);                   // display a in new line every time
    if(a > 0) {
        forLopEx2Result += `${a} , `;
    }
    else {
        forLopEx2Result += `${a}`;
    }
}
console.log(forLopEx2Result);
document.getElementById('for-loop-result-2').innerHTML = `${forLopEx2Result}`;
function myForLoopFunEx2() {    
    document.getElementById('for-loop-result-2').innerHTML = `for Loop Example 1 Result -> ${forLopEx2Result}`;
}

// Nested for loop
/*
*
* *
* * *
* * * *
* * * * *
*/

let noOfStars = 5;
let starRes = '';
for(let c = 1; c <= noOfStars; c++) {
    for(let d = 1; d <= c; d++) {
        starRes = starRes+`* `;
    }
    starRes = starRes+ `\n`;
}
console.log(starRes);

// Way 1
document.getElementById('pattern1').innerHTML = `${starRes}`;
document.getElementById('span-pattern1').innerHTML = `${starRes}`;

function backFun() {
    document.location='index.html';
}
/* 
1
12
123
1234
12345

*/

/*
1
22
333
4444
55555

*/

/*
12345
1234
123
12
1

*/

/*
55555
4444
333
22
1


*/

/*
1 1 1 1 1 
2 2 2 2 
3 3 3 
4 4 
5 
*/

/*
5 4 3 2 1 
5 4 3 2 
5 4 3 
5 4 
5
*/

/* --------------
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
----------------*/
// while loop
//do-while loop