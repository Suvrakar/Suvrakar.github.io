// DocuSnap Verified Seal — pure verification logic (ES module).
// Runs in browsers and Node >= 18 (uses globalThis.crypto.subtle).
// Never performs network requests.

export const URL_PREFIX = 'https://suvrakar.github.io/docusnap/v/#';
export const MAGIC = 'DSV1';
export const FIELD_COUNT = 11;
export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.docusnap.docusnap';

const subtle = () => globalThis.crypto && globalThis.crypto.subtle;

// ---------- base64url ----------
export function b64urlEncode(bytes) {
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function b64urlDecode(str) {
  if (typeof str !== 'string' || !/^[A-Za-z0-9_-]*$/.test(str) || str.length % 4 === 1) {
    throw new Error('bad base64url');
  }
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((str.length + 3) % 4);
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

// ---------- ECDSA signature formats ----------
function readDerInt(der, pos) {
  if (der[pos] !== 0x02) throw new Error('DER: expected INTEGER');
  const len = der[pos + 1];
  if (len === 0 || len > 33 || pos + 2 + len > der.length) throw new Error('DER: bad INTEGER length');
  let v = der.subarray(pos + 2, pos + 2 + len);
  while (v.length > 1 && v[0] === 0) v = v.subarray(1);
  if (v.length > 32) throw new Error('DER: INTEGER too large');
  return { value: v, next: pos + 2 + len };
}

/** DER ECDSA-Sig-Value -> IEEE-P1363 r||s (64 bytes for P-256). */
export function derToP1363(der, size = 32) {
  der = der instanceof Uint8Array ? der : new Uint8Array(der);
  if (der.length < 8 || der[0] !== 0x30) throw new Error('DER: expected SEQUENCE');
  let pos = 2;
  let seqLen = der[1];
  if (seqLen === 0x81) { seqLen = der[2]; pos = 3; } else if (seqLen & 0x80) throw new Error('DER: bad length');
  if (pos + seqLen !== der.length) throw new Error('DER: length mismatch');
  const r = readDerInt(der, pos);
  const s = readDerInt(der, r.next);
  if (s.next !== der.length) throw new Error('DER: trailing bytes');
  const out = new Uint8Array(size * 2);
  out.set(r.value, size - r.value.length);
  out.set(s.value, size * 2 - s.value.length);
  return out;
}

function derInt(v) {
  let i = 0;
  while (i < v.length - 1 && v[i] === 0) i++;
  v = v.subarray(i);
  const pad = v[0] & 0x80 ? 1 : 0;
  const out = new Uint8Array(2 + pad + v.length);
  out[0] = 0x02; out[1] = pad + v.length;
  out.set(v, 2 + pad);
  return out;
}

/** IEEE-P1363 r||s -> DER ECDSA-Sig-Value. */
export function p1363ToDer(sig) {
  sig = sig instanceof Uint8Array ? sig : new Uint8Array(sig);
  if (sig.length % 2 !== 0 || sig.length === 0) throw new Error('P1363: bad length');
  const n = sig.length / 2;
  const r = derInt(sig.subarray(0, n));
  const s = derInt(sig.subarray(n));
  const body = r.length + s.length;
  const head = body < 0x80 ? [0x30, body] : [0x30, 0x81, body];
  const out = new Uint8Array(head.length + body);
  out.set(head, 0); out.set(r, head.length); out.set(s, head.length + r.length);
  return out;
}

// ---------- Issuer ID ----------
const CROCKFORD = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';

export function crockford32(bytes, chars) {
  let out = '', acc = 0, bits = 0;
  for (let i = 0; i < bytes.length && out.length < chars; i++) {
    acc = (acc << 8) | bytes[i]; bits += 8;
    while (bits >= 5 && out.length < chars) {
      bits -= 5;
      out += CROCKFORD[(acc >> bits) & 31];
    }
    acc &= (1 << bits) - 1;
  }
  return out;
}

export async function issuerId(point) {
  const digest = new Uint8Array(await subtle().digest('SHA-256', point));
  const c = crockford32(digest, 8);
  return 'DS-' + c.slice(0, 4) + '-' + c.slice(4, 8);
}

// ---------- Parsing ----------
/**
 * Extract the raw `DSV1|...` text from scanner input: a full URL, a bare
 * `#data` fragment / hash, a base64url payload, or raw `DSV1|` text.
 * Returns null if it doesn't look like a DocuSnap seal.
 */
export function extractRaw(input) {
  if (typeof input !== 'string') return null;
  let s = input.trim();
  if (!s) return null;
  if (s.startsWith(MAGIC + '|')) return s;
  const hashAt = s.indexOf('#');
  if (/^https?:\/\//i.test(s)) {
    if (hashAt < 0) return null;
    s = s.slice(hashAt + 1);
  } else if (hashAt === 0) {
    s = s.slice(1);
  }
  try { s = decodeURIComponent(s); } catch { /* keep as is */ }
  s = s.trim();
  if (s.startsWith(MAGIC + '|')) return s;
  try {
    const text = new TextDecoder('utf-8', { fatal: true }).decode(b64urlDecode(s));
    return text.startsWith(MAGIC + '|') ? text : null;
  } catch {
    return null;
  }
}

export function encodeUrl(raw) {
  return URL_PREFIX + b64urlEncode(new TextEncoder().encode(raw));
}

/**
 * Verify scanner input. Result:
 *   { status: 'valid' | 'invalid' | 'notours', fields?, issuerId?, reason? }
 */
export async function verify(input) {
  const raw = extractRaw(input);
  if (raw === null) return { status: 'notours', reason: 'not a DocuSnap seal' };
  const parts = raw.split('|');
  if (parts.length !== FIELD_COUNT || parts[0] !== MAGIC) {
    return { status: 'notours', reason: 'malformed seal' };
  }
  const [, issuerName, pubKey, docType, issuedTo, ref, amount, date, pageCount, epochSec, sig] = parts;
  const fields = { issuerName, docType, issuedTo, ref, amount, date, pageCount, epochSec };
  const signed = new TextEncoder().encode(raw.slice(0, raw.lastIndexOf('|')));

  let point, id = null;
  try {
    point = b64urlDecode(pubKey);
    if (point.length !== 65 || point[0] !== 0x04) throw new Error('bad point');
    id = await issuerId(point);
  } catch {
    return { status: 'invalid', fields, issuerId: id, reason: 'bad public key' };
  }
  try {
    let sigBytes = b64urlDecode(sig);
    sigBytes = sigBytes[0] === 0x30 ? derToP1363(sigBytes) : sigBytes;
    if (sigBytes.length !== 64) throw new Error('bad sig');
    const key = await subtle().importKey('raw', point, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['verify']);
    const ok = await subtle().verify({ name: 'ECDSA', hash: 'SHA-256' }, key, sigBytes, signed);
    return ok
      ? { status: 'valid', fields, issuerId: id }
      : { status: 'invalid', fields, issuerId: id, reason: 'signature mismatch' };
  } catch (e) {
    return { status: 'invalid', fields, issuerId: id, reason: String(e && e.message || e) };
  }
}

// ---------- Display helpers ----------
export const DOC_TYPES = {
  en: { salary: 'Salary certificate', experience: 'Experience letter', invoice: 'Invoice', receipt: 'Receipt', noc: 'NOC', certificate: 'Certificate', other: 'Other' },
  bn: { salary: 'বেতন সনদ', experience: 'অভিজ্ঞতা সনদ', invoice: 'ইনভয়েস', receipt: 'রসিদ', noc: 'এনওসি', certificate: 'সনদপত্র', other: 'অন্যান্য' },
};

export function docTypeLabel(t, lang = 'en') {
  const map = DOC_TYPES[lang] || DOC_TYPES.en;
  return map[t] || DOC_TYPES.en[t] || t;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatDate(yyyymmdd) {
  const m = /^(\d{4})(\d{2})(\d{2})$/.exec(yyyymmdd || '');
  if (!m) return yyyymmdd || '';
  const mi = +m[2] - 1;
  if (mi < 0 || mi > 11) return yyyymmdd;
  return `${+m[3]} ${MONTHS[mi]} ${m[1]}`;
}

export function formatEpoch(epochSec, locale) {
  const n = Number(epochSec);
  if (!Number.isFinite(n) || !/^\d+$/.test(String(epochSec))) return String(epochSec || '');
  return new Date(n * 1000).toLocaleString(locale, {
    day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit',
  });
}

export const STRINGS = {
  en: {
    valid: 'Valid seal — not changed since sealing',
    invalid: 'Not genuine — this QR was changed after sealing',
    notours: "This isn't a DocuSnap seal",
    sealedBy: 'Sealed by {name}',
    checkIssuer: 'Check the Issuer ID matches the one {name} publishes',
    checkPaper: 'Check these match the paper',
    type: 'Type', issuedTo: 'Issued to', ref: 'Reference no.', amount: 'Amount', date: 'Date',
    pages: 'Pages', sealedOn: 'Sealed on', issuerId: 'Issuer ID',
    getApp: 'Get DocuSnap',
    strongest: 'For the strongest check, scan with the DocuSnap app',
    copy: 'Copy', copied: 'Copied',
    pasteTitle: 'Verify a DocuSnap seal',
    pasteHelp: 'Scan the seal QR with your phone camera, or paste the QR text below.',
    pastePlaceholder: 'Paste QR text (https://… or DSV1|…)',
    verifyBtn: 'Verify',
    privacy: 'Checked on this device. Nothing is sent anywhere.',
    checkAnother: 'Check another',
    checking: 'Checking…',
    heroTitle: 'DocuSnap Verified Seal',
    heroText: 'A tamper-proof QR code printed on certificates, letters and invoices. Scan it with any phone camera to see who issued the document and whether it has been changed.',
    howTitle: 'How it works',
    step1T: 'The issuer seals it', step1P: 'The DocuSnap app signs the key details of the document with the issuer\'s private key and prints them as a QR code.',
    step2T: 'You scan it', step2P: 'Point your phone camera at the seal. This page checks the digital signature right on your device.',
    step3T: 'You compare', step3P: 'If the seal is valid, check the details and the Issuer ID match the paper and the issuer\'s published ID.',
    verifyLink: 'Paste QR text to verify',
    landingPrivacy: 'No accounts, no tracking. Seal data never leaves your browser.',
  },
  bn: {
    valid: 'সঠিক সিল — সিল করার পর পরিবর্তন হয়নি',
    invalid: 'আসল নয় — সিল করার পর এই QR পরিবর্তন করা হয়েছে',
    notours: 'এটি DocuSnap সিল নয়',
    sealedBy: '{name} দ্বারা সিল করা',
    checkIssuer: 'নিচের ইস্যুয়ার আইডি {name}-এর প্রকাশিত আইডির সাথে মিলিয়ে নিন',
    checkPaper: 'কাগজের সাথে এগুলো মিলিয়ে নিন',
    type: 'ধরন', issuedTo: 'যাকে দেওয়া হচ্ছে', ref: 'রেফারেন্স নং', amount: 'পরিমাণ', date: 'তারিখ',
    pages: 'পৃষ্ঠা', sealedOn: 'সিল করার সময়', issuerId: 'ইস্যুয়ার আইডি',
    getApp: 'DocuSnap ডাউনলোড করুন',
    strongest: 'সবচেয়ে নির্ভরযোগ্য যাচাইয়ের জন্য DocuSnap অ্যাপ দিয়ে স্ক্যান করুন',
    copy: 'কপি', copied: 'কপি হয়েছে',
    pasteTitle: 'DocuSnap সিল যাচাই করুন',
    pasteHelp: 'ফোনের ক্যামেরা দিয়ে সিলের QR স্ক্যান করুন, অথবা নিচে QR টেক্সট পেস্ট করুন।',
    pastePlaceholder: 'QR টেক্সট পেস্ট করুন (https://… বা DSV1|…)',
    verifyBtn: 'যাচাই করুন',
    privacy: 'এই ডিভাইসেই যাচাই হয়। কোনো তথ্য কোথাও পাঠানো হয় না।',
    checkAnother: 'আরেকটি যাচাই করুন',
    checking: 'যাচাই করা হচ্ছে…',
    heroTitle: 'DocuSnap ভেরিফায়েড সিল',
    heroText: 'সনদ, চিঠি ও ইনভয়েসে ছাপানো একটি টেম্পার-প্রুফ QR কোড। যেকোনো ফোনের ক্যামেরা দিয়ে স্ক্যান করে দেখুন কে নথিটি দিয়েছে এবং এটি পরিবর্তন হয়েছে কিনা।',
    howTitle: 'যেভাবে কাজ করে',
    step1T: 'প্রদানকারী সিল করেন', step1P: 'DocuSnap অ্যাপ প্রদানকারীর প্রাইভেট কী দিয়ে নথির মূল তথ্য সাইন করে QR কোড হিসেবে ছাপায়।',
    step2T: 'আপনি স্ক্যান করেন', step2P: 'ফোনের ক্যামেরা সিলের দিকে ধরুন। এই পেজ আপনার ডিভাইসেই ডিজিটাল স্বাক্ষর যাচাই করে।',
    step3T: 'আপনি মিলিয়ে নেন', step3P: 'সিল সঠিক হলে তথ্যগুলো ও ইস্যুয়ার আইডি কাগজ এবং প্রদানকারীর প্রকাশিত আইডির সাথে মিলিয়ে নিন।',
    verifyLink: 'QR টেক্সট পেস্ট করে যাচাই করুন',
    landingPrivacy: 'কোনো অ্যাকাউন্ট বা ট্র্যাকিং নেই। সিলের তথ্য আপনার ব্রাউজারের বাইরে যায় না।',
  },
};

export function t(lang, key, vars = {}) {
  const s = (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.en[key] || key;
  return s.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? vars[k] : `{${k}}`));
}
