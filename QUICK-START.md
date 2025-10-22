# Quick Customization Guide

## 🎯 Most Common Updates

### 1. Update Your Social Media Links
**File**: `HTML/index.html`

Find these lines (appears twice - in navbar and contact section):
```html
<a href="https://facebook.com" target="_blank">          <!-- Update with your Facebook URL -->
<a href="https://linkedin.com" target="_blank">          <!-- Update with your LinkedIn URL -->
```

### 2. Update Contact Information
**File**: `HTML/index.html`

Find the footer section:
```html
<div><i class="fa-solid fa-phone"></i> +46</div>         <!-- Add your full phone number -->
```

### 3. Add Your Projects
**File**: `HTML/index.html`

Replace the project cards (around line 130-180):
```html
<div class="project-card">
  <div class="project-image">
    <img src="../IMAGES/your-project.jpg" alt="Your Project">  <!-- Add your image -->
  </div>
  <div class="project-info">
    <h3>Your Project Title</h3>                                <!-- Change title -->
    <p>Your project description here</p>                       <!-- Change description -->
    <div class="project-tags">
      <span>Tag 1</span>                                       <!-- Change tags -->
      <span>Tag 2</span>
    </div>
  </div>
</div>
```

### 4. Change Colors
**File**: `CSS/style.css`

Find the `:root` section (top of file):
```css
:root {
  --primary-color: #FFC107;      /* Change to your preferred color */
}
```

### 5. Update Resume Button
**File**: `HTML/index.html`

Find the resume button:
```html
<button class="btn-outline" data-key="resume" onclick="window.open('resume.pdf', '_blank')">
```

Place your resume PDF in the PORTFOLIO folder as `resume.pdf`

### 6. Modify About Me Text
**File**: `JAVASCRIPT/script.js`

Find the translations object:
```javascript
en: {
  "about-text": "Your custom about text here...",
  "about-text2": "More about you...",
}
```

## 🖼️ Adding Project Images

1. Save your project images in the `IMAGES` folder
2. Reference them in HTML like this:
```html
<img src="../IMAGES/project-name.jpg" alt="Project description">
```

**Recommended image sizes:**
- Project thumbnails: 800x600px
- Hero image: 500x600px
- Optimize for web (use TinyPNG.com)

## 🌐 Language Translations

**File**: `JAVASCRIPT/script.js`

Add or modify translations in the `translations` object:
```javascript
en: {
  "about": "About Me",
  // ... all English text
},
sv: {
  "about": "Om Mig",
  // ... all Swedish text
}
```

## 🎨 Font Changes

**File**: `CSS/style.css`

Current fonts:
- Headings: Playfair Display
- Body: Poppins

To change, update in `HTML/index.html` and `CSS/style.css`:
```css
--font-primary: 'Your-Font', sans-serif;
--font-display: 'Your-Display-Font', serif;
```

## 📱 Test Your Portfolio

1. **Desktop**: Open index.html in browser
2. **Mobile**: Open browser DevTools (F12) → Toggle device toolbar
3. **Different browsers**: Test in Chrome, Firefox, Safari

## 🚀 Publishing Your Portfolio

### Option 1: GitHub Pages (Free & Easy)
1. Create GitHub account
2. Create new repository
3. Upload all files
4. Settings → Pages → Enable
5. Your site: `https://yourusername.github.io/portfolio`

### Option 2: Netlify (Drag & Drop)
1. Go to netlify.com
2. Drag PORTFOLIO folder to deploy
3. Free custom domain available

## ✅ Pre-Launch Checklist

- [ ] Updated all social media links
- [ ] Added real project images and descriptions
- [ ] Updated contact information
- [ ] Added resume PDF
- [ ] Tested all links
- [ ] Checked on mobile devices
- [ ] Tested both English and Swedish
- [ ] Verified all images load correctly
- [ ] Spell-checked all text
- [ ] Tested contact form (if connected)

## 🆘 Troubleshooting

**Images not loading?**
- Check file path: `../IMAGES/filename.jpg`
- Make sure image is in IMAGES folder
- Check file extension (.jpg, .png, etc.)

**Language not switching?**
- Open browser console (F12)
- Look for JavaScript errors
- Clear browser cache

**Layout looks broken?**
- Check CSS file is loading
- Clear browser cache
- Try different browser

**Contact form not working?**
- Form needs backend integration (see README.md)
- Consider EmailJS or Formspree

## 📧 Need Help?

Email: paloma.inostroza96@gmail.com

---

**Remember**: Your portfolio represents you professionally. Keep it updated with your latest work!
