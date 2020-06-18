// number format in javascript
/* 
inti.NumberFormat
*/

let formatNumber = (number) => {
    let result = new Intl.NumberFormat('en-IN', {maximumSignificantDigits: 3}).format(number);
    return result;
};

let custRangeEle = document.querySelector('#customRange');
let amountEle = document.querySelector('#amount');
custRangeEle.addEventListener('input', function() {
    let selectedAmount = custRangeEle.value;
    // amountEle.innerText = selectedAmount;                //without function call
    amountEle.innerText = formatNumber(selectedAmount);     //with function call
});