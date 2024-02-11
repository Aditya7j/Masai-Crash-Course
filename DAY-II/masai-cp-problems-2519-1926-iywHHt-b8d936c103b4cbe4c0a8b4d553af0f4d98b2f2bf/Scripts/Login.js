// Add your js code here
function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!email || !password) {
        document.getElementById('error-message').innerText = 'Please fill out all the fields.';
    } else if (isCredentialsValid(email, password)) {
        document.getElementById('error-message').innerText = '';
        
        document.getElementById('success-message').innerText = 'Login successful!';

        setTimeout(function() {
            window.location.href = 'index.html';
        }, 2000);
    } else {
        document.getElementById('error-message').innerText = 'Invalid email or password.';
    }
}

function isCredentialsValid(email, password) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email && user.password === password);
}

function redirectToSignup() {
    window.location.href = 'signup.html';
}
