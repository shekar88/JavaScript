// 01. Find the number of 'o' in the given string
let msg = 'Good Morning';
//Arrow Function
// let findZero = () => {};
let findZero = (str) => {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        let chara = str.charAt(i);
        if(chara === 'o' || chara === 'O') {
            count++;
        }
    }
    return count;
};
console.log(`The No of O's in String is : ${findZero(msg)}`);

// 02. Find the Reverse String of given String
msg = 'Good Morning';
let reverseString = (str) => {
    let temp ='';
    for(let i = str.length-1; i >= 0; i--) {
        let chara = str.charAt(i);
        temp += chara;
    }
    return temp;
};
console.log(`${msg} => ${reverseString(msg)}`);

// 03. Check the Given string is Palindrome or not
msg = 'MADAM';       //MADAM  ABBA  
let isPalindrome = (str) => {
    // if(str === reverseString(str)) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    
    //OR
    return (str === reverseString(msg));
};
console.log(`${msg} is Palindrome ? ${isPalindrome(msg)}`);
console.log(`${msg} => is Palindrome ? => ${isPalindrome(msg)} => ${reverseString(msg)}`);

//Video 27

// 04. Patterns Triangle String One
/*
C 
CH 
CHA 
CHAN 
CHAND 
CHANDR 
CHANDRA 
CHANDRAS 
CHANDRASH 
CHANDRASHE 
CHANDRASHEK 
CHANDRASHEKA 
CHANDRASHEKAR 
str = Good
G      -> str.substr(0,1)
Go     -> str.substr(0,2
Goo    -> str.substr(0,3)
Good   -> str.substr(0,4)

i = 1; i <= str.length
*/
msg = 'CHANDRASHEKAR';
let triangleOne = (str) => {
    let tempStr = '';
    for(let i = 1; i <= str.length; i++) {
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleOne(msg));

// 05. Patterns Triangle String Two
/*
 CHANDRASHEKAR 
  HANDRASHEKAR 
   ANDRASHEKAR 
    NDRASHEKAR 
     DRASHEKAR 
      RASHEKAR 
       ASHEKAR 
        SHEKAR 
         HEKAR 
          EKAR 
           KAR 
            AR 
             R 
str = Good
Good   -> str.substr(0)
 ood   -> str.substr(1)
  od   -> str.substr(2
   d   -> str.substr(3)


i = 0; i <= str.length-1
*/
let addSpace = (numSpace) => {
    let tempSpace = '';
    for(let i = 1; i <= numSpace; i++) {
        tempSpace += ' ';
    }
    return tempSpace;
};

msg = 'CHANDRASHEKAR';
let triangleTwo = (str) => {
    let tempStr = '';
    for(let i = 0; i <= str.length-1; i++) {
        tempStr += `${addSpace(i)} ${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleTwo(msg));

// 06. Patterns Triangle String Three
/*
CHANDRASHEKAR 
CHANDRASHEKA 
CHANDRASHEK 
CHANDRASHE 
CHANDRASH 
CHANDRAS 
CHANDRA 
CHANDR 
CHAND 
CHAN 
CHA 
CH 
C 

str = Good
Good   -> str.substr(0,4)
Goo    -> str.substr(0,3)
Go     -> str.substr(0,3)
G      -> str.substr(0,3)

i = length; i >= 1; i--
*/

msg = "CHANDRASHEKAR";
let triangleThree = (str) => {
    let tempStr = '';
    for(let i = str.length; i >= 1; i--) {
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleThree(msg));

// 07. Patterns Triangle String Four
/*
            R 
           AR 
          KAR 
         EKAR 
        HEKAR 
       SHEKAR 
      ASHEKAR 
     RASHEKAR 
    DRASHEKAR 
   NDRASHEKAR 
  ANDRASHEKAR 
 HANDRASHEKAR 
CHANDRASHEKAR 

str = Good
   d   -> str.substr(3)
  od   -> str.substr(2)
 ood   -> str.substr(1)
Good   -> str.substr(0)

i = length-1; i >= 0; i--
*/
msg = "CHANDRASHEKAR";
let triangleFour = (str) => {
    let tempStr = '';
    for(let i = str.length-1; i >= 0; i--) {
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleFour(msg));