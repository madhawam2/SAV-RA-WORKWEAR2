# SAVÉRA WORKWEAR

A women's workwear storefront for Sri Lanka, built with React, TypeScript, Tailwind CSS and Vite.

It includes a home page, shop with filters and search, product pages, a cart drawer (saved in the browser), a demo checkout, wishlist, outfit pages and WhatsApp ordering.

## Run it on your computer

You need [Node.js](https://nodejs.org) 18.18 or newer (20 is recommended).

```bash
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

To test the production build:

```bash
npm run build
npm run preview
```

## Deploy with GitHub and Vercel

### 1. Put the project on GitHub

1. Create a new empty repository on [github.com](https://github.com/new). Do not add a README or .gitignore.
2. In this project folder, run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

Tip: run `npm install` once before committing. It creates a `package-lock.json` file. Commit that file too, so every build uses the same package versions.

### 2. Deploy on Vercel

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
2. Click **Add New… → Project** and import your repository.
3. Vercel detects Vite automatically. The settings in `vercel.json` are already correct:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Your site is live in about a minute.

Every time you push to `main`, Vercel redeploys automatically.

### 3. Add your own domain (optional)

In your Vercel project, go to **Settings → Domains** and follow the steps.

## Change the brand, products and contact details

Everything an owner edits is in plain files under `src/`:

| What | File |
| --- | --- |
| Brand name, tagline, WhatsApp number, delivery fee, free-delivery limit, contact details, social links, bank details | `src/config.ts` |
| Products (names, prices, colours, sizes, descriptions) | `src/data/products.ts` |
| Outfits ("Style Your Workday"), customer reviews, districts, size chart | `src/data/content.ts` |
| Policy pages (privacy, returns, shipping, terms) | `src/pages/Policy.tsx` |
| Colours and fonts | `tailwind.config.js` and `src/index.css` |

Also update the page title and description in `index.html` if you rename the brand.

**WhatsApp number:** set `whatsappNumber` in `src/config.ts` with the country code and digits only, for example `94771234567`.

### Using real product photos

The site currently draws garment illustrations in place of photography. To use photos:

1. Put the image files in `public/images/`, for example `public/images/linen-shirt.jpg`.
2. In `src/data/products.ts`, add `image: "/images/linen-shirt.jpg"` to that product.

The photo then replaces the illustration on cards, product pages, search and the cart.

## Before you launch

- **Checkout is a demo.** It does not take payment and does not send orders anywhere. Orders reach you through the **Order via WhatsApp** button. To accept online payments, replace `PaymentGateway.createOrder` in `src/lib/payment.ts` with your payment provider (for example PayHere).
- **Replace the sample content:** reviews, bank details, phone number, address, email and policy text are placeholders.
- **Newsletter:** the Subscribe form is not connected to an email service yet. Connect it in `src/pages/Home.tsx` (the `Newsletter` component).
- Cart and wishlist are stored in each visitor's browser (local storage).

## Project structure

```
index.html            Page shell, fonts and metadata
vercel.json           Vercel settings
public/               Favicon and static files
src/
  config.ts           Brand and store settings
  data/               Products, outfits, reviews
  lib/                Helpers, WhatsApp message, payment adapter
  store/              Cart, wishlist and routing state
  components/         Header, cart drawer, product card, modals, illustrations
  pages/              Home, Shop, Product, Checkout, and the other pages
```

Pages use `#` addresses (for example `/#shop` and `/#product-everyday-linen-shirt`), so no extra server setup is needed.
