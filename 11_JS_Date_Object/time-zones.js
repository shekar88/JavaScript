//Time Zones
let currTime = new Date().toLocaleTimeString();
document.getElementById('indian-time-zone').innerHTML = currTime;

let countryOptions = {timeZone : 'America/New_York'};
let usTime =  new Date().toLocaleTimeString('en-US',countryOptions);
document.getElementById('usa-time-zone').innerHTML = usTime;

countryOptions = {timeZone : 'Europe/London'};
let londonTime = new Date().toLocaleTimeString('en-GB',countryOptions);
document.getElementById('london-time-zone').innerHTML = londonTime;

countryOptions = {timeZone : 'Asia/Dubai'};
let dubaiTime = new Date().toLocaleTimeString('en-AE',countryOptions);
document.getElementById('dubai-time-zone').innerHTML = dubaiTime;