# DocuSnap Verified Seal — web verifier

A static, no-backend page that checks DocuSnap "Verified Seal" QR codes in the browser, so anyone can scan a seal with a normal phone camera. Intended for GitHub Pages at `https://suvrakar.github.io/docusnap/`.

- `index.html` — what the Verified Seal is, plus a "Get DocuSnap" link.
- `v/index.html` — the verifier. Reads the seal from `location.hash`; with no hash it shows a paste box (accepts the full URL or raw `DSV1|…` text).
- `assets/verify.js` — pure verification logic (ES module, also used by the Node tests).
- `assets/app.js`, `assets/landing.js` — page UI (EN | বাং toggle). `assets/style.css` — light/dark, mobile-first.
- `404.html` redirects to `/docusnap/`.

## How it verifies

The QR holds `https://suvrakar.github.io/docusnap/v/#<base64url(raw)>`, where
`raw = DSV1|issuerName|pubKey|docType|issuedTo|ref|amount|yyyyMMdd|pageCount|epochSec|sig`.

1. Decode the fragment and split into exactly 11 fields.
2. `pubKey` is the 65-byte uncompressed P-256 point; `sig` is a DER ECDSA/SHA-256 signature, converted to raw `r‖s` for WebCrypto.
3. The signed bytes are the UTF-8 of everything before the last `|`, exactly as in the QR.
4. `crypto.subtle.verify` decides **Valid** / **Not genuine**; anything else is **Not a DocuSnap seal**.
5. The Issuer ID (`DS-XXXX-XXXX`, Crockford base32 of SHA-256 of the key) is shown so the reader can compare it with the ID the issuer publishes — a valid signature alone only proves the QR wasn't changed since *someone* sealed it.

## Privacy

Nothing leaves the browser. The seal data sits in the URL fragment (never sent to the server), there are no fetches, analytics, cookies or third-party assets, and a Content-Security-Policy with `connect-src 'none'` enforces it. The only stored item is the language choice in `localStorage`.

## Tests

Node ≥ 18, no network:

```sh
npm test          # node --test test/*.test.mjs
```

The tests generate a real P-256 key, seal sample documents, and check valid, tampered, wrong-key, garbage, Bangla and raw-paste cases, the DER⇄P1363 conversion, and the Issuer ID known vector (`DS-1V9T-DAWN`). They also write `test/vector.json` with a valid URL for manual browser checks (serve locally with `python3 -m http.server` and open its `localPath`).
