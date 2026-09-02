# Hapi Website Summary

Last updated: 2 September 2026

## Project

Hapi is a responsive charcoal briquette website for a young, playful, premium BBQ lifestyle brand.

- Pure black and warm white backgrounds
- Hapi red accent: `#ff002b`
- Changa One for display headlines and feature statements
- Lilita One for navigation, buttons, descriptions, and footer copy
- Hapi mascot and packaging artwork remain the main visual assets
- No gradients, dotted background, floating hero animation, or card-heavy layout

## Structure

```text
Hapi Website/
|-- index.html
|-- favicon.png
|-- apple-touch-icon.png
|-- robots.txt
|-- sitemap.xml
|-- css/
|   `-- style.css
|-- js/
|   `-- main.js
|-- public/images/
|   |-- hero.svg
|   |-- logo.svg
|   |-- product.png
|   |-- product-680.webp
|   |-- product-1020.webp
|   |-- product-1240.webp
|   |-- flaps.png
|   |-- flaps-680.webp
|   |-- flaps-1020.webp
|   |-- flaps-1240.webp
|   |-- hapi_family.svg
|   |-- shopee.svg
|   |-- grab.svg
|   |-- whatsapp.svg
|   |-- facebook.svg
|   |-- instagram.svg
|   `-- favicon.png
|-- .gitignore
`-- PROJECT_SUMMARY.md
```

## Current Page

### Header

- Fixed white pill header
- Hapi logo scrolls to the top without refreshing
- `Contact` and `Buy Now` both scroll smoothly to the absolute bottom of the footer
- Mobile header text is `18px`; footer text is `15px`

### Hero

- Headline: `OUR CHARCOAL / LOVED BY US FIRE`
- `US` is crossed out and `FIRE` uses Hapi red
- `What's This?` scrolls to the WHAT? section
- Main artwork: `public/images/hero.svg`

### WHAT?

- Black background with centered white content
- Closed box uses `product.png`; open flaps overlay uses `flaps.png`
- Responsive lossless WebP versions are selected automatically for faster loading
- The box rises and opens once per page refresh, and remains directly clickable
- Mobile description:

```text
It's charcoal. Nothing fancy. Just charcoal.
We make it. Put it in a box. You set it on fire.
That's basically it. Well... ours is a little different.
```

### WHY?

- White background with black copy
- Mobile description:

```text
Fire loves our charcoal. A lot. Good for fire.
More importantly, you'll love it too,
because our charcoal is:
```

- Five red Changa One features reveal once as the user scrolls:
  - High Heat
  - Low Smoke
  - Long Lasting
  - Eco - Friendly
  - 100% Natural
- The animation does not lock or intercept scrolling

### WHERE?

- Black background with centered white copy
- Mobile description uses six intentional lines
- `Shopee` and `Grab` are red, underlined links on mobile and desktop
- `hapi_family.svg` appears beneath the description

### Footer

- White background matching the WHY? section
- Left side: Hapi logo, company address, and `© 2026 Hapi`
- Right side: Buy Now, Contact, and Follow Us groups
- Shopee and Grab logos link to their official Malaysian websites
- WhatsApp links to `+60122924104`
- Facebook and Instagram icons are visual only until Hapi profile URLs are supplied
- On mobile, the action groups appear above the logo and address

## Typography And Responsive Rules

- Desktop section descriptions: `22px`
- Mobile section descriptions: `18px`
- Description line height: `34px`
- Mobile header links: `18px`
- Mobile footer text: `15px`
- Main breakpoint: `780px`
- Small-phone breakpoint: `420px`
- Mobile-specific line breaks preserve the approved copy layout
- `prefers-reduced-motion` removes smooth scrolling and reveal transitions where appropriate

## Production Work

- Added explicit image dimensions to reduce layout shifts
- Added high-priority hero loading
- Added responsive lossless WebP packaging images
- Added meta description, canonical URL, Open Graph metadata, and theme color
- Added a valid `robots.txt` and `sitemap.xml`
- Added a dedicated `180x180` Apple touch icon
- Removed unused CSS and the unused Inter font request

## Audit Results

The final build was tested at `320px`, `390px`, `768px`, and `1440px`.

- No broken images or failed local requests
- No browser console or JavaScript errors
- No horizontal overflow
- No duplicate IDs
- Navigation anchors and bottom scrolling work
- Box and feature animations work as intended
- HTML validation passes
- Accessibility audit: `100`
- Best Practices: `100`
- SEO on the production hostname: `100`
- Mobile Lighthouse Performance: `89`
- Total Blocking Time: `0ms`
- Cumulative Layout Shift: `0`

## Editing Locations

- Content and metadata: `index.html`
- Layout, typography, colors, and responsive rules: `css/style.css`
- Box, feature reveal, and bottom-scroll behavior: `js/main.js`
- Visual assets: `public/images/`

## Repository And Deployment

- GitHub: `https://github.com/kennyhush86-star/hapi`
- Branch: `main`
- Live site: `https://hapi.pages.dev`
- Cloudflare Pages project: `hapi`
- Deployment uses Wrangler direct upload; pushing to GitHub alone does not update Cloudflare

## Pending Links

- Replace the general Shopee and Grab website URLs with Hapi's direct store/product URLs when available
- Add Hapi Facebook and Instagram profile URLs before making those footer icons clickable
