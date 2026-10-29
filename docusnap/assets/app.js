// Verifier page UI. All checks happen locally; no network requests.
import { verify, t, docTypeLabel, formatDate, formatEpoch } from './verify.js';

const $ = (id) => document.getElementById(id);
const ICONS = {
  valid: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"/></svg>',
  invalid: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4Z"/></svg>',
  notours: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 11h8V3H3v8Zm2-6h4v4H5V5Zm8-2v8h8V3h-8Zm6 6h-4V5h4v4ZM3 21h8v-8H3v8Zm2-6h4v4H5v-4Zm13-2h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3Z"/></svg>',
};

let lang = 'en';
try { if (localStorage.getItem('ds-lang') === 'bn') lang = 'bn'; } catch { /* storage unavailable */ }
let last = null; // last verification result

function applyStatic() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-t]').forEach((el) => { el.textContent = t(lang, el.dataset.t); });
  $('pasteInput').placeholder = t(lang, 'pastePlaceholder');
  document.querySelectorAll('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
}

function row(label, value) {
  const div = document.createElement('div');
  const dt = document.createElement('dt'); dt.textContent = label;
  const dd = document.createElement('dd'); dd.textContent = value;
  div.append(dt, dd);
  return div;
}

function render() {
  applyStatic();
  if (!last) return;
  const r = last;
  const card = $('statusCard');
  card.className = 'card status ' + r.status;
  $('statusIcon').innerHTML = ICONS[r.status];
  $('statusTitle').textContent = t(lang, r.status);

  const f = r.fields;
  const name = f ? f.issuerName : '';
  // Only show the issuer name when the signature checks out; a tampered QR's name is untrusted.
  const ok = r.status === 'valid';
  $('sealedBy').textContent = ok ? t(lang, 'sealedBy', { name }) : '';
  $('sealedBy').hidden = !ok;

  const showIssuer = r.status === 'valid' && r.issuerId;
  $('issuerBlock').hidden = !showIssuer;
  if (showIssuer) {
    $('issuerHint').textContent = t(lang, 'checkIssuer', { name });
    $('issuerId').textContent = r.issuerId;
  }

  const dl = $('details');
  dl.replaceChildren();
  if (f && r.status === 'valid') {
    dl.append(row(t(lang, 'type'), docTypeLabel(f.docType, lang)));
    dl.append(row(t(lang, 'issuedTo'), f.issuedTo));
    dl.append(row(t(lang, 'ref'), f.ref));
    if (f.amount) dl.append(row(t(lang, 'amount'), f.amount));
    dl.append(row(t(lang, 'date'), formatDate(f.date)));
    dl.append(row(t(lang, 'pages'), f.pageCount));
    dl.append(row(t(lang, 'sealedOn'), formatEpoch(f.epochSec, lang === 'bn' ? 'bn-BD' : undefined)));
    dl.append(row(t(lang, 'issuerId'), r.issuerId));
  }
  $('detailsCard').hidden = !(f && r.status === 'valid');
}

async function check(input) {
  last = await verify(input);
  $('paste').hidden = true;
  $('result').hidden = false;
  render();
  window.scrollTo(0, 0);
}

function showPaste() {
  last = null;
  $('result').hidden = true;
  $('paste').hidden = false;
  render();
}

function route() {
  const h = location.hash.slice(1);
  if (h) check(h); else showPaste();
}

document.querySelectorAll('.lang button').forEach((b) => b.addEventListener('click', () => {
  lang = b.dataset.lang;
  try { localStorage.setItem('ds-lang', lang); } catch { /* ignore */ }
  render();
}));

$('pasteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const v = $('pasteInput').value;
  if (v.trim()) check(v);
});

$('another').addEventListener('click', () => {
  history.replaceState(null, '', location.pathname + location.search);
  $('pasteInput').value = '';
  showPaste();
});

$('copyBtn').addEventListener('click', async () => {
  const id = $('issuerId').textContent;
  try {
    await navigator.clipboard.writeText(id);
  } catch {
    const range = document.createRange();
    range.selectNodeContents($('issuerId'));
    const sel = getSelection(); sel.removeAllRanges(); sel.addRange(range);
    try { document.execCommand('copy'); } catch { /* ignore */ }
  }
  const btn = $('copyBtn');
  btn.textContent = t(lang, 'copied');
  setTimeout(() => { btn.textContent = t(lang, 'copy'); }, 1500);
});

window.addEventListener('hashchange', route);
route();
