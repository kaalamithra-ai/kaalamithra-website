# kaalamithra-website
Official Website Repository for KAALAMITHRA AI TECH SOLUTIONS PVT LTD

## Analytics Setup

1. Copy `.env.local.example` to `.env.local`.
2. Set `NEXT_PUBLIC_GA_ID` to your Google Analytics (or Plausible) tracking ID in `.env.local`.
3. Build and start the app:

   ```sh
   npm run build && npm run start
   ```

4. Open the site in your browser. In DevTools → Network, confirm analytics requests fire on navigation or CTA clicks.

**Note:**  
If `NEXT_PUBLIC_GA_ID` is not set, analytics will be disabled and a warning will appear in development mode only.
