document.addEventListener("DOMContentLoaded", () => {
  const loginText = document.querySelector(".title-text .login");
  const loginForm = document.querySelector("form.login");
  const loginBtn = document.querySelector("label.login");
  const signupBtn = document.querySelector("label.signup");
  const signupLink = document.querySelector("form .signup-link a");
  signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  });
  loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  });
  signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
  });

  const signupForm = document.querySelector("form.signup");

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;
  
    const data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };
  
    fetch("http://localhost:8080/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        // Do something with the response data
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });
});
