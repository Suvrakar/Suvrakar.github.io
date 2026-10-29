// Landing page language toggle.
import { t } from './verify.js';

let lang = 'en';
try { if (localStorage.getItem('ds-lang') === 'bn') lang = 'bn'; } catch { /* storage unavailable */ }

function render() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-t]').forEach((el) => { el.textContent = t(lang, el.dataset.t); });
  document.querySelectorAll('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
}

document.querySelectorAll('.lang button').forEach((b) => b.addEventListener('click', () => {
  lang = b.dataset.lang;
  try { localStorage.setItem('ds-lang', lang); } catch { /* ignore */ }
  render();
}));
render();
