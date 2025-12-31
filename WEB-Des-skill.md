---
name: web-designer
description: Generate complete, responsive web pages (HTML/CSS/JavaScript) from descriptions. Use when the user requests front-end web development, landing pages, portfolio sites, or responsive web designs. Creates semantic HTML5, mobile-first CSS, and vanilla JavaScript.
---

# Web Designer

Generate production-ready, responsive web pages using vanilla HTML5, CSS3, and JavaScript. Creates semantic, accessible, and mobile-first web designs for landing pages, portfolios, galleries, and web applications.

## When to Use This Skill

Claude will automatically invoke this skill when:
- User requests creation of a web page, landing page, or website
- User asks to build a front-end interface or UI
- User needs a responsive web design or mobile-friendly page
- User requests a portfolio site, gallery, form page, or similar web project
- User mentions HTML, CSS, or vanilla JavaScript web development
- User asks to create a static website or web prototype

## Instructions

### Step 1: Gather Requirements

Collect the following information from the user:
- **Purpose**: Type of page (landing page, portfolio, gallery, etc.)
- **Content**: Text, images, sections needed
- **Style preferences**: Color scheme, design style
- **Features**: Forms, galleries, animations, interactive elements

If information is missing, ask clarifying questions using the AskUserQuestion tool.

### Step 2: Plan the Structure

Design the page architecture using:
- **Semantic HTML5**: Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Responsive layout**: Mobile-first approach with breakpoints (768px tablet, 1024px desktop)
- **Components**: Identify header, hero, content sections, footer

### Step 3: Generate HTML File

Create HTML with proper structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[SEO description]">
    <title>[Page Title]</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav><!-- Navigation --></nav>
    </header>
    <main>
        <section id="hero"><!-- Hero section --></section>
        <section id="content"><!-- Main content --></section>
    </main>
    <footer><!-- Footer --></footer>
    <script src="script.js"></script>
</body>
</html>
```

**Key principles**:
- Include DOCTYPE, charset, viewport meta tags
- Use semantic HTML5 elements
- Add descriptive alt text for images
- Include ARIA labels for accessibility

### Step 4: Create Responsive CSS

Generate CSS file with mobile-first methodology:

```css
/* CSS Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* CSS Variables */
:root {
    --primary-color: #2c3e50;
    --accent-color: #e74c3c;
    --text-color: #333;
    --bg-color: #f4f4f4;
}

/* Base Styles (Mobile First) */
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
}

/* Tablet */
@media (min-width: 768px) {
    /* Tablet styles */
}

/* Desktop */
@media (min-width: 1024px) {
    /* Desktop styles */
}
```

**CSS best practices**:
- Use CSS custom properties for colors and spacing
- Mobile-first responsive design
- CSS Grid or Flexbox for layouts
- Smooth transitions for interactive elements

### Step 5: Add JavaScript Functionality

Create JavaScript file for interactivity:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize functionality
    setupNavigation();
    setupFormValidation();
});

function setupNavigation() {
    // Smooth scrolling, mobile menu, etc.
}

function setupFormValidation() {
    // Form validation logic
}
```

**JavaScript guidelines**:
- Use modern ES6+ syntax
- Add event listeners for user interactions
- Ensure progressive enhancement
- Add comments for complex logic

### Step 6: Organize Files and Provide Preview

Structure the project files:
```
project-name/
├── index.html
├── styles.css
├── script.js
└── images/ (if needed)
```

Offer to start a local preview server:
```bash
python -m http.server 8000
# Open: http://localhost:8000
```

## Examples

### Example 1: Simple Landing Page

**User Request**: "Create a landing page for a restaurant"

**Generated Files**:
- `index.html` with header, hero section, menu preview, contact form, footer
- `styles.css` with responsive design, custom color scheme
- `script.js` with smooth scrolling and form validation

### Example 2: Portfolio Page

**User Request**: "Build a portfolio website with image gallery"

**Generated Files**:
- `index.html` with navigation, about section, gallery grid, contact section
- `styles.css` with CSS Grid gallery layout, hover effects
- `script.js` with lightbox functionality for images

## Best Practices

**HTML**:
- Use semantic elements for better accessibility and SEO
- Maintain proper heading hierarchy (h1 → h2 → h3)
- Include meta description for SEO

**CSS**:
- Mobile-first responsive design
- Use CSS Grid for two-dimensional layouts
- Use Flexbox for one-dimensional layouts
- CSS variables for maintainable color schemes

**JavaScript**:
- Use `const` and `let` instead of `var`
- Validate user input
- Ensure core functionality works without JavaScript

**Accessibility**:
- All images have alt text
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)

## Notes

- Files are organized in project directory using Write tool
- Python 3 required for local preview server
- No external dependencies - uses vanilla HTML/CSS/JS only
- Progressive enhancement approach - page works without JavaScript
- Responsive design tested across mobile, tablet, desktop breakpoints
