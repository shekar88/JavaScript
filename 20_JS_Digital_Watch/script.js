let indianDate, indianTime, usaDate, usaTime, chinaDate, chinaTime;
indianDate = new Date().toLocaleDateString();
document.querySelector('#indian-date').innerText = indianDate;

indianTime = new Date().toLocaleTimeString();
document.querySelector('#indian-time').innerHTML = indianTime;

usaDate = new Date().toLocaleDateString();
document.querySelector('#usa-date').innerText = usaDate;

let usaTimeZone = { timeZone : 'America/New_York'};
usaTime = new Date().toLocaleTimeString('en-US', usaTimeZone);
document.querySelector('#usa-time').innerHTML = usaTime;

chinaDate = new Date().toLocaleDateString();
document.querySelector('#china-date').innerText = chinaDate;

let chinaTimeZone = { timeZone : 'Asia/Shanghai'};
chinaTime = new Date().toLocaleTimeString('en-US', chinaTimeZone);
document.querySelector('#china-time').innerText = chinaTime;


let indianWatch = () => {
    let options = { timeZone : 'Asia/Kolkata'};
    let currentDate = new Date().toLocaleDateString('en-US',options);
    let currentTime = new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#indian-date').innerText = currentDate;
    document.querySelector('#indian-time').innerText = currentTime;
};
setInterval(indianWatch,1000);

let usaWatch = () => {
    let options = { timeZone : 'America/New_York'};
    let currentDate = new Date().toLocaleDateString('en-US',options);
    let currentTime = new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#usa-date').innerText = currentDate;
    document.querySelector('#usa-time').innerText = currentTime;
};
setInterval(usaWatch,1000);

let chinaWatch = () => {
    let options = { timeZone : 'Asia/Shanghai'};
    let currentDate = new Date().toLocaleDateString('en-US',options);
    let currentTime = new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#china-date').innerText = currentDate;
    document.querySelector('#china-time').innerText = currentTime;
};
setInterval(chinaWatch,1000);
