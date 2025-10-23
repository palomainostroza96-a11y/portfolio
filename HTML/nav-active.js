// Icon Navigation Active State Handler
(function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.icon-nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  // Function to update active state based on scroll position
  function updateActiveState() {
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      // Check if section is in viewport
      if (window.scrollY >= (sectionTop - 200)) {
        currentSection = section.getAttribute('id');
      }
    });
    
    // Update active class on nav links
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      
      if (href === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
  
  // Add click handlers to nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remove active from all
      navLinks.forEach(l => l.classList.remove('active'));
      // Add active to clicked
      this.classList.add('active');
    });
  });
  
  // Update on scroll
  window.addEventListener('scroll', updateActiveState);
  
  // Update on load
  updateActiveState();
})();
