//while loop

// display values form 0 to 1 difference is 1

let result = '';
let i = 0;
do {
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
}while(i <= 10);
console.log(result);

// Example 2:
// Display Values form 20 to 0 diffrence is 2
result = '';
i = 20;
do {
    if(i > 0) {
        result += `${i} , `;    //20 , 18 , 16 , 14 , 12 , 10 , 8 , 6 , 4 , 2 , 0 
    }
    else {
        result += `${i} `;
    }
    i -= 2;
}while(i >= 0);
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
do {
    let j = 1;
    do {
        result += `* `;
        j++;
    }while( j <= i);
    result += `\n`;
    i++;
}while(i <= num);
console.log(result);
console.log('next pattern');
/* 
1
12
123
1234
12345

*/

num = 6;
result = '';
i = 1;
do {
    let j = 1;
    do {
        result += `${j} `;
        j++;
    }while( j <= i);
    result += `\n`;
    i++;
}while(i <= num);
console.log(result);
console.log('next pattern');

/*
1
22
333
4444
55555

*/

num = 6;
i = 1;
result = '';
do {
    let j = 1;
    do {
        result += `${i} `;
        j++;
    }while(j <= i);
    result += `\n`;
    i++;
}while(i <= num);
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
i = 6;
result = '';
do {
    let j = 1;
    do {
        result += `${j} `;
        j++;
    }while(j <= i);
    result += `\n`;
    i--;
}while(i >= num);
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
i = 6;
result = '';
do {
    let j = 1;
    do {
        result += `${i} `;
        j++;
    }while(j <= i);
    result += `\n`;
    i--;
}while(i >= num);
console.log(result);
console.log('next pattern');
/*
1 1 1 1 1 
2 2 2 2 
3 3 3 
4 4 
5 
*/
num = 7;
i = 1;
result = '';
do {
    let j = 7;
    do {
        result += `${i} `;
        j--;
    }while(j >= i);
    result += `\n`;
    i++;
}while(i <= num);
console.log(result);
console.log('next pattern');

/*
5 4 3 2 1 
5 4 3 2 
5 4 3 
5 4 
5
*/
num = 6;
i = 1;
result = '';
do {
    let j = 6;
    do {
        result += `${j} `;
        j--;
    }while(j >= i);
    result += `\n`;
    i++;
}while(i <= 6);
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
do {
    b = 1;
    do {
        if(a+b > n) {
            str = str+`* `;
        }
        else {
            str = str+' ';
        }
        b++;
    }while(b <= n);
    a++;
    str = str+ `\n`;
}while(a <= n);
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
