# Richess Ventures

Premium venture-building landing page built with Next.js and GSAP.

## Start locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## WhatsApp configuration

Create `.env.local` and set the destination number using international digits only, with no `+` or spaces:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999
```

The WhatsApp CTA deliberately shows a setup message until this value is supplied; no contact number has been invented.

## Included local assets

The supplied reference images are copied into `public/` and used as art-directed visual texture. Replace them with licensed brand photography before production if required.
