# Paloma Inostroza - UX/UI Designer Portfolio

A highly professional, modern portfolio website showcasing UX/UI design work with multi-language support (English/Swedish).

## ✨ Features

### Design & UX
- **Professional Hero Section** with animated elements and gradient background
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Fade-in effects, hover states, and scroll animations
- **Modern Typography** - Combination of Poppins and Playfair Display fonts
- **Color Scheme** - Professional dark blue gradient with amber yellow (#FFC107) accents

### Functionality
- **Multi-Language Support** - Toggle between English and Swedish
- **Smooth Scrolling** - Seamless navigation between sections
- **Contact Form** - Ready for integration with backend service
- **Scroll Animations** - Elements animate into view as you scroll
- **Interactive Navigation** - Hover effects and active states

### Sections
1. **Hero** - Eye-catching introduction with your name, role, and CTA buttons
2. **About** - Personal introduction, skills showcase, and statistics
3. **Projects** - Portfolio grid with project cards and hover effects
4. **Contact** - Contact form and information with social links
5. **Footer** - Professional footer with copyright

## 📁 Project Structure

```
PORTFOLIO/
│
├── HTML/
│   └── index.html          # Main HTML file
│
├── CSS/
│   └── style.css           # All styles and animations
│
├── JAVASCRIPT/
│   └── script.js           # Interactive features and language switching
│
└── IMAGES/
    └── plums.png.png       # Your portrait image
```

## 🚀 Getting Started

### 1. Open the Portfolio
Simply open `HTML/index.html` in your web browser.

### 2. Customize Content

#### Update Personal Information
In `HTML/index.html`, find and update:
- Your social media links (Facebook, LinkedIn)
- Your email address
- Your phone number
- Your location

#### Add Your Resume
- Place your resume PDF in the root folder as `resume.pdf`
- Or update the button onclick in the HTML to point to your resume location

#### Add Project Images
Replace the placeholder images in the Projects section with your actual project screenshots:
```html
<img src="../IMAGES/your-project-image.jpg" alt="Project Name">
```

#### Update Project Information
Edit the project titles, descriptions, and tags to match your actual work.

### 3. Customize Colors (Optional)

In `CSS/style.css`, you can modify the color scheme in the `:root` section:

```css
:root {
  --primary-color: #FFC107;      /* Main accent color */
  --primary-dark: #FFA000;       /* Darker shade */
  --primary-light: #FFECB3;      /* Lighter shade */
  /* ... other colors ... */
}
```

## 🌍 Language Support

The portfolio supports **English** and **Swedish**. To add more languages:

1. Open `JAVASCRIPT/script.js`
2. Find the `translations` object
3. Add a new language object following the same structure:

```javascript
const translations = {
  en: { /* English translations */ },
  sv: { /* Swedish translations */ },
  es: { /* Spanish translations (example) */
    about: "Sobre Mí",
    projects: "Proyectos",
    // ... add all keys
  }
};
```

4. Add the language option in `HTML/index.html`:
```html
<select id="language" onchange="setLanguage(this.value)">
  <option value="en">English</option>
  <option value="sv">Svenska</option>
  <option value="es">Español</option>
</select>
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px - Full layout with side-by-side sections
- **Tablet**: 768px - 1024px - Stacked layout with adjusted spacing
- **Mobile**: < 768px - Single column, optimized navigation
- **Small Mobile**: < 480px - Further optimized for small screens

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Yellow | `#FFC107` | Buttons, accents, highlights |
| Dark Blue | `#0D1B2A` | Hero background, text |
| Medium Blue | `#1B263B` | Gradients, cards |
| Light Gray | `#F9FAFB` | Backgrounds, sections |
| White | `#FFFFFF` | Cards, text on dark |

## 🔧 Technical Details

### Fonts
- **Primary**: Poppins (Google Fonts)
- **Display**: Playfair Display (Google Fonts)

### Icons
- Font Awesome 6.5.1 (via CDN)

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 To-Do / Future Enhancements

- [ ] Connect contact form to backend (EmailJS, Formspree, or custom API)
- [ ] Add actual project case studies
- [ ] Add resume/CV download functionality
- [ ] Add blog section (optional)
- [ ] Implement dark mode toggle (optional)
- [ ] Add loading animation
- [ ] Optimize images for web
- [ ] Add SEO meta tags
- [ ] Set up Google Analytics

## 📧 Contact Form Integration

The contact form is ready but needs a backend service. Here are some options:

### Option 1: EmailJS (Recommended - Free)
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Add this script in `index.html` before closing `</body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
3. Update the form handler in `script.js`

### Option 2: Formspree
1. Sign up at [formspree.io](https://formspree.io/)
2. Update the form action in HTML

### Option 3: Custom Backend
Create your own API endpoint and connect it to the form.

## 🎯 Tips for Best Results

1. **Add Real Projects**: Replace placeholder images with high-quality screenshots
2. **Write Compelling Copy**: Update descriptions to showcase your unique value
3. **Optimize Images**: Compress images before uploading (use TinyPNG or similar)
4. **Test Responsiveness**: Check on multiple devices and screen sizes
5. **Update Links**: Make sure all social media and contact links work
6. **SEO**: Add meta descriptions and Open Graph tags
7. **Performance**: Use browser DevTools to check load times

## 🚀 Deployment

### GitHub Pages (Free)
1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages in repository settings
4. Access at `https://yourusername.github.io/repository-name`

### Netlify (Free)
1. Sign up at [netlify.com](https://www.netlify.com/)
2. Drag and drop your PORTFOLIO folder
3. Get instant deployment with custom domain support

### Vercel (Free)
1. Sign up at [vercel.com](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with zero configuration

## 📄 License

This portfolio is created for Paloma Inostroza. Feel free to use it as inspiration, but please don't copy it directly.

## 🙏 Credits

- **Design & Development**: Created with attention to detail and professional standards
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins, Playfair Display)
- **Placeholder Images**: Unsplash

---

**Built with ❤️ and attention to detail**

For questions or support, contact: paloma.inostroza96@gmail.com
