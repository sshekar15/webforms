    // JavaScript code for form validation
	// Prevent form from submitting
let form = document.querySelector('form')
let inputField = document.getElementById("inputField");
let inputRegex = /^[a-zA-Z0-9]+$/;
form.addEventListener('submit',function(){
  if (!inputRegex.test(inputField.value)){
    window.alert("Please make sure it is alphanumeric.")
    event.preventDefault();
  }
  else{
    window.alert("Submitted")
  }
});
    // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message