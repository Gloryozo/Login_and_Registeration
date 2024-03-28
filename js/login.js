const input = document.querySelector('input');
const button = document.querySelector('button');
const error = document.querySelector('.error');

// Add an event listener to the input field
input.addEventListener('keypress', (event) => {   
        // Check if the enter key is pressed
     if (event.key === 'Enter') {
         event.preventDefault(); // Prevent default form submission behavior
            
        const usernameOrEmail = input.value.trim();
        const password = input.value.trim();
    
            // Check if the input values are not empty
        if (usernameOrEmail === '' || password === '') {
            alert('Please enter both username/email and password');
                return;
            }
            
            // Log the values to the console
            console.log('Username/Email:', usernameOrEmail);
            console.log('Password:', password);
    
            // Clear the input fields after submission (optional)
            input.value = '';
        }
    });


// Add an event listener to the button  
button.addEventListener('click', (event) => {
        // Trigger the button click event
        button.click()

        // Prevent the default form submission
        event.preventDefault()
    });  
