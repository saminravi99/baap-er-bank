const loginBtn = document.getElementById('login-submit');

loginBtn.addEventListener('click', function () {
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    
    if (email == 'saminisrar1@gmail.com' && password == 'Ravi540594') {
        window.location.href = './banking.html';    }
    else {
        alert('Invalid credentials');
    }
});
    