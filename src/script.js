
// IntersectionObserver for fade-up animation elements
  const fadeElements = document.querySelectorAll('.animate-fade-up');

  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3
  });

  fadeElements.forEach(el => fadeObserver.observe(el));

 


//form
  document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const time = document.getElementById("time").value.trim();
    const brand = document.getElementById("brand").value.trim();
    const problem = document.getElementById("problem").value.trim();

    if (!name || !email || !contact || !time || !brand || !problem) {
      alert("Please fill out all fields correctly.");
      return;
    }

    // Show confirmation popup and disable scroll
    document.getElementById("confirmationPopup").classList.remove("hidden");
    document.body.style.overflow = "hidden";

    // Reset the form
    document.getElementById("bookingForm").reset();
  });

  document.getElementById("confirmOkBtn").addEventListener("click", function() {
    document.getElementById("confirmationPopup").classList.add("hidden");
    document.body.style.overflow = ""; // Re-enable scroll
    // Do not scroll to top or redirect
  });








  //gallery animation 
  function handleScrollAnimation() {
    const elements = document.querySelectorAll('.animate-fade-up');
    const triggerBottom = window.innerHeight * 0.9;

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', handleScrollAnimation);
  window.addEventListener('load', handleScrollAnimation);


  // Loading bar effect
  let width = 0;
  const loadingBar = document.getElementById('loading-bar');
  const content = document.getElementById('content');

  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      content.classList.add('visible'); // Fade in content
      loadingBar.style.display = 'none'; // Hide loading bar
      document.querySelectorAll('.service-card').forEach(card => card.classList.add('visible'));
    } else {
      width++;
      loadingBar.style.width = width + '%';
    }
  }, 10);


  //header
    document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.querySelector('.hero-slide');
    if (heroText) {
      // Slight delay to ensure visibility
      setTimeout(() => {
        heroText.classList.add('slide-in');
      }, 800); 
    }
  });

  //responsive
  const toggleButton = document.getElementById("menu-toggle");
  const closeButton = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  closeButton.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });

  // Optional: Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !toggleButton.contains(e.target)) {
      mobileMenu.classList.add("hidden");
    }
  });












  




 