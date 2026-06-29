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

/* Safe HTML escape */
function h(v) {
  return String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* Eyebrow "01 — LABEL" */
function eyebrow(idx, label) {
  return `<p class="section-eyebrow">${String(idx+1).padStart(2,'0')} &mdash; ${h(label).toUpperCase()}</p>`;
}

/* ─── Sidebar ────────────────────────────────────────────────── */
function renderSidebar() {
  const p = PORTFOLIO;
  const initials = p.name.split(' ').map(w => w[0]).join('').slice(0,3);

  const socials = [
    p.github   && { label: 'GitHub',   href: p.github   },
    p.linkedin && { label: 'LinkedIn', href: p.linkedin  },
    p.leetcode && { label: 'LeetCode', href: p.leetcode  },
    p.scholar  && { label: 'Scholar',  href: p.scholar   },
  ].filter(Boolean);

  return `
<aside id="sidebar">
  <div class="sidebar-profile">
    <div class="sidebar-avatar">
      <span class="avatar-initials">${h(initials)}</span>
    </div>
    <h1 class="sidebar-name">${h(p.name)}</h1>
    <p class="sidebar-role">${h(p.title)}</p>
  </div>

  <div class="sidebar-sep"></div>

  <nav class="sidebar-nav" aria-label="Page sections">
    <ul>
      ${SECTIONS.map(s =>
        `<li><a href="#${s.id}" class="nav-link" data-section="${s.id}">${h(s.label)}</a></li>`
      ).join('\n      ')}
    </ul>
  </nav>

  <div class="sidebar-social">
    ${socials.map(s =>
      `<a href="${h(s.href)}" class="social-link" target="_blank" rel="noopener noreferrer">
        <span class="social-arrow">↗</span>${h(s.label)}
      </a>`
    ).join('\n    ')}
  </div>
</aside>`;
}

/* ─── Hero ───────────────────────────────────────────────────── */
function renderHero() {
  const p = PORTFOLIO;
  return `
<section id="hero">
  <div class="hero-eyebrow">
    <span class="hero-dot"></span>
    Available for senior roles &nbsp;&middot;&nbsp; ${h(p.location)}
  </div>

  <h1 class="hero-name">${h(p.name.split(' ')[0])} <em>${h(p.name.split(' ').slice(1).join(' '))}</em></h1>
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
          <p class="edu-degree">${h(e.degree)}</p>
          <p class="edu-meta">${h(e.institution)} &middot; ${h(e.year)}</p>
          ${e.thesis ? `<p class="edu-thesis">${h(e.thesis)}</p>` : ''}
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
        <h3 class="exp-company">${h(e.company)}</h3>
        <p class="exp-period">${h(e.period)}</p>
        <p class="exp-location">${h(e.location)}</p>
      </div>
      <div class="exp-right">
        <p class="exp-role">${h(e.role)}</p>
        <ul class="exp-bullets">
          ${e.highlights.map(hl => `
          <li><span class="exp-bullet-dot"></span>${h(hl)}</li>`).join('')}
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
      ${p.link
        ? `<a href="${h(p.link)}" class="project-link" target="_blank" rel="noopener noreferrer">Visit Project &rarr;</a>`
        : ''}
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
          <img src="${h(src)}" alt="Research photo" loading="lazy">
        </div>`).join('')}
      </div>` : ''}
      ${r.link ? `<a href="${h(r.link)}" class="research-link" target="_blank" rel="noopener noreferrer">View Paper &rarr;</a>` : ''}
    </div>`).join('')}
  </div>
</section>`;
}

/* ─── Certifications + Awards ────────────────────────────────── */
function renderCertifications() {
  const iconMap = { '🏆': '🏆', '🔬': '🔬', '🥉': '🥉', '⭐': '⭐', '🏅': '🏅' };
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
      ${c.link ? `<a href="${h(c.link)}" class="cert-link" target="_blank" rel="noopener noreferrer">Verify &rarr;</a>` : ''}
    </div>`).join('')}
  </div>

  <p class="awards-eyebrow">Awards &amp; Recognition</p>

  ${PORTFOLIO.awardPhotos && PORTFOLIO.awardPhotos.length ? `
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
    p.email    && { label: 'Email',    val: p.email,                            href: `mailto:${p.email}`  },
    p.github   && { label: 'GitHub',   val: 'github.com/Suvrakar',              href: p.github             },
    p.linkedin && { label: 'LinkedIn', val: 'linkedin.com/in/suvra123',         href: p.linkedin           },
    p.phone    && { label: 'Phone',    val: p.phone,                            href: `tel:${p.phone}`     },
    p.leetcode && { label: 'LeetCode', val: 'leetcode.com/Suvrakar',            href: p.leetcode           },
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

/* ─── Hamburger ──────────────────────────────────────────────── */
function renderHamburger() {
  return `
<button class="hamburger" id="hamburger" aria-label="Toggle navigation">
  <span></span><span></span><span></span>
</button>`;
}

/* ─── Full render ────────────────────────────────────────────── */
function render() {
  document.getElementById('app').innerHTML =
    renderHamburger() +
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

/* ─── Active nav highlight ───────────────────────────────────── */
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

/* ─── Boot ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  render();
  setupNav();
  setupMobileMenu();
});
