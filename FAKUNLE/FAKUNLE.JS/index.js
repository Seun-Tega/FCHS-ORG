function toggleDetails(card) {
    const details = card.querySelector('.alumni-details');
    if (details.style.display === 'none' || details.style.display === '') {
      details.style.display = 'block';
    } else {
      details.style.display = 'none';
    }
  }



 document.addEventListener("DOMContentLoaded", function () {
    const readMoreLinks = document.querySelectorAll(".read-more");

    readMoreLinks.forEach(link => {
      const text = link.previousElementSibling;
      if (text.scrollHeight <= 100) {
        // Hide read-more if content doesn't overflow
        link.style.display = 'none';
      }

      link.addEventListener("click", function (e) {
        e.preventDefault();
        text.classList.toggle("expanded");
        this.textContent = text.classList.contains("expanded") ? "Read Less" : "Read More";
      });
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


  
  const counters = document.querySelectorAll('.event2');
  let started = false;

  function animateCount(el, target) {
    let count = 0;
    const speed = 120; // smaller is faster

    const update = () => {
      const increment = Math.ceil(target / 100);
      count += increment;

      if (count < target) {
        el.textContent = count;
        requestAnimationFrame(update);
      } else {
        el.textContent = target + '+';
      }
    };

    update();
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          animateCount(counter, target);
        });
        started = true;
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector('#Background-section3'));

