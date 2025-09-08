# AFFESTA VOL. 1
### Al Falah Festival - Official Website

<p align="center">
  <img src="[https://via.placeholder.com/400x200/AA00F9/FFFFFF?text=AFFESTA+VOL.1](https://raw.githubusercontent.com/MQSTH/affesta.com/refs/heads/main/style/img/logo/lg_n_bg.png)" alt="AFFESTA Logo" width="400">
</p>

<p align="center">
  <strong>Åšaktisamyogah</strong> - Unification of spiritual energy and inner strength
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Event%20Date-September%2026,%202025-purple?style=flat-square" alt="Event Date">
  <img src="https://img.shields.io/badge/Tech-HTML5%20|%20CSS3%20|%20JavaScript-orange?style=flat-square" alt="Technology Stack">
  <img src="https://img.shields.io/badge/Responsive-Mobile%20First-green?style=flat-square" alt="Responsive Design">
</p>

---

## About AFFESTA

AFFESTA (Al Falah Festival) is an innovative annual event organized by **Ikatan Pelajar Madrasah Al Falah (IPMA) Komisariat Aliyah**, evolving from the 7-year running ASA (Al Falah Sport and Art) program. This festival focuses specifically on **skills and arts competitions**, bringing together students from various schools in a celebration of creativity and talent.

The Sanskrit theme **"Åšaktisamyogah"** represents the unification of spiritual energy between organizers and participants, symbolizing the collective strength that emerges when diverse communities come together.

---

## Live Preview

**Event Countdown**: September 26, 2025 at 08:00 WIB

```
Days  Hours  Minutes  Seconds
 018    14      32       45
```

---

## Competition Categories

| Competition | Level | Registration |
|-------------|--------|--------------|
| **Ratoh Jaroe** | SMP & SMA | Open |
| **Hadroh Banjari** | All Levels | Open |
| **Scout Skill Competition** | SMP & SMA | Open |

---

## Technical Overview

### Architecture
```
Frontend-Only Application
├── Pure HTML5 (Semantic markup)
├── Modern CSS3 (Grid, Flexbox, Custom Properties)
└── Vanilla JavaScript (ES6+, No frameworks)
```

### Key Features

**Responsive Design System**
- Mobile-first approach with 4 breakpoints
- Touch-optimized interactions
- Adaptive layouts for all screen sizes

**Interactive Elements**
- Real-time countdown timer with automatic updates
- Dynamic content switching (SMP/SMA toggle system)
- Floating social media widget with smooth animations
- Progressive form validation

**Performance Optimizations**
- Lazy loading for background images
- Intersection Observer API for animations
- Passive event listeners
- Optimized asset delivery

---

## Design Philosophy

### Color Psychology
```css
Primary Colors:
--purple: #aa00f9    /* Creativity, spirituality, wisdom */
--orange: #efb200    /* Warmth, enthusiasm, optimism */

Supporting Colors:
--light-gray: #efefef
--dark-gray: #262626
```

### Cultural Elements
- **Batik Parang Motifs**: Traditional Indonesian patterns symbolizing perseverance
- **Garuda Elements**: Representing strength and national identity
- **Lightning/Thunder**: Symbolizing energy and transformation
- **Leaf Patterns**: Representing interconnectedness and growth

---

## File Structure

```
affesta-website/
│
├── index.html                 # Main application entry point
├── style/
│   ├── style.css             # Complete styling system
│   └── img/                  # Optimized image assets
│       ├── logo/             # Brand identity files
│       ├── background/       # Section backgrounds
│       └── icon/            # Competition category icons
│
└── script/
    └── index.js              # Application logic & interactions
```

---

## Browser Compatibility

| Feature | Support |
|---------|---------|
| **CSS Grid** | Chrome 57+, Firefox 52+, Safari 10.1+ |
| **CSS Custom Properties** | Chrome 49+, Firefox 31+, Safari 9.1+ |
| **Intersection Observer** | Chrome 51+, Firefox 55+, Safari 12.1+ |
| **ES6 Features** | Chrome 51+, Firefox 54+, Safari 10+ |

---

## Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **JavaScript Bundle**: ~15KB (unminified)
- **CSS Bundle**: ~25KB (unminified)

---

## Accessibility Standards

### WCAG 2.1 Compliance
- **Color Contrast**: AAA rating (7:1 minimum)
- **Touch Targets**: 44px minimum size
- **Keyboard Navigation**: Full support with focus management
- **Screen Reader**: Semantic HTML with ARIA labels
- **Motion Preferences**: Respects `prefers-reduced-motion`

### Responsive Breakpoints
```css
Mobile Small:   320px - 374px
Mobile Medium:  375px - 424px  
Mobile Large:   425px - 767px
Tablet+:        768px and up
```

---

## Installation & Setup

### Quick Start
```bash
# Clone the repository
git clone https://github.com/yourusername/affesta-website.git

# Navigate to project directory
cd affesta-website

# Open in browser (no build process required)
open index.html
```

### Development Server (Optional)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve .

# Access at http://localhost:8000
```

---

## JavaScript Architecture

### Core Modules

**Countdown System**
```javascript
// Automatic updates every second
const targetDate = new Date("2025-09-26T08:00:00+07:00");
function updateCountdown() {
  // Real-time calculation and DOM updates
}
```

**Navigation Controller**
```javascript
// Scroll-based navbar transformations
// Mobile menu management with touch gestures
// Smooth scrolling with offset calculations
```

**Content Management**
```javascript
// Dynamic toggle system for competition levels
// Real-time URL and content switching
// Animation state management
```

---

## CSS Features

### Modern Layout Systems
```css
/* CSS Grid for responsive layouts */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

/* Flexbox for component alignment */
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### Advanced Visual Effects
```css
/* Glassmorphism design */
.countdown-item {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Gradient animations */
.submit-btn {
  background: linear-gradient(135deg, var(--purple), var(--yellow));
  transition: all 0.3s ease;
}
```

---

## Security Considerations

### Client-Side Protection
- Input sanitization for form fields
- XSS prevention measures
- Content Security Policy headers (recommended)
- Developer tools access prevention

### Data Handling
- No sensitive data stored in localStorage
- Form validation before submission
- Secure external link handling

---

## Deployment Options

### Static Hosting Platforms
- **Netlify**: Drag & drop deployment
- **Vercel**: Git-b
