'use strict';

/* Navigation sections (order = sidebar order) */
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
function h(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* "01 — LABEL" tag above each section */
function tag(idx, label) {
  return `<p class="section-tag">${String(idx + 1).padStart(2, '0')} &mdash; ${h(label).toUpperCase()}</p>`;
}

/* ─── Sidebar ────────────────────────────────────────────────── */
function renderSidebar() {
  const p = PORTFOLIO;
  const initials = p.name.split(' ').map(w => w[0]).join('').slice(0, 3);

  const socials = [
    p.github   && { label: 'GitHub',   href: p.github   },
    p.linkedin && { label: 'LinkedIn', href: p.linkedin  },
    p.leetcode && { label: 'LeetCode', href: p.leetcode  },
    p.scholar  && { label: 'Scholar',  href: p.scholar   },
  ].filter(Boolean);

  return `
<aside id="sidebar">
  <div class="sidebar-profile">
    <div class="avatar-ring">
      <span class="avatar-initials">${h(initials)}</span>
    </div>
    <h1 class="sidebar-name">${h(p.name)}</h1>
    <p class="sidebar-title">${h(p.title)}</p>
  </div>

  <div class="sidebar-divider"></div>

  <nav class="sidebar-nav" aria-label="Page sections">
    <ul>
      ${SECTIONS.map(s =>
        `<li><a href="#${s.id}" class="nav-link" data-section="${s.id}">${h(s.label)}</a></li>`
      ).join('\n      ')}
    </ul>
  </nav>

  <div class="sidebar-social">
    ${socials.map(s =>
      `<a href="${h(s.href)}" class="social-link" target="_blank" rel="noopener noreferrer">&#8594; ${h(s.label)}</a>`
    ).join('\n    ')}
  </div>
</aside>`;
}

/* ─── Hero ───────────────────────────────────────────────────── */
function renderHero() {
  const p = PORTFOLIO;
  return `
<section id="hero" class="section">
  <p class="hero-tag">Available for senior roles &amp; collaborations &nbsp;·&nbsp; ${h(p.location)}</p>
  <h1 class="hero-name">${h(p.name)}</h1>
  <p class="hero-title">${h(p.title)}</p>
  <p class="hero-bio">${h(p.bio[0])}</p>

  <div class="hero-divider"></div>

  <div class="hero-stats">
    ${p.stats.map(s => `
    <div class="stat">
      <span class="stat-value">${h(s.value)}</span>
      <span class="stat-label">${h(s.label)}</span>
    </div>`).join('')}
  </div>

  <div class="hero-divider"></div>

  <div class="hero-ctas">
    <a href="mailto:${h(p.email)}" class="btn btn-primary">Get in Touch</a>
    <a href="#projects" class="btn btn-secondary">View Work</a>
  </div>
</section>`;
}

/* ─── About ──────────────────────────────────────────────────── */
function renderAbout() {
  const p = PORTFOLIO;
  return `
<section id="about" class="section">
  ${tag(0, 'About')}
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
          <p class="edu-meta">${h(e.institution)} &nbsp;·&nbsp; ${h(e.year)}</p>
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
  ${tag(1, 'Experience')}
  <h2 class="section-title">Work History</h2>

  <div class="exp-list">
    ${PORTFOLIO.experience.map(e => `
    <div class="exp-item">
      <div class="exp-header">
        <h3 class="exp-company">${h(e.company)}</h3>
        <span class="exp-period">${h(e.period)}</span>
      </div>
      <div class="exp-sub">
        <span class="exp-role">${h(e.role)}</span>
        ${e.location ? `<span class="exp-sep">·</span><span class="exp-location">${h(e.location)}</span>` : ''}
      </div>
      <ul class="exp-bullets">
        ${e.highlights.map(hl => `<li>${h(hl)}</li>`).join('\n        ')}
      </ul>
    </div>`).join('')}
  </div>
</section>`;
}

/* ─── Projects ───────────────────────────────────────────────── */
function renderProjects() {
  return `
<section id="projects" class="section">
  ${tag(2, 'Projects')}
  <h2 class="section-title">Selected Work</h2>

  <div class="projects-grid">
    ${PORTFOLIO.projects.map(p => `
    <div class="project-card">
      <h3 class="project-name">${h(p.name)}</h3>
      <div class="project-tech">
        ${p.tech.map(t => `<span class="tech-tag">${h(t)}</span>`).join('')}
      </div>
      <p class="project-desc">${h(p.description)}</p>
      ${p.link ? `<a href="${h(p.link)}" class="project-link" target="_blank" rel="noopener noreferrer">Visit Project &#8594;</a>` : ''}
    </div>`).join('')}
  </div>
</section>`;
}

/* ─── Skills ─────────────────────────────────────────────────── */
function renderSkills() {
  return `
<section id="skills" class="section">
  ${tag(3, 'Skills')}
  <h2 class="section-title">Technical Stack</h2>

  <div class="skills-grid">
    ${PORTFOLIO.skills.map(s => `
    <div class="skill-category">
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
  ${tag(4, 'Research')}
  <h2 class="section-title">Publications &amp; Theses</h2>

  <div class="research-list">
    ${PORTFOLIO.research.map(r => `
    <div class="research-item">
      <div class="research-meta">
        <span class="research-type">${h(r.type)}</span>
        <span class="research-institution">${h(r.institution)}</span>
        <span class="research-year">${h(r.year)}</span>
      </div>
      <h3 class="research-title">${h(r.title)}</h3>
      <p class="research-desc">${h(r.description)}</p>
      <div class="research-tags">
        ${r.tags.map(t => `<span class="research-tag">${h(t)}</span>`).join('')}
      </div>
      ${r.link ? `<a href="${h(r.link)}" class="research-link" target="_blank" rel="noopener noreferrer">View Paper &#8594;</a>` : ''}
    </div>`).join('')}
  </div>
</section>`;
}

/* ─── Certifications ─────────────────────────────────────────── */
function renderCertifications() {
  return `
<section id="certifications" class="section">
  ${tag(5, 'Certifications')}
  <h2 class="section-title">Credentials &amp; Awards</h2>

  <div class="cert-grid">
    ${PORTFOLIO.certifications.map(c => `
    <div class="cert-card">
      ${c.issuer ? `<p class="cert-issuer">${h(c.issuer)}</p>` : ''}
      <h3 class="cert-name">${h(c.name)}</h3>
      <div class="cert-meta">
        ${c.code  ? `<span class="cert-code">${h(c.code)}</span>`         : ''}
        ${c.score ? `<span class="cert-score">Score: ${h(c.score)}</span>` : ''}
      </div>
      ${c.link ? `<a href="${h(c.link)}" class="cert-link" target="_blank" rel="noopener noreferrer">Verify Certificate &#8594;</a>` : ''}
    </div>`).join('')}
  </div>

  <p class="awards-label">Awards &amp; Recognition</p>
  ${PORTFOLIO.awards.map(a => `
  <div class="award-item">
    <div class="award-dot"></div>
    <div>
      <p class="award-title">${h(a.title)}</p>
      <p class="award-event">${h(a.event)}</p>
      <p class="award-desc">${h(a.description)}</p>
    </div>
  </div>`).join('')}
</section>`;
}

/* ─── Contact ────────────────────────────────────────────────── */
function renderContact() {
  const p = PORTFOLIO;

  const rows = [
    p.email    && { label: 'Email',    val: p.email,                       href: `mailto:${p.email}` },
    p.github   && { label: 'GitHub',   val: p.github.replace('https://', ''), href: p.github },
    p.linkedin && { label: 'LinkedIn', val: 'linkedin.com/in/suvra123',    href: p.linkedin },
    p.phone    && { label: 'Phone',    val: p.phone,                       href: `tel:${p.phone}` },
  ].filter(Boolean);

  return `
<section id="contact" class="section">
  ${tag(6, 'Contact')}

  <div class="contact-grid">
    <div>
      <h2 class="contact-heading">Let&rsquo;s build something remarkable.</h2>
      <p class="contact-sub">
        Open to senior engineering roles, research collaborations, and meaningful
        technical challenges. Based in ${h(p.location)}.
      </p>
      <a href="mailto:${h(p.email)}" class="contact-btn">Send an Email</a>
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
  return `<footer>${h(PORTFOLIO.name)} &mdash; ${new Date().getFullYear()}</footer>`;
}

/* ─── Hamburger button ───────────────────────────────────────── */
function renderHamburger() {
  return `
<button class="hamburger" id="hamburger" aria-label="Toggle navigation">
  <span></span><span></span><span></span>
</button>`;
}

/* ─── Main render ────────────────────────────────────────────── */
function render() {
  const app = document.getElementById('app');
  app.innerHTML =
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

/* ─── Active-section highlight via IntersectionObserver ─────── */
function setupNavHighlight() {
  const links = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach(l => l.classList.toggle('active', l.dataset.section === id));
    });
  }, {
    rootMargin: '-15% 0px -60% 0px',
    threshold: 0,
  });

  document.querySelectorAll('section[id]').forEach(s => observer.observe(s));

  /* Smooth scroll + close mobile menu on click */
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById(link.dataset.section)
               ?.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    });
  });

  /* Hero CTA "View Work" */
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
  const btn     = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobile-overlay');

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  });

  overlay.addEventListener('click', closeMobileMenu);
}

/* ─── Boot ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  render();
  setupNavHighlight();
  setupMobileMenu();
});
