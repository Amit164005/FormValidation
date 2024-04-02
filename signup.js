function signup(event) {
    event.preventDefault();
    const fullNameInput = document.querySelector('.signup input[placeholder="Full name"]');
    const emailInput = document.querySelector('.signup input[placeholder="Email address"]');
    const passwordInput = document.querySelector('.signup input[placeholder="Password"]');
    const signupResponse = document.getElementById("signupResponse");

    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!isValidEmail(email)) {
        signupResponse.innerHTML = "Please enter a valid email address.";
        return;
    }

    if (!isValidPassword(password)) {
        signupResponse.innerHTML = "Password must be at least 6 characters long.";
        return;
    }

    // If validation passes, you can proceed with signup processing
    signupResponse.innerHTML = "Signup successful!";
}
