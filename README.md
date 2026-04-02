# K&S Construction and Cabinets LLC — Web Portal

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[brown9804](https://github.com/brown9804)

Last updated: 2026-04-02

----------

> A modern, elegant single-page website for **K&S Construction and Cabinets LLC**, an Orlando contractor specializing in cabinet installation with 12 years of experience and 1,600+ installations. Built with vanilla HTML, CSS, and JavaScript, no frameworks, no dependencies.

## Overview

This is a fully static, responsive marketing website featuring:

- Fixed frosted-glass navbar with mobile hamburger menu
- Full-viewport hero section with animated scroll indicator
- Animated stats counter strip (1,600+ installs, 12 years, satisfaction, growth)
- Services grid with hover animations (kitchens, bathrooms, entertainment, drop zones, dining, crown molding)
- About section with credentials (General Liability, W-9 available)
- Masonry-style project portfolio grid with real project images
- Testimonials carousel with pagination
- Contact form with client-side validation
- Responsive footer with navigation and social links

## Branding

| Token | Value |
| --- | --- |
| Primary Green | `#09B44B` |
| Charcoal | `#27302C` |
| Navy | `#071B33` |
| Background | `#FFFFFF` |
| Text | `#27302C` |
| Display Font | Bebas Neue |
| Body Font | Inter |

## File Structure

```
ks_construction-webportal/
├── assets/
│   └── images/
│       ├── ks-brand-cover.png
│       ├── portfolio-intro.png
│       ├── our-services.png
│       ├── experience.png
│       ├── projects-grid.png
│       └── contact-info.png
├── .github/
│   ├── workflows/
│   │   ├── deploy-pages.yml
│   │   └── use-visitor-counter.yml
│   └── scripts/
│       └── update_visitor_counter.js
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
- **Project images**: replace project card inline `background-image` URLs or update files in `assets/images/`.
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
