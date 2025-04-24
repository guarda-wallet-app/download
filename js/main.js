// Initialize product buttons and form handling
document.addEventListener('DOMContentLoaded', function() {
  // Handle product button clicks to scroll to contact form
  const productButtons = document.querySelectorAll('.product-button');
  
  productButtons.forEach(button => {
    button.addEventListener('click', function() {
      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Handle contact form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Display confirmation message
      alert(`Thank you, ${name}! Your message has been received. We'll contact you at ${email} shortly.`);
      
      // Reset form
      contactForm.reset();
    });
  }

  // Smooth scrolling for all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});