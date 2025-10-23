// ===============================================
// MULTI-LANGUAGE SUPPORT
// ===============================================

const translations = {
  en: {
    about: "About Me",
    projects: "Projects",
    contact: "Contact",
    role: "I am a UX/UI Designer Student",
    desc: "I uncover the details others overlook — turning real human needs into intuitive design solutions.",
    hire: "Hire Me",
    resume: "Resumé",
    
    // About Section
    "about-subtitle": "Passionate UX/UI Designer",
    "about-text": "I'm a UX/UI design student based in Uppsala, Sweden, with a passion for creating meaningful digital experiences. My approach combines empathy-driven research with creative problem-solving to design solutions that truly resonate with users.",
    "about-text2": "I believe great design is invisible — it simply works. My goal is to craft intuitive interfaces that make people's lives easier and more enjoyable.",
    "skills-title": "Skills & Tools",
    "projects-completed": "Projects Completed",
    dedication: "Dedication",
    creativity: "Creativity",
    
    // Projects Section
    "projects-subtitle": "A selection of my recent work",
    "project1-title": "Travel Social App",
    "project1-desc": "Mobile app design for connecting travelers worldwide",
    "project2-title": "Analytics Dashboard",
    "project2-desc": "Data visualization platform for business insights",
    "project3-title": "E-Commerce Redesign",
    "project3-desc": "Modern shopping experience with enhanced UX",
    
    // Contact Section
    "contact-subtitle": "Let's work together on your next project",
    "email-label": "Email",
    "phone-label": "Phone",
    "location-label": "Location",
    "form-name": "Your Name",
    "form-email": "Your Email",
    "form-subject": "Subject",
    "form-message": "Your Message",
    "send-message": "Send Message",
    
    // Footer
    rights: "All rights reserved.",
    "footer-tagline": "Designed with ❤️ and attention to detail"
  },
  
  sv: {
    about: "Om Mig",
    projects: "Projekt",
    contact: "Kontakt",
    role: "Jag är UX/UI-designstudent",
    desc: "Jag upptäcker detaljer som andra missar — och omvandlar verkliga behov till intuitiva designlösningar.",
    hire: "Anlita mig",
    resume: "CV",
    
    // About Section
    "about-subtitle": "Passionerad UX/UI Designer",
    "about-text": "Jag är en UX/UI designstudent baserad i Uppsala, Sverige, med en passion för att skapa meningsfulla digitala upplevelser. Min metod kombinerar empatidrivna undersökningar med kreativ problemlösning för att designa lösningar som verkligen resonerar med användare.",
    "about-text2": "Jag tror att bra design är osynlig — den fungerar helt enkelt. Mitt mål är att skapa intuitiva gränssnitt som gör människors liv enklare och mer njutbart.",
    "skills-title": "Färdigheter & Verktyg",
    "projects-completed": "Avslutade Projekt",
    dedication: "Dedikation",
    creativity: "Kreativitet",
    
    // Projects Section
    "projects-subtitle": "Ett urval av mitt senaste arbete",
    "project1-title": "Rese-Social App",
    "project1-desc": "Mobilappdesign för att koppla samman resenärer världen över",
    "project2-title": "Analytics Dashboard",
    "project2-desc": "Datavisualiseringsplattform för affärsinsikter",
    "project3-title": "E-handelsomdesign",
    "project3-desc": "Modern shoppingupplevelse med förbättrad UX",
    
    // Contact Section
    "contact-subtitle": "Låt oss arbeta tillsammans på ditt nästa projekt",
    "email-label": "E-post",
    "phone-label": "Telefon",
    "location-label": "Plats",
    "form-name": "Ditt Namn",
    "form-email": "Din E-post",
    "form-subject": "Ämne",
    "form-message": "Ditt Meddelande",
    "send-message": "Skicka Meddelande",
    
    // Footer
    rights: "Alla rättigheter förbehållna.",
    "footer-tagline": "Designad med ❤️ och uppmärksamhet på detaljer"
  }
};

// ===============================================
// LANGUAGE SWITCHING FUNCTION
// ===============================================

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      // Handle input/textarea placeholders
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  localStorage.setItem("language", lang);
}

// ===============================================
// INITIALIZE ON PAGE LOAD
// ===============================================

window.onload = function () {
  const lang = localStorage.getItem("language") || "en";
  setLanguage(lang);
  document.getElementById("language").value = lang;
  
  // Initialize other features
  initSmoothScroll();
  initContactForm();
  initScrollAnimations();
  initNavbarScroll();
};

// ===============================================
// SMOOTH SCROLL FOR NAVIGATION
// ===============================================

function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-center a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===============================================
// CONTACT FORM HANDLING
// ===============================================

function initContactForm() {
  const form = document.querySelector('.contact-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      
      // Show success message
      showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
      
      // Reset form
      form.reset();
    });
  }
}

// ===============================================
// NOTIFICATION SYSTEM
// ===============================================

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#10B981' : '#3B82F6'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    animation: slideInRight 0.3s ease;
    max-width: 350px;
    font-family: var(--font-primary);
  `;
  notification.textContent = message;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Remove after 4 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 4000);
}

// ===============================================
// SCROLL ANIMATIONS
// ===============================================

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe sections
  const sections = document.querySelectorAll('.about, .projects, .contact');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
  });
  
  // Observe project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });
}

// ===============================================
// NAVBAR SCROLL EFFECT
// ===============================================

function initNavbarScroll() {
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 100) {
      navbar.style.background = 'rgba(13, 27, 42, 0.95)';
      navbar.style.backdropFilter = 'blur(10px)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    } else {
      navbar.style.background = 'transparent';
      navbar.style.backdropFilter = 'none';
      navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
}

// ===============================================
// TYPING ANIMATION (Optional Enhancement)
// ===============================================

function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// ===============================================
// CURSOR FOLLOWER (Optional Enhancement)
// ===============================================

function initCursorFollower() {
  const cursor = document.createElement('div');
  cursor.className = 'cursor-follower';
  cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.1s ease;
    display: none;
  `;
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
  });
  
  // Enlarge on hover over interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .project-card');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
      cursor.style.backgroundColor = 'rgba(255, 193, 7, 0.1)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.backgroundColor = 'transparent';
    });
  });
}

// Uncomment to enable cursor follower on desktop
// if (window.innerWidth > 1024) {
//   initCursorFollower();
// }

// ===============================================
// PARTICLE BACKGROUND (Optional Enhancement)
// ===============================================

function createParticles() {
  const hero = document.querySelector('.hero');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 1}px;
      height: ${Math.random() * 4 + 1}px;
      background: rgba(255, 193, 7, ${Math.random() * 0.5 + 0.2});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
    `;
    hero.appendChild(particle);
  }
}

// Uncomment to enable particles
// createParticles();

// ===============================================
// PERFORMANCE OPTIMIZATION
// ===============================================

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });
  
  const images = document.querySelectorAll('img[data-src]');
  images.forEach(img => imageObserver.observe(img));
}

// ===============================================
// UTILITY FUNCTIONS
// ===============================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ===============================================
// ACCESSIBILITY ENHANCEMENTS
// ===============================================

// Skip to content link
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab' && !e.shiftKey) {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.focus();
    }
  }
});

// Focus trap for modals (if you add modals later)
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];
  
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  });
}

// Console greeting for developers
console.log(
  '%c👋 Hello Developer! ',
  'color: #FFC107; font-size: 20px; font-weight: bold;'
);
console.log(
  '%cLooking for something? Feel free to reach out at paloma.inostroza96@gmail.com',
  'color: #666; font-size: 14px;'
);
