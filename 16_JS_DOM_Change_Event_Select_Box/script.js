//Change event on select box
let selectBox = document.querySelector('#techology');
selectBox.addEventListener('change',function () {
    // alert('selected');
    let techonlogySelect = selectBox.value;
    let displayTechnology = document.querySelector('#print-techology');
    displayTechnology.innerText = techonlogySelect;
});
