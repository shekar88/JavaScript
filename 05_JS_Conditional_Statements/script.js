/*
Conditional & Looping Statements
    01 if-else
    02 switch
    03 for loop
    04 while loop
    05 do-while loop
*/

// if-else
// if-else Example 1:
let jsTime = -24;   //10, 16, 24, 25, -24, -25
let wishTo = '';
// if(jsTime < 12) {
if(jsTime >= 0 && jsTime < 12) {
    wishTo = 'Good Morning';
}
else if(jsTime >= 12 && jsTime < 17) {
    wishTo = 'Good Afternoon';
}
else if(jsTime >= 17 && jsTime <24) {
    wishTo = 'Good Evening';
}
else {
    wishTo = 'Enter a Proper Time';
}
console.log(wishTo);

//if-else Example 2:
let currentDay = new Date();
let cHour, cMin, cSeconds, meridiem;

//Getting Current Hours
let currentHours = currentDay.getHours();
if(currentHours < 10) {
    cHour =0+`${currentHours}`;
}
else {
    cHour = currentHours;
}

//Getting Current Minutes
let currentMinutes = currentDay.getMinutes();
if(currentMinutes < 10) {
    cMin = 0+`${currentMinutes}`;
}
else {
    cMin = currentMinutes;
}

//Getting Current Seconds
let currentSeconds = currentDay.getSeconds();
if(currentSeconds < 10) {
    cSeconds = 0+`${currentSeconds}`;
}
else {
    cSeconds = currentSeconds;
}

//Getting Current Meridiem
if(cHour >= 0 && cHour <= 11.59) {
    meridiem = 'AM';
}
else if(cHour >=12 && cHour <= 23.59) {
    meridiem = 'PM';
}

console.log(`Current Hours : ${cHour}`);
console.log(`Current Minutes : ${cMin}`);
console.log(`Current Seconds : ${cSeconds}`);
console.log(`Current Meridiem : ${meridiem}`);

// let currentTime = `${currentDay.getHours()}:${currentDay.getMinutes()}:${currentDay.getSeconds()}`;
let currentTime = `${cHour}:${cMin}:${cSeconds}`;
let wishMessage = '';
if(cHour >= 0 && cHour < 12) {
    wishMessage = `Good Morning`;
}
else if(cHour > 12 && cHour < 14.30) {
    wishMessage = 'Good Noon';
}
else if(cHour > 14.30 && cHour < 17) {
    wishMessage = 'Good Afternoon';
}
else if(cHour > 17 && cHour < 20) {
    wishMessage = 'Good Evening';
}
else if(cHour > 20 && cHour < 24) {
    wishMessage = 'Good Evening and Before Leaving Good Night';
}
else {
    wishMessage = 'Enter a Proper Time';
}
// console.log(`${wishMessage} 'Current Time' is : ${currentTime} ${meridiem}`);
console.log(`Wish Message : ${wishMessage}`);

// switch
let day = new Date().getDay();
let today = '';
switch (day) {
    case 0:
        today = 'Sunday';
        break;
    case 1:
        today = 'Monday';
        break;
    case 2:
        today = 'Tuesday';
        break;
    case 3:
        today = 'Wednesday';
        break;
    case 4:
        today = 'Thursday';
        break;
    case 5:
        today = 'Friday';
        break;
    case 6:
        today = 'Saturday';
        break;

    default:
        today = 'Enter a Proper day';
        break;
}
console.log(`${day} -> Today is : ${today}`);
// for loop
// while loop
//do-while loop