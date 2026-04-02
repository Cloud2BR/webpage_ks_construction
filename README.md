# K&S Construction Cabinets LLC — Website

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[brown9804](https://github.com/brown9804)

Last updated: 2026-04-02

----------

> A modern, elegant single-page website for **KS Construction**, a professional construction company. Built with vanilla HTML, CSS, and JavaScript, no frameworks, no dependencies.

## Overview

This is a fully static, responsive marketing website featuring:

- Fixed frosted-glass navbar with mobile hamburger menu
- Full-viewport hero section with animated scroll indicator
- Animated stats counter strip (projects, years, satisfaction, team)
- Services grid with hover animations
- About section with a years-of-experience badge
- Masonry-style project portfolio grid
- Testimonials carousel with pagination
- Contact form with client-side validation
- Responsive footer with navigation and social links

## Branding

| Token | Value |
| --- | --- |
| Primary Gold | `#C9A84C` |
| Background | `#0B0B0B` |
| Surface | `#1A1A1A` |
| Text | `#E0E0E0` |
| Display Font | Bebas Neue |
| Body Font | Inter |

## File Structure

```
webpage_ks_construction/
├── index.html   # Full page markup
├── style.css    # All styles (CSS custom properties, responsive)
├── script.js    # Navbar scroll, counters, carousel, form validation
└── README.md
```

## Usage

> This site is set up to publish through GitHub Pages using `.github/workflows/deploy-pages.yml`

- Push changes to `main` to trigger the deployment workflow.
- Make sure the repository Pages source is set to GitHub Actions.
- For local preview during development, open `index.html` directly in a browser.


> [!NOTE]
> To connect the contact form to a real backend, replace the `setTimeout` simulation inside `script.js` with a `fetch` call to your endpoint, for example Formspree or your own API.

## Customization

- **Phone / Email / Address**: update the contact details in `index.html` inside the `.contact-details` list.
- **Project images**: replace the CSS gradient placeholders (`.project-img-1` → `.project-img-4`) with real `background-image` URLs.
- **Stats numbers**: update the `data-target` attributes on `.stat-num` elements in `index.html`.
- **Testimonials**: edit or add `.testimonial-card` blocks in `index.html`.

## Social

Instagram: [@ks_construction_](https://www.instagram.com/ks_construction_/)

<!-- START BADGE -->
<div align="center">
  <img src="https://img.shields.io/badge/Total%20views-1580-limegreen" alt="Total views">
  <p>Refresh Date: 2026-04-02</p>
</div>
<!-- END BADGE -->
