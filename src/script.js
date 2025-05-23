 


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
// Show booking modal on 'Book Now' button click
document.querySelectorAll("button").forEach(btn => {
  if (btn.textContent.includes("Book Now")) {
    btn.addEventListener("click", () => {
      const modal = document.getElementById("bookingModal");
      if (modal) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    });
  }
});

// Close modal function
function closeModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// Prevent letters and limit to 10 digits only
const contactInput = document.getElementById("contactNumber");
if (contactInput) {
  contactInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "").slice(0, 10);
  });
}

// Booking form validation on submit
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    const phoneNumber = contactInput.value.trim();
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phoneNumber)) {
      e.preventDefault();
      alert("Contact number must be exactly 10 digits and contain digits only.");
      contactInput.focus();
    }
  });
}



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












  




 