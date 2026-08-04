# Devora Kit

A Notion template storefront built with Next.js (pages router), Tailwind CSS and MDX.

Visitors browse templates on the home page and the shop, open a detail page, and click through to
an external checkout link that you control per product.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
content/templates/*.mdx     One file per product: frontmatter + long description
lib/templates.js            Reads the MDX files, builds the product objects
lib/site.js                 Site name, nav, footer, benefits, testimonials, FAQ
components/                 layout/, home/, templates/, ui/, common/
pages/                      index, templates/, templates/[slug], about, contact, faq, legal
public/templates/<slug>/    Product images
styles/globals.css          Tailwind layers + the .prose-kit MDX styles
tailwind.config.js          Colour palette, fonts, shadows, animations
```

Everything is statically generated (`getStaticProps` / `getStaticPaths`), so the site can be
deployed to any static-friendly host.

## Adding a template

1. Create `content/templates/your-slug.mdx`. The filename is the URL: `/templates/your-slug`.
2. Fill in the frontmatter (see the fields below), then write the long description in Markdown
   below the `---`. Headings become sections and bullet lists render as feature chips.
3. Drop the images in `public/templates/your-slug/` and reference them in `images`.

That is the whole process. No database, no CMS, no config to touch.

### Frontmatter fields

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Product name |
| `tagline` | yes | One line, shown on cards and under the title |
| `description` | yes | Longer sentence, used for SEO and the "what's inside" intro |
| `category` | yes | Drives the filters: `Students`, `Finance`, `Business` |
| `price` | yes | Number, in euro. `14.9` renders as €14.90 |
| `compareAtPrice` | no | Number. Set it and a strikethrough price plus discount badge appear. Leave it out unless the product genuinely sold at that price for the previous 30 days, which EU price-indication rules require |
| `checkoutUrl` | no | **Your checkout link.** Empty = the buy button shows "Checkout opening soon" |
| `previewUrl` | no | Public Notion preview link, shows a secondary button |
| `images` | yes | List of paths under `/templates/<slug>/` |
| `highlights` | no | Short bullets in the buy box |
| `modules` | no | `emoji` / `title` / `body` cards in the "what's inside" grid |
| `perfectFor` | no | Bullets in the sidebar |
| `badge` | no | `Bestseller`, `New`, … shown on the card and detail page |
| `accent` | no | Pastel background: `bg-pastel-rose\|butter\|mint\|sky\|lilac\|peach` |
| `pages` | no | Free text shown under the price, e.g. "6 linked dashboards" |
| `order` | no | Position in the grid, lower first |

New categories appear in the filters and the home-page collections automatically. To give a new
category its own colour and icon, add it to `CATEGORY_STYLES` in
`components/home/Categories.jsx`.

## Connecting checkout

Each product links out to whatever checkout you use: Gumroad, Lemon Squeezy, Stripe Payment
Links, Payhip, Shopify. Paste the URL into `checkoutUrl` in that product's MDX file:

```yaml
checkoutUrl: "https://your-store.lemonsqueezy.com/checkout/buy/xxxxx"
```

The buy button then opens it in a new tab. While `checkoutUrl` is empty the button is disabled and
labelled "Checkout opening soon", so an unfinished product can never take a payment.

## Editing site copy

Nav links, footer columns, benefits, testimonials and the FAQ all live in `lib/site.js`. Change the
brand name, support email and social links at the top of that file. The announcement bar text is in
`components/layout/AnnouncementBar.jsx`.

## Company and legal details

The registered company name, address and support email live in the `company` object in
`lib/site.js`, and every legal page, the footer and the contact page read from it. Change it in one
place and it updates everywhere.

The site ships with the pages a payment provider normally asks to see before approving an account:
terms of service, privacy policy, delivery policy, refund policy and licence, all linked from the
footer, plus the company name, registered address and contact email on every page.

Prices are shown in euro. The currency symbol and code are set in `site.currency` and
`site.currencySymbol`, and `lib/format.js` formats every price on the site.

## Images

Product images live in `public/templates/<slug>/`. Cards use a 4:3 crop, so landscape images around
1200×900 work best. They are served through `next/image`, which handles resizing and modern formats.

> The images currently in the repo are placeholders pulled from a reference store. They carry that
> store's marketing overlays and claims, and must be replaced with your own artwork before the site
> goes live.

## Deploying

Any Next.js host works. On Vercel, import the repo and accept the defaults. No environment
variables are needed.

```bash
npm run build
npm start
```
