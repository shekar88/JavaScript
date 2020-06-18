//while loop

// display values form 0 to 1 difference is 1

let result = '';
let i = 0;
while(i <= 10) {
    // console.log(i);
    if(i <= 9) {
        result += `${i} , `;    //0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10
        // or
        // result = result + `${i} `;  //0 1 2 3 4 5 6 7 8 9 10
    }
    else {
        result += `${i}`;
    }
    i++;
}
console.log(result);

// Example 2:
// Display Values form 20 to 0 diffrence is 2
result = '';
i = 20;
while(i >= 0) {
    if(i > 0) {
        result += `${i} , `;    //20 , 18 , 16 , 14 , 12 , 10 , 8 , 6 , 4 , 2 , 0 
    }
    else {
        result += `${i} `;
    }
    i -= 2;
}
console.log(result);
console.log('pattern');

//nested while loop

/*
*
* *
* * *
* * * *
* * * * *
*/
let num = 5;
result = '';
i = 1;
while(i <= num) {
    let j = 1;
    while( j <= i) {
        result += `* `;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);
console.log('next pattern');
/* 
1
12
123
1234
12345

*/

num = 5;
result = '';
i = 1;
while(i <= num) {
    let j = 1;
    while( j <= i) {
        result += `${j} `;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);
console.log('next pattern');

/*
1
22
333
4444
55555

*/

num = 5;
i = 1;
result = '';
while(i <= num) {
    let j = 1;
    while(j <= i) {
        result += `${i} `;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);
console.log('next pattern');

/*
12345
1234
123
12
1
*/

num = 1;
i = 5;
result = '';
while(i >= num) {
    let j = 1;
    while(j <= i) {
        result += `${j} `;
        j++;
    }
    result += `\n`;
    i--;
}
console.log(result);
console.log('next pattern');
/*
55555
4444
333
22
1
*/

num = 1;
i = 5;
result = '';
while(i >= num) {
    let j = 1;
    while(j <= i) {
        result += `${i} `;
        j++;
    }
    result += `\n`;
    i--;
}
console.log(result);
console.log('next pattern');
/*
1 1 1 1 1 
2 2 2 2 
3 3 3 
4 4 
5 
*/
num = 5;
i = 1;
result = '';
while(i <= num) {
    let j = 5;
    while(j >= i) {
        result += `${i} `;
        j--;
    }
    result += `\n`;
    i++;
}
console.log(result);
console.log('next pattern');

/*
5 4 3 2 1 
5 4 3 2 
5 4 3 
5 4 
5
*/
num = 5;
i = 1;
result = '';
while(i <= 5) {
    let j = 5;
    while(j >= i) {
        result += `${j} `;
        j--;
    }
    result += `\n`;
    i++;
}
console.log(result);
console.log('next pattern');


/*
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
*/
let a, b, n, str;
str = '';
n =5;
a = 1;
while(a <= n) {
    b = 1;
    while(b <= n) {
        if(a+b > n) {
            str = str+`* `;
        }
        else {
            str = str+' ';
        }
        b++;
    }
    a++;
    str = str+ `\n`;
}
console.log(str);
console.log('next pattern');

/* ----------
        *
       **
      ***
     ****
    *****
-----------*/
num = 5;
