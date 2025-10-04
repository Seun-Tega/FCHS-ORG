 document.querySelectorAll(".read-more").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const text = this.previousElementSibling;
      text.classList.toggle("expanded");

      // Toggle the link text
      if (text.classList.contains("expanded")) {
        this.textContent = "Read Less";
      } else {
        this.textContent = "Read More";
      }
    });
  });


   document.addEventListener("DOMContentLoaded", function () {
      const container = document.getElementById("auto-scroll-row");

      // Scroll speed in pixels per frame (adjust for faster/slower)
      const speed = 0.5;

      let scrollPos = 0;

      function step() {
        scrollPos += speed;

        // When scroll position passes half of scrollWidth (due to duplication), reset
        if (scrollPos >= container.scrollWidth / 2) {
          scrollPos = 0;
        }

        container.scrollLeft = scrollPos;

        requestAnimationFrame(step);
      }

      step();
    });


  document.getElementById("currentYear").textContent = new Date().getFullYear();


