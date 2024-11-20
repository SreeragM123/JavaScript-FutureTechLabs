function validateForm() {
    var userName = document.getElementById("user");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var cPassword = document.getElementById("conpassword");

    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var passError = document.getElementById('pass-error');
    var conpassError = document.getElementById('conpass-error');

    nameError.textContent="";
    emailError.textContent="";
    passError.textContent="";
    conpassError.textContent="";

    let isValid=true;

    if (userName.value === "") {
        nameError.style.display = 'block';
        nameError.textContent="Please enter valid username!";
        isValid=false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.style.display = 'block';
        emailError.textContent="Please enter valid email address!";
        isValid=false;  
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    if (!passwordPattern.test(password.value)) {
        passError.style.display = 'block';
        passError.textContent="Password must have at least 8 characters, 1 uppercase letter, 1 number, and 1 special character!";
        isValid=false;
    }

    if (password.value !== cPassword.value) {
        conpassError.style.display = 'block';
        conpassError.textContent="Password does not match!";
        isValid=false;
    }

    return isValid;
};
