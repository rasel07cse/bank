// step 1: added event handler with the submit button 
document.getElementById('btnSub').addEventListener('click', function () {
    // step 2: get the emil address from the email inside field 
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    // step 3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // Danger:    DO NOT VERIFY  email password on the clien side 
    // Step 4: verify email and password 
    if (email === 'rasel@jes.love' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Your input invalid!');
    }

})