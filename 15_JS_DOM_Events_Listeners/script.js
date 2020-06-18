/* 
onclick="sayWishMe('Good Morning','limegreen')"
 onclick="sayWishMe('Good Afternoon','hotpink')"
  onclick="sayWishMe('Good Evening','purple')"
   onclick="sayWishMe('Good Night','orangered')"
*/

//sayWishMe
let sayWishMe = (wish,color) => {
    let h1Tag = document.querySelector('#msg');
    h1Tag.innerText = wish;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
};

//Good Morning Button
// 1. Get the HTML element / Tag
let gmBtn = document.querySelector('#gm-btn');
// 2. Attach an event to the element / Tag
// 3. Write the function for event handling
gmBtn.addEventListener('click',function() {
    sayWishMe('Good Morning','limegreen');
});

//Good Afternoon button
let gaBtn = document.querySelector('#ga-btn');
gaBtn.addEventListener('click',function() {
    sayWishMe('Good Afternoon', 'hotpink');
});

//Good Evening button
let geBtn = document.querySelector('#ge-btn');
geBtn.addEventListener('click',function() {
    sayWishMe('Good Evening', 'purple');
});

//Good Night button
let gnBtn = document.querySelector('#gn-btn');
gnBtn.addEventListener('click',function() {
    sayWishMe('Good Night','orangered');
});

