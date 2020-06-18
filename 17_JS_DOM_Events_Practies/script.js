let userFirstName = document.querySelector('#user-first-name');
userFirstName.addEventListener('keyup', function() {
    let userFirstNameInput = userFirstName.value;
    let userFirstNameResult = document.querySelector('#user-first-name-result');
    userFirstNameResult.value = userFirstNameInput;
});

let userMiddleName = document.querySelector('#user-middle-name');
userMiddleName.addEventListener('keyup', function() {
    let userMiddleNameInput = userMiddleName.value;
    let userMiddleNameResult = document.querySelector('#user-middle-name-result');
    userMiddleNameResult.value = userMiddleNameInput;
});

let userLastName = document.querySelector('#user-last-name');
userLastName.addEventListener('keyup', function() {
    let userLastNameInput = userLastName.value;
    let userLastNameResult = document.querySelector('#user-last-name-result');
    userLastNameResult.value = userLastNameInput;
});

let userEmail = document.querySelector('#user-mail');
userEmail.addEventListener('keyup', function() {
    let userEmailInput = userEmail.value;
    let userEmailResult = document.querySelector('#user-mail-result');
    userEmailResult.value = userEmailInput;
});

let userMobileNo = document.querySelector('#user-mobile-no');
userMobileNo.addEventListener('keyup', function() {
    let userMobileInput = userMobileNo.value;
    let userMobileResult = document.querySelector('#user-mobile-no-result');
    userMobileResult.value = userMobileInput;
});

let userQualification = document.querySelector('#user-qualification');
userQualification.addEventListener('keyup', function() {
    let userQualificationInput = userQualification.value;
    let userQualificationResult = document.querySelector('#user-qualification-result');
    userQualificationResult.value = userQualificationInput;
});

let userPassedOut = document.querySelector('#user-passed-out');
userPassedOut.addEventListener('keyup', function() {
    let userPassInput = userPassedOut.value;
    let userPassedResult = document.querySelector('#user-passed-out-result');
    userPassedResult.value = userPassInput;
});

let userMaritalStatus = document.querySelector('#marital-status');
userMaritalStatus.addEventListener('keyup', function() {
    let userMaritalInput = userMaritalStatus.value;
    let userMaritalResult = document.querySelector('#marital-status-result');
    userMaritalResult.value = userMaritalInput;
});