document.getElementById('login-submit').addEventListener('click', function () {
    //get User Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get User Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //checking email and password
    if (userEmail == 'shontan@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    } else {
        window.alert('Invalid Email or Password!');
    }
})