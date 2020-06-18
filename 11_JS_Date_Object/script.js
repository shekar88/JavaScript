//Date Object
let sysDate = new Date();
console.log(sysDate);      //Fri May 29 2020 08:44:18 GMT+0530 (India Standard Time)

//Proper Date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);   //5/29/2020

currentDate = new Date().toLocaleString();
console.log(currentDate);   //5/29/2020, 8:46:39 AM

currentDate = new Date().toDateString();
console.log(currentDate);   //Fri May 29 2020

currentTime = new Date().toLocaleTimeString();
console.log(currentTime);   //8:47:58 AM

currentTime = new Date().toTimeString();
console.log(currentTime);   //08:48:41 GMT+0530 (India Standard Time)

currentTime = new Date().getTime();
console.log(currentTime);   //1590722384106

currentTimeZone = new Date().getTimezoneOffset();
console.log(currentTimeZone);   //-330

//USA Date getting from INDIA
let options = {timeZone : 'America/New_York'};
let usaDate = new Date().toLocaleDateString('en-US',options);
console.log(usaDate);

//USA Time
options = {timeZone : 'America/New_York'};
let usaTime = new Date().toLocaleTimeString('en-US',options);
console.log(usaTime);

//today
let today = new Date().getDay();
console.log(today); 
//0 to 6
//0-sunday 1-monday 2-tuesday 3-wednesday 4-thursday 5-friday 6-saturday

let day = new Date().getDay();
today = '';
switch(day) {
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
        today = 'Enter a proper day';
        break;
}
console.log(`Today is : ${today}`);

//Month
let currentMonth = new Date().getMonth();
console.log(currentMonth);
//0 to 11
//0-January 1-February 2-March 3-April 4-May 5-June
// 6-July 7-August 8-September 9-October 10-November 11-December

let currMonth = new Date().getMonth();
let month = '';
switch(currMonth) {
    case 0:
        month = 'January';
        break;
    case 1:
        month = 'February';
        break;
    case 2:
        month = 'March';
        break;
    case 3:
        month = 'April';
        break;
    case 4:
        month = 'May';
        break;
    case 5:
        month = 'June';
        break;
    case 6:
        month = 'July';
        break;
    case 7:
        month = 'August';
        break;
    case 8:
        month = 'September';
        break;
    case 9:
        month = 'October';
        break;
    case 10:
        month = 'November';
        break;
    case 11:
        month = 'December';
        break;
    default:
        month = 'Enter Proper Month';
        break;
}
console.log(month);

//Custom Date
let customDate = new Date().getDate();
let customMonth = new Date().getMonth()+1;
let customYear = new Date().getFullYear();
console.log(`${customDate} - ${customMonth} - ${customYear}`);
console.log(`${customDate} / ${customMonth} / ${customYear}`);
console.log(`${customDate}/${customMonth}/${customYear}`);
console.log(`${customDate}.${customMonth}.${customYear}`);
console.log(`${customDate}:${customMonth}:${customYear}`);