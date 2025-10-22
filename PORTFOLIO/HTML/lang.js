// Simple Language System for Portfolio
const translations = {
  en: {
    about: "About Me",
    projects: "Projects",
    contact: "Contact",
    role: "UX/UI Designer Student",
    desc: "I uncover the details others overlook — turning real human needs into intuitive design solutions.",
    hire: "Contact Me",
    resume: "Resumé",
    "about-subtitle": "My Journey into UX/UI Design",
    "about-text": "My journey into UX/UI design began with a deep curiosity about people and how we behave, what motivates us, and how we interact with technology in everyday life. Through my background in various professional roles, I've learned to meet people in many different situations, which has given me a unique understanding of needs and behaviors.",
    "about-text2": "During my studies, I've had the opportunity to translate this understanding into practical projects, working user-centrically and exploring how design can create real value.",
    "about-text3": "Today, I am driven by the ambition to continue growing as a designer and to contribute with solutions that are accessible, engaging, and meaningful — design that not only works, but truly makes a difference.",
    "sneak-peek-title": "Sneak peek of my works",
    "scroll-hint": "Scroll",
    "work-status": "Open for Work",
    "skills-title": "Skills & Tools",
    "projects-completed": "Projects Completed",
    dedication: "Dedication",
    creativity: "Creativity",
    "projects-subtitle": "A selection of my recent work",
    "contact-subtitle": "Let's work together on your next project",
    "email-label": "Email",
    "phone-label": "Phone",
    "location-label": "Location",
    "form-name": "Your Name",
    "form-email": "Your Email",
    "form-subject": "Subject",
    "form-message": "Your Message",
    "send-message": "Send Message",
    rights: "All rights reserved.",
    "footer-tagline": "Designed with ❤️ and attention to detail"
  },
  sv: {
    about: "Om Mig",
    projects: "Projekt",
    contact: "Kontakt",
    role: "UX/UI-designstudent",
    desc: "Jag upptäcker detaljer som andra missar — och omvandlar verkliga behov till intuitiva designlösningar.",
    hire: "Kontakta mig",
    resume: "CV",
    "about-subtitle": "Min Resa in i UX/UI Design",
    "about-text": "Min resa in i UX/UI design började med en djup nyfikenhet på människor och hur vi beter oss, vad som motiverar oss, och hur vi interagerar med teknik i vardagen. Genom min bakgrund i olika professionella roller har jag lärt mig att möta människor i många olika situationer, vilket har gett mig en unik förståelse för behov och beteenden.",
    "about-text2": "Under mina studier har jag haft möjligheten att översätta denna förståelse till praktiska projekt, arbeta användarcentrerat och utforska hur design kan skapa verkligt värde.",
    "about-text3": "Idag drivs jag av ambitionen att fortsätta växa som designer och att bidra med lösningar som är tillgängliga, engagerande och meningsfulla — design som inte bara fungerar, utan verkligen gör skillnad.",
    "sneak-peek-title": "En glimt av mina verk",
    "scroll-hint": "Scrolla",
    "work-status": "Öppen för Arbete",
    "skills-title": "Färdigheter & Verktyg",
    "projects-completed": "Avslutade Projekt",
    dedication: "Dedikation",
    creativity: "Kreativitet",
    "projects-subtitle": "Ett urval av mitt senaste arbete",
    "contact-subtitle": "Låt oss arbeta tillsammans på ditt nästa projekt",
    "email-label": "E-post",
    "phone-label": "Telefon",
    "location-label": "Plats",
    "form-name": "Ditt Namn",
    "form-email": "Din E-post",
    "form-subject": "Ämne",
    "form-message": "Ditt Meddelande",
    "send-message": "Skicka Meddelande",
    rights: "Alla rättigheter förbehållna.",
    "footer-tagline": "Designad med ❤️ och uppmärksamhet på detaljer"
  }
};

// Apply language to page
function applyLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}

// Load and apply saved language on page load
(function() {
  const savedLang = localStorage.getItem('siteLang') || 'en';
  applyLanguage(savedLang);
  
  const selector = document.getElementById('language');
  if (selector) {
    selector.value = savedLang;
    selector.addEventListener('change', function() {
      localStorage.setItem('siteLang', this.value);
      applyLanguage(this.value);
    });
  }
})();
