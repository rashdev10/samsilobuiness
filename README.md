# Samsilo Digital Hub

A modern Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP landing page for Samsilo Digital Hub.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Airtable setup

Copy `.env.example` to `.env.local` and fill in:

```bash
AIRTABLE_API_KEY=pat_your_airtable_personal_access_token
AIRTABLE_BASE_ID=app_your_base_id
AIRTABLE_TABLE_NAME=Service Requests
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Create matching Airtable fields:

- Full Name
- Phone Number
- School/Campus
- Department/Level
- Service Needed
- Message
- Source
- Submitted At

The contact form posts to `/api/contact`. WhatsApp buttons use `09169757481`.

## SEO deployment checklist

Set `NEXT_PUBLIC_SITE_URL` to the live production domain before deployment. This powers canonical URLs, Open Graph URLs, `robots.txt`, `sitemap.xml`, and JSON-LD structured data.

After deployment:

- Submit `/sitemap.xml` in Google Search Console.
- Inspect the homepage and the three blog guide URLs in Search Console.
- Replace placeholder social text with real profile URLs when available.
- Keep publishing useful campus service guides for long-tail searches.

## Local font

The site is wired to use Gilroy from `public/fonts/gilroy`. Add any of these supported files:

- `Gilroy-Regular.woff2`, `Gilroy-Regular.woff`, or `Gilroy-Regular.ttf`
- `Gilroy-Medium.woff2`, `Gilroy-Medium.woff`, or `Gilroy-Medium.ttf`
- `Gilroy-SemiBold.woff2`, `Gilroy-SemiBold.woff`, or `Gilroy-SemiBold.ttf`
- `Gilroy-Bold.woff2`, `Gilroy-Bold.woff`, or `Gilroy-Bold.ttf`
- `Gilroy-Black.woff2`, `Gilroy-Black.woff`, or `Gilroy-Black.ttf`
