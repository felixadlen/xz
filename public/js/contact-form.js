const btnOpenForms = document.querySelectorAll('.btnOpenForm');
const formContainer = document.getElementById('contactForm');
const formContent = document.querySelector('.form-container');
const form = document.getElementById("form");
const result = document.getElementById("result");
const btnCloseForms = document.querySelectorAll('.btnCloseForm'); 
const thankYouMessage = document.getElementById("thankYouMessage");

// Function to open and reset the form's position
function openForm() {
    formContent.style.transform = 'translate(-50%, -50%)'; // Ensure it's centered
    formContainer.classList.remove('hidden'); // Show the form container
}

// Function to close the form and reset position off-screen
function closeForm() {
    formContent.style.transform = 'translate(-50%, 100vh)'; // Move it off-screen
    formContainer.classList.add('hidden'); // Hide the form container
}

// Event listeners to open the form
btnOpenForms.forEach(btn => {
  btn.addEventListener('click', function() {
    openForm(); // Call the openForm function
  });
});

// Event listeners to close the form
btnCloseForms.forEach(btn => {
  btn.addEventListener('click', function() {
    closeForm(); // Call the closeForm function
  });
});

formContainer.addEventListener('click', function(event) {
  if (!formContent.contains(event.target)) {
    closeForm(); // Call the closeForm function if clicked outside the form
  }
});

// Event listener for the form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Show the loading div
  document.querySelector('.load').style.display = 'inline-flex'; 

  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.textContent = '';

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.textContent = json.message;
        // Hide form elements and display thank you message
        form.style.display = "none";
        result.style.display = "none";
        const name = object.name || ""; // Get the name from the form data
        thankYouMessage.textContent = `Thank you for your message, ${name}! We bet it was a nice message.`; // Update thankYouMessage content
        thankYouMessage.style.display = "block";
        document.querySelector(".form-container h3").style.display = "none";
        document.querySelector(".form-container p").style.display = "none";
      } else {
        console.log(response);
        result.textContent = json.message; // Change this to innerHTML if needed
      }
    })
    .catch((error) => {
      console.log(error);
      result.textContent = "Something went wrong!";  // Change this to innerHTML if needed
    })
    .finally(() => {
      // Hide the loading div
      document.querySelector('.load').style.display = 'none'; 
    });
});