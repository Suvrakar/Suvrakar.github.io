'use strict';

const SECTIONS = [
  { id: 'about',          label: 'About'          },
  { id: 'experience',     label: 'Experience'     },
  { id: 'projects',       label: 'Projects'       },
  { id: 'skills',         label: 'Skills'         },
  { id: 'research',       label: 'Research'       },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact',        label: 'Contact'        },
];

/* ── SVG social icons ────────────────────────────────────────── */
const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>`,

  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>`,

  leetcode: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>`,

  scholar: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6L23 9zm-1.93 10.5L5.5 11.12l.91-.5L12 13.5l5.59-2.88.91.5zm6.93 1.06L12 17.5l-5-2.94V12.1l5 2.73 5-2.73zM12 5.19L20.23 9 12 12.81 3.77 9z"/>
  </svg>`,
};

/* ── Helpers ─────────────────────────────────────────────────── */
function h(v) {
  return String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function eyebrow(idx, label) {
  return `<p class="section-eyebrow">${String(idx+1).padStart(2,'0')} &mdash; ${h(label).toUpperCase()}</p>`;
}

/* Org logo: tries Clearbit, falls back to coloured initials */
function orgLogo({ logo, initials, logoBg, link, alt }) {
  const img = logo
    ? `<img src="${h(logo)}" alt="${h(alt)}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
       <div class="org-logo-fallback" style="display:none;background:${h(logoBg)}">${h(initials)}</div>`
    : `<div class="org-logo-fallback" style="background:${h(logoBg)}">${h(initials)}</div>`;

  const inner = `<div class="org-logo">${img}</div>`;
  return link
    ? `<a href="${h(link)}" class="org-logo-link" target="_blank" rel="noopener noreferrer" title="${h(alt)}">${inner}</a>`
    : `<div class="org-logo-link">${inner}</div>`;
}

/* External link icon SVG */
const EXT = `<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
  <path d="M2 10L10 2M4.5 2H10v5.5"/>
</svg>`;

/* ─── Sidebar ────────────────────────────────────────────────── */
function renderSidebar() {
  const p = PORTFOLIO;
  const initials = p.name.split(' ').map(w => w[0]).join('').slice(0,3);

  const socials = [
    p.github   && { key: 'github',   label: 'GitHub',   href: p.github   },
    p.linkedin && { key: 'linkedin', label: 'LinkedIn', href: p.linkedin  },
    p.leetcode && { key: 'leetcode', label: 'LeetCode', href: p.leetcode  },
    p.scholar  && { key: 'scholar',  label: 'Scholar',  href: p.scholar   },
  ].filter(Boolean);

  return `
<aside id="sidebar">
  <div class="sidebar-profile">
    <div class="sidebar-avatar">
      <img src="assets/images/profile.jpg" alt="${h(p.name)}"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="sidebar-avatar-fallback" style="display:none">${h(initials)}</div>
    </div>
    <h1 class="sidebar-name">${h(p.name)}</h1>
    <p class="sidebar-role">${h(p.title)}</p>
  </div>

  <div class="sidebar-sep"></div>

  <nav class="sidebar-nav" aria-label="Sections">
    <ul>
      ${SECTIONS.map(s =>
        `<li><a href="#${s.id}" class="nav-link" data-section="${s.id}">${h(s.label)}</a></li>`
      ).join('\n      ')}
    </ul>
  </nav>

  <div class="sidebar-social">
    ${socials.map(s =>
      `<a href="${h(s.href)}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="${h(s.label)}">
        ${ICONS[s.key] || ''}
        ${h(s.label)}
      </a>`
    ).join('\n    ')}
  </div>
</aside>`;
}

/* ─── Hero ───────────────────────────────────────────────────── */
function renderHero() {
  const p = PORTFOLIO;
  const [first, ...rest] = p.name.split(' ');

  return `
<section id="hero">
  <!-- Left: text -->
  <div class="hero-content">
    <div class="hero-eyebrow">
      <span class="hero-dot"></span>
      Available for senior roles &nbsp;&middot;&nbsp; ${h(p.location)}
    </div>

    <h1 class="hero-name">${h(first)}<br><em>${h(rest.join(' '))}</em></h1>
    <p class="hero-title">${h(p.title)} &mdash; Distributed Systems &middot; AI-Native Engineering</p>

    <div class="hero-divider"></div>
    <p class="hero-bio">${h(p.bio[0])}</p>

    <div class="hero-stats">
      ${p.stats.map(s => `
      <div class="hero-stat">
        <span class="stat-value">${h(s.value)}</span>
        <span class="stat-label">${h(s.label)}</span>
      </div>`).join('')}
    </div>

    <div class="hero-ctas">
      <a href="mailto:${h(p.email)}" class="btn btn-primary">Get in Touch</a>
      <a href="#projects" class="btn btn-secondary">View Work &darr;</a>
    </div>
  </div>

  <!-- Right: portrait -->
  <div class="hero-photo-panel">
    <div class="hero-photo-frame">
      <div class="hero-photo-wrap">
        <img src="assets/images/profile.jpg" alt="${h(p.name)}" loading="eager">
      </div>
      <div class="hero-photo-badge">
        <span class="badge-dot"></span>
        <span class="badge-text">Open to Opportunities</span>
      </div>
    </div>
  </div>
</section>`;
}

/* ─── About ──────────────────────────────────────────────────── */
function renderAbout() {
  const p = PORTFOLIO;
  return `
<section id="about" class="section">
  ${eyebrow(0, 'About')}
  <h2 class="section-title">Engineer &amp; Researcher</h2>
  <div class="about-grid">
    <div class="about-text">
      ${p.bio.map(b => `<p>${h(b)}</p>`).join('\n      ')}
    </div>
    <div>
      <div class="about-card">
        <p class="about-card-label">Specialization</p>
        <p class="about-card-text">${h(p.specialization)}</p>
      </div>
      <div class="edu-list">
        ${p.education.map(e => `
        <div class="edu-item">
          ${orgLogo({ logo: e.logo, initials: e.initials, logoBg: e.logoBg, link: e.link, alt: e.institution })}
          <div class="edu-body">
            <p class="edu-degree">${h(e.degree)}</p>
            <p class="edu-meta">
              ${e.link
                ? `<a href="${h(e.link)}" target="_blank" rel="noopener noreferrer" style="color:inherit">${h(e.institution)}</a>`
                : h(e.institution)}
              &middot; ${h(e.year)}
            </p>
            ${e.thesis ? `<p class="edu-thesis">${h(e.thesis)}</p>` : ''}
          </div>
        </div>`).join('')}
      </div>
    </div>
  </div>
</section>`;
}

/* ─── Experience ─────────────────────────────────────────────── */
function renderExperience() {
  return `
<section id="experience" class="section">
  ${eyebrow(1, 'Experience')}
  <h2 class="section-title">Work History</h2>
  <div class="exp-list">
    ${PORTFOLIO.experience.map(e => `
    <div class="exp-item">
      <div class="exp-left">
        ${orgLogo({ logo: e.logo, initials: e.initials, logoBg: e.logoBg, link: e.link, alt: e.company })}
        <div class="exp-company-row" style="margin-top:12px">
          ${e.link
            ? `<a href="${h(e.link)}" class="exp-company-link" target="_blank" rel="noopener noreferrer">
                <h3 class="exp-company">${h(e.company)}</h3>${EXT}
               </a>`
            : `<h3 class="exp-company">${h(e.company)}</h3>`}
        </div>
        <p class="exp-period">${h(e.period)}</p>
        <p class="exp-location">${h(e.location)}</p>
      </div>
      <div class="exp-right">
        <p class="exp-role">${h(e.role)}</p>
        <ul class="exp-bullets">
          ${e.highlights.map(hl =>
            `<li><span class="exp-bullet-dot"></span>${h(hl)}</li>`
          ).join('')}
        </ul>
      </div>
    </div>`).join('')}
  </div>
</section>`;
}

/* ─── Projects ───────────────────────────────────────────────── */
function renderProjects() {
  return `
<section id="projects" class="section">
  ${eyebrow(2, 'Projects')}
  <h2 class="section-title">Selected Work</h2>
  <div class="projects-grid">
    ${PORTFOLIO.projects.map((p, i) => `
    <div class="project-card">
      <p class="project-number">${String(i+1).padStart(2,'0')}</p>
      <h3 class="project-name">${h(p.name)}</h3>
      <div class="project-tech">
        ${p.tech.map(t => `<span class="tech-tag">${h(t)}</span>`).join('')}
      </div>
      <p class="project-desc">${h(p.description)}</p>
      ${p.link ? `<a href="${h(p.link)}" class="project-link" target="_blank" rel="noopener noreferrer">Visit Project &rarr;</a>` : ''}
    </div>`).join('')}
  </div>
</section>`;
}

/* ─── Skills ─────────────────────────────────────────────────── */
function renderSkills() {
  return `
<section id="skills" class="section">
  ${eyebrow(3, 'Skills')}
  <h2 class="section-title">Technical Stack</h2>
  <div class="skills-grid">
    ${PORTFOLIO.skills.map(s => `
    <div class="skill-cat">
      <p class="skill-cat-name">${h(s.category)}</p>
      <div class="skill-tags">
        ${s.items.map(i => `<span class="skill-tag">${h(i)}</span>`).join('')}
      </div>
    </div>`).join('')}
  </div>
</section>`;
}

/* ─── Research ───────────────────────────────────────────────── */
function renderResearch() {
  return `
<section id="research" class="section">
  ${eyebrow(4, 'Research')}
  <h2 class="section-title">Publications &amp; Theses</h2>
  <div class="research-list">
    ${PORTFOLIO.research.map(r => `
    <div class="research-item">
      <div class="research-meta">
        <span class="research-badge">${h(r.type)}</span>
        <span class="research-institution">${h(r.institution)}</span>
        <span class="research-year">${h(r.year)}</span>
      </div>
      <h3 class="research-title">${h(r.title)}</h3>
      <p class="research-desc">${h(r.description)}</p>
      <div class="research-tags">
        ${r.tags.map(t => `<span class="research-tag">${h(t)}</span>`).join('')}
      </div>
      ${r.photos && r.photos.length ? `
      <div class="research-photos">
        ${r.photos.map(src => `
        <div class="research-photo">
          <img src="${h(src)}" alt="Research" loading="lazy">
        </div>`).join('')}
      </div>` : ''}
      ${r.link ? `<a href="${h(r.link)}" class="research-link" target="_blank" rel="noopener noreferrer">View Paper &rarr;</a>` : ''}
    </div>`).join('')}
  </div>
</section>`;
}

/* ─── Certifications + Awards ────────────────────────────────── */
function renderCertifications() {
  return `
<section id="certifications" class="section">
  ${eyebrow(5, 'Certifications')}
  <h2 class="section-title">Credentials &amp; Awards</h2>

  <div class="cert-grid">
    ${PORTFOLIO.certifications.map(c => `
    <div class="cert-card">
      ${c.issuer ? `<p class="cert-issuer">${h(c.issuer)}</p>` : ''}
      <h3 class="cert-name">${h(c.name)}</h3>
      <div class="cert-meta">
        ${c.code  ? `<span class="cert-code">${h(c.code)}</span>` : ''}
        ${c.score ? `<span class="cert-score">${h(c.score)}</span>` : ''}
      </div>
      ${c.link ? `<a href="${h(c.link)}" class="cert-link" target="_blank" rel="noopener noreferrer">Verify Certificate &rarr;</a>` : ''}
    </div>`).join('')}
  </div>

  <p class="awards-eyebrow">Awards &amp; Recognition</p>

  ${PORTFOLIO.awardPhotos?.length ? `
  <div class="photo-strip">
    ${PORTFOLIO.awardPhotos.map(p => `
    <div class="strip-photo" title="${h(p.caption)}">
      <img src="${h(p.src)}" alt="${h(p.caption)}" loading="lazy">
    </div>`).join('')}
  </div>` : ''}

  <div class="award-list">
    ${PORTFOLIO.awards.map(a => `
    <div class="award-item">
      <div class="award-icon">${a.emoji || '🏆'}</div>
      <div class="award-body">
        <p class="award-title">${h(a.title)}</p>
        <p class="award-event">${h(a.event)}</p>
        <p class="award-desc">${h(a.description)}</p>
      </div>
    </div>`).join('')}
  </div>
</section>`;
}

/* ─── Contact ────────────────────────────────────────────────── */
function renderContact() {
  const p = PORTFOLIO;
  const rows = [
    p.email    && { label: 'Email',    val: p.email,                  href: `mailto:${p.email}`  },
    p.github   && { label: 'GitHub',   val: 'github.com/Suvrakar',    href: p.github             },
    p.linkedin && { label: 'LinkedIn', val: 'linkedin.com/in/suvra123',href: p.linkedin          },
    p.phone    && { label: 'Phone',    val: p.phone,                  href: `tel:${p.phone}`     },
    p.leetcode && { label: 'LeetCode', val: 'leetcode.com/Suvrakar',  href: p.leetcode           },
  ].filter(Boolean);

  return `
<section id="contact" class="section">
  ${eyebrow(6, 'Contact')}
  <div class="contact-grid">
    <div>
      <h2 class="contact-heading">Let&rsquo;s build something remarkable.</h2>
      <p class="contact-sub">Open to senior engineering roles, research collaborations, and meaningful technical challenges. Based in ${h(p.location)}.</p>
      <a href="mailto:${h(p.email)}" class="btn btn-primary">Send an Email</a>
    </div>
    <div class="contact-links">
      ${rows.map(r => `
      <a href="${h(r.href)}" class="contact-row" target="_blank" rel="noopener noreferrer">
        <span class="contact-row-label">${h(r.label)}</span>
        <span class="contact-row-val">${h(r.val)}</span>
      </a>`).join('')}
    </div>
  </div>
</section>`;
}

/* ─── Footer ─────────────────────────────────────────────────── */
function renderFooter() {
  return `<footer>${h(PORTFOLIO.name)} &mdash; ${new Date().getFullYear()} &mdash; suvrakar.github.io</footer>`;
}

/* ─── Full render ────────────────────────────────────────────── */
function render() {
  document.getElementById('app').innerHTML =
    `<button class="hamburger" id="hamburger" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>` +
    renderSidebar() +
    `<main id="main">` +
      renderHero() +
      renderAbout() +
      renderExperience() +
      renderProjects() +
      renderSkills() +
      renderResearch() +
      renderCertifications() +
      renderContact() +
      renderFooter() +
    `</main>`;
}

/* ─── Active nav via IntersectionObserver ────────────────────── */
function setupNav() {
  const links = document.querySelectorAll('.nav-link');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(l => l.classList.toggle('active', l.dataset.section === e.target.id));
    });
  }, { rootMargin: '-12% 0px -62% 0px', threshold: 0 });

  document.querySelectorAll('section[id]').forEach(s => io.observe(s));

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById(link.dataset.section)?.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    });
  });

  document.querySelector('a[href="#projects"]')?.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ─── Mobile menu ────────────────────────────────────────────── */
function closeMobileMenu() {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('mobile-overlay')?.classList.remove('show');
}
function setupMobileMenu() {
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('mobile-overlay').classList.toggle('show');
  });
  document.getElementById('mobile-overlay').addEventListener('click', closeMobileMenu);
}

/* ─── Lightbox ───────────────────────────────────────────────── */
function setupLightbox() {
  /* Inject DOM once */
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Image viewer');
  lb.innerHTML = `
    <div class="lb-inner">
      <div class="lb-img-frame"><img id="lb-img" src="" alt=""></div>
      <p class="lb-caption" id="lb-caption"></p>
      <p class="lb-counter" id="lb-counter"></p>
    </div>
    <button class="lb-close" id="lb-close" aria-label="Close">&#10005;</button>
    <button class="lb-arrow prev" id="lb-prev" aria-label="Previous">&#8592;</button>
    <button class="lb-arrow next" id="lb-next" aria-label="Next">&#8594;</button>
  `;
  document.body.appendChild(lb);

  const lbImg     = lb.querySelector('#lb-img');
  const lbCaption = lb.querySelector('#lb-caption');
  const lbCounter = lb.querySelector('#lb-counter');
  const lbClose   = lb.querySelector('#lb-close');
  const lbPrev    = lb.querySelector('#lb-prev');
  const lbNext    = lb.querySelector('#lb-next');

  /* All gallery images collected at open time */
  let gallery = [];
  let current = 0;
  let isOpen  = false;

  /* Collect all currently rendered gallery images */
  function getGallery() {
    return Array.from(document.querySelectorAll('.research-photo img, .strip-photo img'));
  }

  function showSlide(idx) {
    const slide = gallery[idx];
    if (!slide) return;
    current = idx;

    /* Smooth swap: fade out → swap src → fade in */
    lbImg.style.opacity = '0';
    lbImg.style.transform = 'scale(0.96)';
    setTimeout(() => {
      lbImg.src = slide.src;
      lbImg.alt = slide.alt || '';
      lbCaption.textContent = slide.title || slide.alt || '';
      lbCaption.style.display = lbCaption.textContent ? 'block' : 'none';
      lbCounter.textContent  = gallery.length > 1 ? `${idx + 1} / ${gallery.length}` : '';
      lbPrev.disabled = idx === 0;
      lbNext.disabled = idx === gallery.length - 1;
      lbImg.style.opacity = '1';
      lbImg.style.transform = 'scale(1)';
    }, 130);
  }

  function openAt(idx) {
    gallery = getGallery();
    lbImg.style.transition = 'opacity 0.13s ease, transform 0.18s ease';
    showSlide(idx);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    isOpen = true;
    requestAnimationFrame(() => lbClose.focus());
  }

  function close() {
    if (!isOpen) return;
    lb.classList.remove('open');
    document.body.style.overflow = '';
    isOpen = false;
    setTimeout(() => { lbImg.src = ''; }, 350);
  }

  /* Controls */
  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', () => showSlide(current - 1));
  lbNext.addEventListener('click', () => showSlide(current + 1));

  /* Click backdrop to close */
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });

  /* Keyboard */
  document.addEventListener('keydown', (e) => {
    if (!isOpen) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft'  && current > 0)              showSlide(current - 1);
    if (e.key === 'ArrowRight' && current < gallery.length - 1) showSlide(current + 1);
  });

  /* Touch swipe */
  let touchStartX = 0;
  lb.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 40) return;
    if (dx < 0 && current < gallery.length - 1) showSlide(current + 1);
    if (dx > 0 && current > 0)                  showSlide(current - 1);
  });

  /* Delegate click on any photo thumbnail */
  document.addEventListener('click', (e) => {
    const photo = e.target.closest('.research-photo, .strip-photo');
    if (!photo) return;
    const imgs = getGallery();
    const clicked = photo.querySelector('img');
    const idx = imgs.indexOf(clicked);
    if (idx !== -1) openAt(idx);
  });
}

/* ─── Boot ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  render();
  setupNav();
  setupMobileMenu();
  setupLightbox();
});
