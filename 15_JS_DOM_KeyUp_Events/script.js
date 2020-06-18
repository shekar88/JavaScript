//Keyup Event
let txtBox = document.querySelector('#username');
txtBox.addEventListener('keyup',function() {
    let txtEntered = txtBox.value;
    // alert(txtEntered);
    // document.querySelector('#msg').innerHTML = txtEntered;
    //or
    let msgElement = document.querySelector('#msg');
    msgElement.innerHTML = txtEntered;
    
});