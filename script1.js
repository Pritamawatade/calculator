// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Select all buttons with class 'button'
    var buttons = document.querySelectorAll('.button');
    
    // Variable to store the input value
    var inputField = document.querySelector('.input');

    // Add click event listener to each button
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the value of the clicked button
            var buttonValue = this.textContent;

            // Append the value of the clicked button to the input field
            inputField.value += buttonValue;
        });
    });

    // Function to evaluate the expression and display the result
    function calculate() {
        try {
            // Evaluate the expression in the input field
            var result = eval(inputField.value);
            
            // Check if the result is a valid number
            if (isNaN(result) || !isFinite(result)) {
                throw new Error('Invalid expression');
                
                // Display the result
            }
            inputField.value = result;
        } catch (error) {
            // If there's an error during evaluation, display an error message
            inputField.value = 'Error';
        }
    }

    // Add click event listener to the '=' button to calculate the result
    document.querySelector('.p').addEventListener('click', calculate);

    // Add click event listener to the 'C' button to clear the input field
    document.querySelector('.button[value="C"]').addEventListener('click', function() {
        inputField.value = '';
    });
});
