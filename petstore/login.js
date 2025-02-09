document.addEventListener("DOMContentLoaded", () => {
    // Select the form
    const loginForm = document.querySelector("form");
  
    if (!loginForm) {
      console.error("Form not found. Ensure the HTML contains a <form> element.");
      return;
    }
  
    // Select the input fields
    const usernameInput = loginForm.querySelector("input[placeholder='Username']");
    const passwordInput = loginForm.querySelector("input[placeholder='Password']");
  
    // Debugging: Log elements
    // console.log("Form:", loginForm);
    // console.log("Username Input:", usernameInput);
    // console.log("Password Input:", passwordInput);
  
    if (!usernameInput || !passwordInput) {
      console.error("Input fields not found. Check the placeholders in the HTML.");
      return;
    }
  
    // Handle form submission
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Debugging: Log user input
      console.log("Entered Username:", username);
      console.log("Entered Password:", password);
  
      if (!username || !password) {
        alert("Please fill in both Username and Password.");
        return;
      }
  
      // Simulate a successful login
      alert(`Welcome, ${username}! Your login was successful.`);
      loginForm.reset(); // Clear the form
    });
  
    // Handle Sign-Up button
    const signUpButton = loginForm.querySelector("button[type='button']");
    if (signUpButton) {
      signUpButton.addEventListener("click", () => {
        alert("Redirecting to Sign-Up page...");
        // Add sign-up logic here if needed
      });
    }
  });
  