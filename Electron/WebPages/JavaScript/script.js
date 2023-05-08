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

  function registerUser() {
    const form = document.querySelector('form.signup');
    const formData = new FormData(form);
  
    fetch('http://localhost:8080/register', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          alert('User registered successfully.');
          window.location.href = '/login';
        } else {
          throw new Error('Failed to register user.');
        }
      })
      .catch(error => {
        alert(error.message);
      });
  }
  

  document.querySelector('form.signup').addEventListener('submit', registerUser);
});
