//Access the complete browser
console.log(window);



// let sayGoodMorning = () => {
//     let h1Tag = document.querySelector('#msg');
//     h1Tag.innerText = 'Good Morning';
//     h1Tag.style.backgroundColor = 'limegreen';
//     h1Tag.style.padding = '15px';
//     h1Tag.style.boxShadow = '0 0 10px black';
// };
// // sayGoodMorning();

// let sayGoodAfternoon = () => {
//     let h1Tag = document.querySelector('#msg');
//     h1Tag.innerText = 'Good Afternoon';
//     h1Tag.style.backgroundColor = 'hotpink';
//     h1Tag.style.padding = '15px';
//     h1Tag.style.boxShadow = '0 0 10px red';
// };
// // sayGoodAfternoon();

// let sayGoodEvening = () => {
//     let h1Tag = document.querySelector('#msg');
//     h1Tag.innerText = 'Good Evening';
//     h1Tag.style.backgroundColor = 'purple';
//     h1Tag.style.padding = '15px';
//     h1Tag.style.boxShadow = '0 0 10px white';
// };
// //sayGoodEvening();

// let sayGoodNight = () => {
//     let h1Tag = document.querySelector('#msg');
//     h1Tag.innerText = 'Good Night';
//     h1Tag.style.backgroundColor = 'yellow';
//     h1Tag.style.padding = '15px';
//     h1Tag.style.boxShadow = '0 0 10px purple';
// };
// //sayGoodNight();

//sayWishMe
let sayWishMe = (wish,color) => {
    let h1Tag = document.querySelector('#msg');
    h1Tag.innerText = wish;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
};