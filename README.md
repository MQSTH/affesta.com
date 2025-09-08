# AFFESTA VOL. 1 - Al Falah Festival

A modern, responsive website for the Al Falah Festival (AFFESTA) - an annual event organized by Ikatan Pelajar Madrasah Al Falah (IPMA) focusing on skills and arts competitions.

## Theme: Åšaktisamyogah

The Sanskrit term "Åšaktisamyogah" represents the unification of spiritual energy and inner strength to achieve higher consciousness and enlightenment - symbolizing the unity between organizers and participants from various schools.

## Features

### Visual Design
- **Modern Responsive Design**: Optimized for all devices from mobile to desktop
- **Symbolic Color Scheme**:
  - Purple: Creativity, spirituality, and wisdom
  - Orange: Warmth, enthusiasm, and optimism
- **Traditional Elements**: Incorporates Batik Parang motifs and Indonesian cultural symbols

### Navigation
- Fixed navigation bar with scroll effects
- Mobile-friendly hamburger menu
- Smooth scrolling between sections
- Social media floating widget

### Real-time Countdown
- Live countdown to event date (September 26, 2025)
- Responsive grid layout
- Glassmorphism design elements

### Interactive Components
- Toggle buttons for different competition levels (SMP/SMA)
- Dynamic content switching for contact information
- Animated elements with intersection observer
- Touch-optimized interactions for mobile devices

### Competition Categories
1. **Ratoh Jaroe** (SMP & SMA levels)
2. **Hadroh Banjari**
3. **Scout Skill Competition** (SMP & SMA levels)

## Technical Stack

- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Modern features including CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: No framework dependencies for optimal performance
- **Responsive Design**: Mobile-first approach with breakpoints at 320px, 375px, 425px, and 768px

## File Structure

```
├── index.html              # Main HTML file
├── style/
│   ├── style.css          # Main stylesheet
│   └── img/               # Image assets
│       ├── logo/          # Logo files
│       ├── background/    # Background images
│       └── icon/          # Competition icons
└── script/
    └── index.js           # JavaScript functionality
```

## Key JavaScript Features

### Countdown Timer
```javascript
function updateCountdown() {
  const targetDate = new Date("2025-09-26T08:00:00+07:00").getTime();
  // Real-time countdown calculation
}
```

### Mobile Menu System
- Hamburger menu with smooth animations
- Touch gesture support
- Accessibility features (keyboard navigation, focus management)

### Dynamic Content Switching
- Toggle between SMP and SMA competition information
- Real-time URL and content updates
- Smooth transitions and animations

## CSS Highlights

### Custom Properties
```css
:root {
  --yellow: #efb200;
  --purple: #aa00f9;
  --light-gray: #efefef;
  --dark-gray: #262626;
}
```

### Modern CSS Features
- CSS Grid for responsive layouts
- Flexbox for component alignment
- CSS transforms and transitions
- Backdrop filters for glassmorphism effects
- Custom scrollbar styling

## Responsive Breakpoints

- **320px**: Mobile small
- **375px**: Mobile medium  
- **425px**: Mobile large
- **768px**: Tablet and up

## Accessibility Features

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast mode support
- Reduced motion preferences respected
- Touch target sizes meet accessibility guidelines (44px minimum)

## Browser Support

- Modern browsers supporting ES6+
- CSS Grid and Flexbox
- Intersection Observer API
- Touch events

## Performance Optimizations

- Lazy loading for background images
- Efficient event listeners with passive options
- Intersection Observer for animations
- Optimized image formats and sizes
- Minimal JavaScript bundle

## Security Features

- Content Security Policy considerations
- XSS prevention measures
- Input validation for forms

## Form Handling

The registration form includes:
- School name input
- Participant name input
- Competition category selection
- Client-side validation
- Loading states for better UX

## Installation & Usage

1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build process required - pure HTML/CSS/JS

## Development Notes

- Uses modern CSS features - ensure browser compatibility
- JavaScript uses ES6+ syntax
- All images should be optimized for web
- Consider implementing actual form submission backend

## Future Enhancements

- Backend integration for form submissions
- Content Management System integration
- Multi-language support
- Progressive Web App features
- Advanced animations with CSS/JS libraries

## Copyright

© 2025 gigimerah - All rights reserved.

## Contact

For technical inquiries about this website, please refer to the contact persons listed for each competition category on the live site.
