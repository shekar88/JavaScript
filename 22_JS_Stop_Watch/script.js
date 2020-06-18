/*
Formula for calcualting Time

minutes = Math.floor((count/100)/60);
seconds = Math.floor((count/100) - (minutes * 60));
milliSeconds = Math.floor(count - (seconds * 100) - (minutes * 6000));

key = setInterval() bulit in function for call based on the interval
clearInterval(key)  //key is setInerval

*/

let count, minutes, seconds, milliSeconds, intervel;
count = minutes = seconds = milliSeconds = intervel = 0;
let timerRunning = false;

//Start Timer
let startTimer = () => {
    count++;
    
    minutes = Math.floor((count/100)/60);
    seconds = Math.floor((count/100) - (minutes * 60));
    milliSeconds = Math.floor(count - (seconds * 100) - (minutes * 6000));

    document.querySelector('#minutes').innerText = leadingZero(minutes);
    document.querySelector('#seconds').innerText = leadingZero(seconds);
    document.querySelector('#m-seconds').innerText = leadingZero(milliSeconds);

    // document.querySelector('#m-seconds').innerText = count;
};

//leading Zero
let leadingZero = (time) => {
    if(time <= 9) {
        return "0" + time;
    }
    else {
        return time;
    }
};

//click on Start button
let startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', function() {
    if(!timerRunning) {
        interval = setInterval(startTimer,10);  //start timer
        timerRunning = true;
    }
});

//click on Stop button
let stopButton = document.querySelector('#stop-btn');
stopButton.addEventListener('click', function() {
    clearInterval(interval);    //stop timer
});

//click on Reset button
let resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', function() {
    clearInterval(interval);
    count = minutes = seconds = milliSeconds = intervel = 0;
    timerRunning = false;

    document.querySelector('#minutes').innerText = '00';
    document.querySelector('#seconds').innerText = '00';
    document.querySelector('#m-seconds').innerText = '00';
});
