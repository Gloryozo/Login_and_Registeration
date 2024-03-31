const button = document.querySelector('button');

// Add an event listener to the button
button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get the values of input fields
    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Check if any of the fields are empty
    if (firstName === '' || lastName === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields');
        return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Log the values to the console (for testing purposes)
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);

    // Clear the input fields after submission (optional)
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';

    // Perform further actions like sending data to the server, etc.
});