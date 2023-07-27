
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
  
    function validateName() {
        const nameInput = document.getElementById('nameInput');
        const nameError = document.getElementById('nameError');
        const nameValue = nameInput.value.trim();
      
        if (nameValue === '') {
          nameError.textContent = 'Name is required';
          nameInput.classList.add('invalid');
          return false;
        } else {
          nameError.textContent = '';
          nameInput.classList.remove('invalid');
          return true;
        }
      }
      
      function validateEmail() {
        const emailInput = document.getElementById('emailInput');
        const emailError = document.getElementById('emailError');
        const emailValue = emailInput.value.trim();
      
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        if (!emailValue.match(emailRegex)) {
          emailError.textContent = 'Please enter a valid email address';
          emailInput.classList.add('invalid');
          return false;
        } else {
          emailError.textContent = '';
          emailInput.classList.remove('invalid');
          return true;
        }
      }
      
      function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
      
        // If any field is invalid, prevent form submission
        return isNameValid && isEmailValid;
      }
      
 
  
});