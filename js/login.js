const input = document.querySelector('input');
const button = document.querySelector('button');

// Add an event listener to the input field
input.addEventListener('keypress', (event) => {   
        // Check if the enter key is pressed
     if (event.key === 'Enter') {
         event.preventDefault(); // Prevent default form submission behavior
            
        const usernameOrEmail = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
    
            // Check if the input values are not empty
        if (usernameOrEmail === '' || password === '') {
            alert('Please enter both username/email and password');
                return;
            }
            
            // Log the values to the console
            console.log('Username/Email:', usernameOrEmail);
            console.log('Password:', password);
    
            // Clear the input fields after submission (optional)
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }
    });


// Add an event listener to the button  
button.addEventListener('click', (event) => {
    // Prevent the default form submission
    event.preventDefault();

    const usernameOrEmail = document.getElementById('username').value.trim(); // Get the value of the input field
    const password = document.getElementById('password').value.trim(); // Get the value of the input field

    // Check if the input values are not empty
    if (usernameOrEmail === '' || password === '') {
        alert('Please enter both username/email and password');
        return;
    }
     // Log the values to the console
     console.log('Username/Email:', usernameOrEmail);
     console.log('Password:', password);
 
     // Clear the input fields after submission (optional)
     document.getElementById('username').value = '';
     document.getElementById('password').value = '';
 });