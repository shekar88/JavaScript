let numberEl = document.querySelector('#req-number');
numberEl.addEventListener('keyup', function() {
    let inputNumber = Number(numberEl.value);
    document.querySelector('#input-num').innerText = inputNumber;
    calcualte();
});

let rangeEl = document.querySelector('#multiplier');
rangeEl.addEventListener('input', function() {
    let selectMultiplier = Number(rangeEl.value);
    document.querySelector('#multi').innerText = selectMultiplier;
    calcualte();
});

//Calculate 
let calcualte = () => {
    let theNumber = Number(document.querySelector('#input-num').innerText);
    let multipl = Number(document.querySelector('#multi').innerText);
    let mathResult = theNumber * multipl;
    document.querySelector('#result').innerText = mathResult;
};