 document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleBtn");
    const closeBtn = document.getElementById("closeBtn");

    toggleBtn.addEventListener("click", () => {
      sidebar.classList.add("show");
      sidebar.classList.remove("hide");
    });

    closeBtn.addEventListener("click", () => {
      sidebar.classList.add("hide");
      sidebar.classList.remove("show");
    });
  });



 
  let currentPage = 1;
  let totalPages = 5;  // Adjust this as needed (based on total number of pages)

  const pageInfo = document.getElementById('pageInfo');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Function to update the pagination info and button states
  function updatePagination() {
    pageInfo.textContent = `${currentPage} of ${totalPages} pages`;

    // Disable Prev button on the first page
    if (currentPage === 1) {
      prevBtn.style.pointerEvents = 'none';
      prevBtn.style.color = '#ccc';  // Optional, for disabled state
    } else {
      prevBtn.style.pointerEvents = 'auto';
      prevBtn.style.color = '';  // Reset to default color
    }

    // Disable Next button on the last page
    if (currentPage === totalPages) {
      nextBtn.style.pointerEvents = 'none';
      nextBtn.style.color = '#ccc';  // Optional, for disabled state
    } else {
      nextBtn.style.pointerEvents = 'auto';
      nextBtn.style.color = '';  // Reset to default color
    }

    // Update the range of results (for example 01-10 of 50 results)
    const startResult = (currentPage - 1) * 10 + 1;
    const endResult = currentPage * 10 > 50 ? 50 : currentPage * 10;  // Assuming 50 total results
    document.querySelector('.page p').textContent = `${startResult}-${endResult} of 50 results`;
  }

  // Event listener for Prev button
  prevBtn.addEventListener('click', function() {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
    }
  });

  // Event listener for Next button
  nextBtn.addEventListener('click', function() {
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
    }
  });




document.getElementById('eventToggle').addEventListener('change', function() {
  const statusText = document.getElementById('status');
  if (this.checked) {
    statusText.textContent = "Receive emails about your account activity.";
  } else {
    statusText.textContent = "Get notified before your scheduled tutoring sessions.";
  }
});



 const togglePassword = document.getElementById("togglePassword");
  const password = document.getElementById("password");
  const toggleIcon = document.getElementById("toggleIcon");

  togglePassword.addEventListener("click", function () {
    // Toggle the password visibility
    const type = password.type === "password" ? "text" : "password";
    password.type = type;

    // Toggle the icon
    toggleIcon.classList.toggle("bi-eye");
    toggleIcon.classList.toggle("bi-eye-slash");
  });


 


  document.addEventListener('DOMContentLoaded', function() {
  // Select all profile elements
  const profiled1 = document.querySelector('.profiled1');
  const profiled2 = document.querySelector('.profiled2');
  const profiled3 = document.querySelector('.profiled3');

  // Function to remove the active class from all elements
  function removeActiveClass() {
    profiled1.classList.remove('active-style');
    profiled2.classList.remove('active-style');
    profiled3.classList.remove('active-style');
  }

  // Function to toggle the active class on the clicked element
  function toggleActiveClass(element) {
    // Remove the active class from all elements first
    removeActiveClass();
    
    // Add the active class to the clicked element
    element.classList.add('active-style');
  }

  // Add event listeners for clicks
  profiled1.addEventListener('click', () => toggleActiveClass(profiled1));
  profiled2.addEventListener('click', () => toggleActiveClass(profiled2));
  profiled3.addEventListener('click', () => toggleActiveClass(profiled3));
});

