document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get pass
    const passwordField = document.getElementById('user-pass');
    const userPassword = passwordField.value;
    // console.log(userPassword);
    if (userEmail == 'sontan@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    };
});

