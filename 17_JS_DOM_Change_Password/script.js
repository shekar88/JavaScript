/*
getAttribute() ->
setAttribute() ->
*/

let passwordBox = document.querySelector('#password');
let checkBox = document.querySelector('#checkbox');
checkBox.addEventListener('change', function() {
    // alert('check the checkbox');
    let typeAttrib = passwordBox.getAttribute('type');
    if(typeAttrib === 'password') {
        passwordBox.setAttribute('type','text');
    }
    else {
        passwordBox.setAttribute('type','password');
    }
});