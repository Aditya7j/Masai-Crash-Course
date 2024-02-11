function redirectToLogin() {
    window.location.href = 'login.html';
}

function isEmailRegistered(email) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email);
}

function signup() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;

    if (!name || !email || !phoneNumber || !password) {
        document.getElementById('error-message').innerText = 'Please fill out all the fields.';
    } else if (isEmailRegistered(email)) {
        document.getElementById('error-message').innerText = 'Email is already registered.';
    } else {
        var user = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            password: password
        };

        var users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        document.getElementById('error-message').innerText = '';

        // Display success message
        document.getElementById('success-message').innerText = 'Signup successful!';

        // Optionally, you can clear the form fields here if needed

        // Redirect to the login page after a delay (e.g., 2 seconds)
        setTimeout(function() {
            redirectToLogin();
        }, 2000);
    }
}
