// app.js
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Simulate validation (You can use your own login credentials here)
    const validEmail = 'user@example.com';
    const validPassword = 'password123';

    // Check if credentials match
    if (email === validEmail && password === validPassword) {
        // Success: Redirect to the success page or display a message
        alert('Login successful!');
        // You can also redirect to another page: window.location.href = 'success.html';
    } else {
        // Display error message if login fails
        errorMessage.style.display = 'block';
    }

    // For your personal project, you can store the entered data (email and password) to a local folder (server-side logic required)
    // For now, let's just log it
    console.log('Email:', email);
    console.log('Password:', password);
});
