# Hapi Website Summary

## Project

Hapi is a responsive charcoal briquette website for a young, playful, premium BBQ lifestyle brand.

Current visual direction:

- Black and white as the main palette
- Hapi red accent: `#ff002b`
- Changa One for large display headlines
- Lilita One at regular weight for navigation, buttons, and section descriptions
- Inter as the base fallback/body font
- Hapi mascot and product packaging remain the main visual assets
- No gradients, floating hero animation, decorative icons, or card-heavy layout

## File Structure

```text
Hapi Website/
|-- index.html
|-- css/
|   `-- style.css
|-- js/
|   `-- main.js
|-- public/
|   `-- images/
|       |-- flaps.png
|       |-- hapi_family.svg
|       |-- hero.svg
|       |-- logo.svg
|       `-- product.png
`-- PROJECT_SUMMARY.md
```

## Header

- Logo links to `#top` and scrolls to the hero without refreshing the page.
- Menu links: `About`, `Contact`, and `Buy Now`.
- About anchors to WHAT?, Contact anchors to WHERE?, and Buy Now anchors to the footer.
- The fixed white pill header uses Lilita One at regular weight.
- Below `780px`, About and Contact are hidden while Buy Now remains visible.

## Hero

- Headline: `OUR CHARCOAL / LOVED BY US FIRE`
- `US` is crossed out with a red correction line.
- `FIRE` is red.
- CTA: `What the?!`
- Main artwork: `public/images/hero.svg`
- The CTA anchors to the WHAT? section.

## WHAT? Section

- Black background with centered white content.
- Uses `product.png` as the closed box and overlays `flaps.png` when open.
- The box rises into position and opens automatically when reached.
- The opening sequence plays only once per page load.
- Clicking the header, hero CTA, or logo does not restart it.
- The box remains directly clickable for opening and closing.
- Description:

```text
It's charcoal. Nothing fancy. Just charcoal. We make it.
Put it in a box. You set it on fire. That's basically it.
Well... ours is a little different.
```

## WHY? Section

- White background with black heading and description.
- Description:

```text
Fire loves our charcoal. A lot. Good for fire.
More importantly, you'll love it too, because our charcoal is:
```

- Five red Changa One features animate upward one by one when the section passes its anchor:
  - High Heat
  - Low Smoke
  - Long Lasting
  - Eco - Friendly
  - 100% Natural
- The animation plays once and does not intercept, pause, lock, or alter normal scrolling.
- After the features finish, this Lilita One follow-up appears:

```text
Don't believe it? Buy the chicken wings. Buy the sausages.
Invite everyone over. Then remember none of this works
very well without our charcoal. Know where to get it?
```

## WHERE? Section

- Black background with centered white content.
- Description:

```text
In Kuching, Sarawak, we make the boring black stuff that goes under the grill.
You make all the delicious stuff on top. Teamwork. Need some?
Get it from selected supermarkets, minimarts, hardware stores, Shopee and Grab.
```

- `public/images/hapi_family.svg` appears below the description.

## Footer

- Full-width white background matching the WHY? section.
- Static Hapi logo.
- Company details:

```text
Hapi Industries Sdn. Bhd. (1680698-P)
Ground Floor, Lot 1035,
Jalan Sungai Maong Tengah,
93150 Kuching, Sarawak
```

- Copyright: `© 2026 Hapi`.
- The address and copyright sit below the logo in one left-aligned column.

## Typography And Spacing

- Headlines use Changa One at weight `400`.
- Lilita One text is regular weight; no `<strong>` elements remain.
- WHAT?, WHY?, WHERE?, and feature follow-up descriptions use `22px` on desktop and `20px` below `780px`.
- All Lilita One description lines use an exact `34px` line height.
- There is no additional margin between description paragraphs.
- WHAT?, WHY?, and WHERE? use matching `48px` spacing after their headings.
- The WHY? feature list has matching `48px` spacing above and below.

## Responsive And Motion Behavior

- Main breakpoint: `780px`.
- Small-phone adjustments: `420px`.
- Hero, mascot, packaging, headings, feature text, and spacing scale for mobile.
- Fixed-header anchor offsets are defined for desktop and mobile.
- WHAT?, WHY?, and WHERE? anchors were measured at matching positions: about `140px` on desktop and `136px` on tested mobile widths.
- Verified viewport widths have no horizontal overflow at `1440px`, `390px`, or `320px`.
- The `320px` footer uses smaller address text so the company registration number stays on one line.
- `prefers-reduced-motion` disables smooth scrolling and animated transitions where applicable.
- The previous sticky/scrollytelling layout has been fully removed.

## Main Editing Locations

- Content and wording: `index.html`
- Colors, spacing, typography, layout, and responsive rules: `css/style.css`
- Box and feature reveal behavior: `js/main.js`
- Hero mascot: `public/images/hero.svg`
- Header logo: `public/images/logo.svg`
- WHERE? family artwork: `public/images/hapi_family.svg`
- Closed product box: `public/images/product.png`
- Open box flaps overlay: `public/images/flaps.png`

## Current Limitations / Next Steps

- `Buy Now` points to the footer, but direct purchasing links are not implemented yet.
- The WHERE? section lists retail channels but does not yet link to store locations, Shopee, or Grab.
- Chrome viewport checks are complete; a final physical-device and cross-browser review is still recommended before launch.
