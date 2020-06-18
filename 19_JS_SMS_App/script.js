let msgAreaEle = document.querySelector('#msg-area');
let charCountEle = document.querySelector('#char-count');
msgAreaEle.addEventListener('keyup', function() {
    let msgLenght = msgAreaEle.value.length;
    charCountEle.innerText = msgLenght;
});