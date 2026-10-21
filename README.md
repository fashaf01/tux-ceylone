# tux-ceylone

Landing page for TUX·CEYLON, a luxury bespoke tailoring house in Colombo. The layout takes its cue from
brioni.com: a minimal centred-wordmark header, full-bleed editorial photography, spaced uppercase type,
generous white space and quiet "discover" style links.

## Viewing it

It is a static site with no build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

To publish it, any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## Structure

```
index.html            page markup and copy
assets/css/styles.css all styling (colours and fonts are CSS variables at the top)
assets/js/main.js     sticky header, mobile menu, scroll fade-ins
assets/img/           logo, favicon and photos used on the page
TUX_CEYLON_Resources.zip  original resource pack the page was built from
```

Sections, top to bottom: announcement bar, header, hero, intro, Bespoke / Made to Measure, process,
fabric houses, wardrobe, boutiques, appointment, footer.

Fonts are Cormorant Garamond (headings, echoing the serif TUX in the logo) and Jost (body and labels,
echoing the spaced CEYLON lettering), loaded from Google Fonts. The navy tartan texture is pure CSS,
modelled on the logo's checked background.

## Before going live

The content comes from public sources collected in the resource pack, so a few items need confirming with
the business:

- **Phone number.** The footer uses +94 77 769 4959 (shown on the Appointy booking page without a country
  code). Other listings give 0117 011 117 and +94 77 077 7757.
- **Opening hours.** One Galle Face 10:00–22:00 daily and Cambridge Terrace 11:00–17:30 daily, as reported by
  Pulse in July 2025. FindGlocal lists One Galle Face as Tuesday–Sunday.
- **Email.** chairman@tuxceylon.com is the address shown on the booking page; a general enquiries address
  may be preferable.
- **Fabric houses.** The list comes from the booking page and is not a confirmed current stock list.
- **Photography rights.** The photos are editorial images from E Online Sri Lanka (January 2021) and
  Life.lk (August 2020, photography credited to "You're my favorite"). Get permission or swap in the
  brand's own photography before publishing. Higher-resolution originals would also sharpen the hero.
- **Logo.** Only a raster logo was available; a vector (SVG) master would give a crisper footer logo and
  favicon.

All booking buttons link to https://booking.appointy.com/en-US/tuxceylon/about.
