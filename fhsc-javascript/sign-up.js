
document.addEventListener("DOMContentLoaded", function () {
  
  const togglePassword = document.getElementById("togglePassword");
  const password = document.getElementById("password");
  const toggleIcon = document.getElementById("toggleIcon");

  togglePassword.addEventListener("click", function () {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;

    // Toggle the icon
    toggleIcon.classList.toggle("bi-eye");
    toggleIcon.classList.toggle("bi-eye-slash");
  });

  function removeRadioButton() {
    const loginDiv = document.getElementById("loginDiv");


    loginDiv.style.display = 'none';

  }


  const select = document.getElementById("year-select");

  for (let year = 1850; year <= 2025; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    select.appendChild(option);
  }

  document.getElementById('eventToggle').addEventListener('change', function() {
    const statusText = document.getElementById('status');
    if (this.checked) {
      statusText.textContent = "Receive emails about your account activity.";
    } else {
      statusText.textContent = "Get notified before your scheduled tutoring sessions.";
    }
  });
   
});

  document.addEventListener("DOMContentLoaded", function () {
            const signupBtn = document.getElementById('signupBtn');
            
            // Confirm the button is found
            console.log(signupBtn);

            signupBtn.addEventListener('click', function(event) {
                console.log('Button clicked!');  // Check if the click is registered
                
                // Change background and border color
                this.style.backgroundColor = '#834315';
                this.style.borderColor = '#834315';
            });
        });