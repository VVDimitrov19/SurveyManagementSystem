document.addEventListener("DOMContentLoaded", () => {
  const loginText = document.querySelector(".title-text .login"); // Selects the login text element
  const loginFormSignup = document.querySelector("form.login"); // Selects the login form element
  const loginBtn = document.querySelector("label.login"); // Selects the login label element
  const signupBtn = document.querySelector("label.signup"); // Selects the signup label element
  const signupLink = document.querySelector("form .signup-link a"); // Selects the signup link element

  signupBtn.onclick = (()=>{
    loginFormSignup.style.marginLeft = "-50%"; // Sets the left margin of the login form to -50%
    loginText.style.marginLeft = "-50%"; // Sets the left margin of the login text to -50%
  });

  loginBtn.onclick = (()=>{
    loginFormSignup.style.marginLeft = "0%"; // Sets the left margin of the login form to 0%
    loginText.style.marginLeft = "0%"; // Sets the left margin of the login text to 0%
  });

  signupLink.onclick = (()=>{
    signupBtn.click(); // Triggers a click event on the signup button
    return false; // Prevents the default link behavior
  });

  const signupForm = document.querySelector("form.signup"); // Selects the signup form element

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the form from being submitted

    const email = document.querySelector("#email").value; // Retrieves the value of the email input
    const password = document.querySelector("#password").value; // Retrieves the value of the password input
    const confirmPassword = document.querySelector("#confirmPassword").value; // Retrieves the value of the confirm password input

    const data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }; // Stores the form data in an object

    fetch("http://localhost:8080/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) // Converts the data object to JSON and includes it in the request body
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok"); // Throws an error if the response is not successful
        }
        return response.json(); // Returns the response data as JSON
      })
      .then(data => {
        console.log(data); // Logs the response data to the console
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error); // Logs an error message to the console
      });
  });

  const loginForm = document.querySelector("form.login"); // Selects the login form element

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the form from being submitted

    const emailInput = document.querySelector("form.login input[type='text']"); // Selects the email input element
    const passwordInput = document.querySelector("form.login input[type='password']"); // Selects the password input element

    const email = emailInput.value; // Retrieves the value of the email input
    const password = passwordInput.value; // Retrieves the value of the password input

    const data = {
      email: email,
      password: password
    }; // Stores the form data in an object

    fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) // Converts the data object to JSON and includes it in the request body
    })
      .then(response => {
        if (response.ok) {
          window.location.href = "WebPages/MainPage.html"; // Redirects to the main page if the response is successful
        }
        else {
          throw new Error("Invalid email or password"); // Throws an error if the response is not successful
        }
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error); // Logs an error message to the console
        alert(error.message); // Displays an alert with the error message

        emailInput.value = ""; // Clears the email input
        passwordInput.value = ""; // Clears the password input
      }); 
  });
});
