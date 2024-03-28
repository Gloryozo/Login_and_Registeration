const button = document.querySelector('button');

// Add an event listener to the button
button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get the values of input fields
    const firstName = document.getElementById('Firstname').value.trim();
    const lastName = document.getElementById('Lastname').value.trim();
    const email = document.getElementById('Email').value.trim();
    const password = document.getElementById('Password').value.trim();
    const confirmPassword = document.getElementById('ConfirmPassword').value.trim();

    // Check if any of the fields are empty
    if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
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
    console.log('Password:', password);

    // Clear the input fields after submission (optional)
    document.getElementById('Firstname').value = '';
    document.getElementById('Lastname').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Password').value = '';
    document.getElementById('ConfirmPassword').value = '';

    // Perform further actions like sending data to the server, etc.
});