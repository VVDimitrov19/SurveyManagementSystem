//Redirect to main page
function redirect() {
    setTimeout(function() {
      window.location.href = "MainPage.html";
    }, 5000);
  }
  
  function saveAnswers() {
    // Get form values
    const question1 = document.querySelector('input[name="question_1"]:checked').value;
    const question2 = document.querySelector('input[name="question_2"]:checked').value;
    const question3 = document.querySelector('input[name="question_3"]:checked').value;
    const question4 = document.querySelector('input[name="question_4"]:checked').value;
    const recommendText = document.getElementById('recommendation').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('dropdown').value;
    const age = parseInt(document.getElementById('number').value);
  
    // Create survey response object
    const surveyResponse = {
      question1,
      question2,
      question3,
      question4,
      recommendText,
      name,
      email,
      country,
      age
    };
  
    // Send POST request to Spring Boot endpoint
    fetch('http://localhost:8080/api/responsesThree', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(surveyResponse)
    })
    .then(response => {
      if (response.ok) {
        console.log('Survey response saved successfully.');
      } else {
        console.error('Failed to save survey response.');
      }
      
      // Call the redirect function after the AJAX request has completed
      redirect();
    })
    .catch(error => {
      console.error('An error occurred while saving the survey response:', error);
    });
  }