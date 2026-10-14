'use strict';

const SECTIONS = [
  { id: 'about',          label: 'About'          },
  { id: 'experience',     label: 'Experience'     },
  { id: 'projects',       label: 'Projects'       },
  { id: 'skills',         label: 'Skills'         },
  { id: 'research',       label: 'Research'       },
  { id: 'certifications', label: 'Certifications' },
  { id: 'beyond',         label: 'Beyond Code'    },
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

  medium: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>`,
};

/* ── Tech skill icon metadata ────────────────────────────────── */
/* icon: 'di'  → devicon CSS class (devicon.min.css must be loaded)  */
/*       'img' → <img> from Simple Icons CDN (no dep needed)         */
/*       'txt' → styled text initials (abstract concepts)            */
const SKILL_META = {
  'JavaScript ES6+': { icon: 'di',  cls: 'devicon-javascript-plain colored',               accent: '#F7DF1E' },
  'TypeScript':      { icon: 'di',  cls: 'devicon-typescript-plain colored',               accent: '#3178C6' },
  'Python':          { icon: 'di',  cls: 'devicon-python-plain colored',                   accent: '#3776AB' },
  'Java':            { icon: 'di',  cls: 'devicon-java-plain colored',                     accent: '#ED8B00' },
  'React':           { icon: 'di',  cls: 'devicon-react-original colored',                 accent: '#61DAFB' },
  'Next.js':         { icon: 'di',  cls: 'devicon-nextjs-plain',                           accent: '#111111' },
  'Node.js':         { icon: 'di',  cls: 'devicon-nodejs-plain colored',                   accent: '#339933' },
  'Express.js':      { icon: 'di',  cls: 'devicon-express-original',                       accent: '#444444' },
  'Spring Boot':     { icon: 'di',  cls: 'devicon-spring-plain colored',                   accent: '#6DB33F' },
  'FastAPI':         { icon: 'di',  cls: 'devicon-fastapi-plain colored',                  accent: '#009688' },
  'Django':          { icon: 'di',  cls: 'devicon-django-plain colored',                   accent: '#0C4B33' },
  'PostgreSQL':      { icon: 'di',  cls: 'devicon-postgresql-plain colored',               accent: '#336791' },
  'Redis':           { icon: 'di',  cls: 'devicon-redis-plain colored',                    accent: '#DC382D' },
  'Elasticsearch':   { icon: 'di',  cls: 'devicon-elasticsearch-plain colored',            accent: '#005571' },
  'GraphQL':         { icon: 'di',  cls: 'devicon-graphql-plain colored',                  accent: '#E10098' },
  'Docker':          { icon: 'di',  cls: 'devicon-docker-plain colored',                   accent: '#2496ED' },
  'Kubernetes':      { icon: 'di',  cls: 'devicon-kubernetes-plain colored',               accent: '#326CE5' },
  'Jenkins':         { icon: 'di',  cls: 'devicon-jenkins-plain colored',                  accent: '#D33833' },
  /* Simple Icons CDN — brand SVGs that aren't in devicon */
  'AWS':             { icon: 'img', src: 'https://cdn.simpleicons.org/amazonaws/FF9900',           accent: '#FF9900' },
  'LangChain':       { icon: 'img', src: 'https://cdn.simpleicons.org/langchain/1C3A5E',           accent: '#1C3A5E' },
  'OpenAI API':      { icon: 'img', src: 'https://cdn.simpleicons.org/openai/10A37F',              accent: '#10A37F' },
  'Gemini API':      { icon: 'img', src: 'https://cdn.simpleicons.org/googlegemini/4285F4',        accent: '#4285F4' },
  'Claude API':      { icon: 'img', src: 'https://cdn.simpleicons.org/claude/D97757',              accent: '#D97757' },
  'Claude Agent SDK':{ icon: 'img', src: 'https://cdn.simpleicons.org/anthropic/191919',           accent: '#D97757' },
  'Claude Code':     { icon: 'img', src: 'https://cdn.simpleicons.org/claude/D97757',              accent: '#D97757' },
  'MCP':             { icon: 'img', src: 'https://cdn.simpleicons.org/modelcontextprotocol/111111', accent: '#111111' },
  /* Styled text initials for abstract / framework-agnostic concepts */
  'REST':            { icon: 'txt', text: 'REST',    accent: '#4B5563' },
  'gRPC':            { icon: 'txt', text: 'gRPC',    accent: '#244C5A' },
  'CI/CD':           { icon: 'txt', text: 'CI/CD',   accent: '#374151' },
  'Agentic Patterns':{ icon: 'txt', text: 'AP',      accent: '#7C3AED' },
  'YOLO':            { icon: 'txt', text: 'YOLO',    accent: '#E05535' },
  'Computer Vision': { icon: 'txt', text: 'CV',      accent: '#059669' },
  'Microservices':   { icon: 'txt', text: 'MS',      accent: '#0F172A' },
  'Distributed Systems': { icon: 'txt', text: 'DS',  accent: '#1E293B' },
  'Event-Driven':    { icon: 'txt', text: 'ED',      accent: '#374151' },
  'Cloud-Native':    { icon: 'txt', text: 'CN',      accent: '#0EA5E9' },
  'Multi-Agent Orchestration': { icon: 'txt', text: 'MA', accent: '#B45309' },
  'Prompt Engineering': { icon: 'txt', text: 'PE',   accent: '#C2410C' },
  'Context Management': { icon: 'txt', text: 'CM',   accent: '#9A3412' },
  'Structured Output':  { icon: 'txt', text: '{ }',  accent: '#78350F' },
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
    p.medium   && { key: 'medium',   label: 'Medium',   href: p.medium    },
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
      <div class="tl-wrap edu-wrap">
        ${p.education.map((e, i) => `
        <div class="tl-entry" style="--tl-delay:${(i * 0.12 + 0.06).toFixed(2)}s">
          <div class="tl-pip"></div>
          <div class="tl-body">
            <div class="edu-inner">
              ${orgLogo({ logo: e.logo, initials: e.initials, logoBg: e.logoBg, link: e.link, alt: e.institution })}
              <div>
                <p class="edu-degree">${h(e.degree)}</p>
                <p class="edu-meta">
                  ${e.link
                    ? `<a href="${h(e.link)}" target="_blank" rel="noopener noreferrer" style="color:inherit">${h(e.institution)}</a>`
                    : h(e.institution)}
                  &middot; ${h(e.year)}
                </p>
                ${e.thesis ? `<p class="edu-thesis">${h(e.thesis)}</p>` : ''}
                ${e.photos?.length ? `
                <div class="edu-photos">
                  ${e.photos.map(ph => `
                  <div class="research-photo edu-photo" title="${h(ph.caption)}">
                    <img src="${h(ph.src)}" alt="${h(ph.caption)}" loading="lazy">
                  </div>`).join('')}
                  <p class="edu-photo-cap">${h(e.photos[0].caption)}</p>
                </div>` : ''}
              </div>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </div>
</section>`;
}

/* ─── Experience ─────────────────────────────────────────────── */
function timelineEntry(e, i) {
  const isActive = /present/i.test(e.period);
  return `
    <div class="tl-entry${isActive ? ' tl-active' : ''}" style="--tl-delay:${(i * 0.1).toFixed(2)}s">
      <div class="tl-pip"></div>
      <div class="tl-body">
        <div class="exp-hd">
          <div class="exp-hd-main">
            ${orgLogo({ logo: e.logo, initials: e.initials, logoBg: e.logoBg, link: e.link, alt: e.company })}
            <div class="exp-hd-text">
              ${e.link
                ? `<a href="${h(e.link)}" class="exp-co-link" target="_blank" rel="noopener noreferrer">
                     <h3 class="exp-company">${h(e.company)}</h3>${EXT}
                   </a>`
                : `<h3 class="exp-company">${h(e.company)}</h3>`}
              <p class="exp-role">${h(e.role)}</p>
              <p class="exp-loc">${h(e.location)}</p>
            </div>
          </div>
          <span class="exp-period-badge">${h(e.period)}</span>
        </div>
        ${e.progression?.length ? `
        <ol class="promo-ladder" aria-label="Promotion path" style="--steps:${e.progression.length}">
          ${e.progression.map((r, j, all) => `
          <li class="promo-step${j === all.length - 1 ? ' promo-top' : ''}" style="--i:${j}">
            <span class="promo-node">${j === all.length - 1 ? '&#9733;' : j + 1}</span>
            <span class="promo-role">${h(r.role)}</span>
            <span class="promo-period">${h(r.period)}</span>
          </li>`).join('')}
        </ol>` : ''}
        <ul class="exp-bullets">
          ${e.highlights.map(hl => `<li><span class="exp-bullet-dot"></span>${h(hl)}</li>`).join('')}
        </ul>
        ${e.links?.length ? `
        <div class="exp-links">
          ${e.links.map(l => `<a href="${h(l.url)}" class="research-link" target="_blank" rel="noopener noreferrer">${h(l.label)} ${EXT}</a>`).join('')}
        </div>` : ''}
        ${e.photos?.length ? `
        <div class="research-photos exp-photos${e.photos.length > 1 ? ' exp-photos-multi' : ''}">
          ${e.photos.map(p => `
          <div class="research-photo" title="${h(p.caption)}">
            <img src="${h(p.src)}" alt="${h(p.caption)}" loading="lazy">
          </div>`).join('')}
        </div>` : ''}
      </div>
    </div>`;
}

/* ── Date helpers for 'YYYY-MM' strings (null = present) ─────── */
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function monthIdx(ym) {
  if (!ym) { const d = new Date(); return d.getFullYear() * 12 + d.getMonth(); }
  const [y, m] = ym.split('-').map(Number);
  return y * 12 + (m - 1);
}
function fmtMonth(ym) {
  if (!ym) return 'Present';
  const i = monthIdx(ym);
  return `${MONTHS[i % 12]} ${Math.floor(i / 12)}`;
}
/* Inclusive month count, matching LinkedIn ("May 2024 – Jul 2025" = 1 yr 3 mos) */
function tenure(start, end) {
  const n = monthIdx(end) - monthIdx(start) + 1;
  const y = Math.floor(n / 12), m = n % 12;
  return [y && `${y} yr${y > 1 ? 's' : ''}`, m && `${m} mo${m > 1 ? 's' : ''}`].filter(Boolean).join(' ');
}

/* ── Career-at-a-glance: proportional bar with promotion markers ── */
function renderCareerStrip() {
  const jobs = PORTFOLIO.experience;
  const min = Math.min(...jobs.map(j => monthIdx(j.start)));
  const max = monthIdx(null) + 1;
  const pct = i => ((i - min) / (max - min) * 100).toFixed(2);

  const segs = [...jobs].reverse().map((j, k) => {
    const left = pct(monthIdx(j.start));
    const width = (pct(monthIdx(j.end) + 1) - left).toFixed(2);
    return `<div class="cs-seg cs-seg-${k}${j.end ? '' : ' cs-current'}" style="left:${left}%;width:${width}%;--k:${k}"
                 title="${h(j.company)} · ${fmtMonth(j.start)} – ${fmtMonth(j.end)}">
      ${j.logo ? `<span class="cs-seg-logo"><img src="${h(j.logo)}" alt="" loading="lazy"></span>` : ''}
      <span class="cs-seg-label">${h(j.company.replace(/ (PLC|Limited)$/, ''))}</span>
    </div>`;
  }).join('');

  const promos = jobs.flatMap(j => j.roles.slice(0, -1).map(r => ({ r, j })))
    .map(({ r }) => ({ r, at: +pct(monthIdx(r.start)) }))
    .map(({ r, at }) => `<div class="cs-promo${at > 82 ? ' cs-promo-end' : at < 12 ? ' cs-promo-start' : ''}" style="left:${at}%" title="Promoted to ${h(r.title)} · ${fmtMonth(r.start)}">
        <span class="cs-promo-dot"></span>
        <span class="cs-promo-tip">&uarr; ${h(r.title)}<em>${fmtMonth(r.start)}</em></span>
      </div>`).join('');

  const firstYear = Math.ceil(min / 12);
  const ticks = [];
  for (let y = firstYear; y * 12 < max; y++) {
    ticks.push(`<span class="cs-tick" style="left:${pct(y * 12)}%">${y}</span>`);
  }

  const totalPromos = jobs.reduce((n, j) => n + j.roles.length - 1, 0);
  return `
  <div class="career-strip" aria-label="Career timeline">
    <div class="cs-head">
      <span class="cs-title">Career at a glance</span>
      <span class="cs-summary">${tenure(fmtStart(min), null)} &middot; ${jobs.length} companies &middot; ${totalPromos} promotions</span>
    </div>
    <div class="cs-track">
      ${segs}
      ${promos}
    </div>
    <div class="cs-axis">${ticks.join('')}<span class="cs-tick cs-now" style="left:100%">Now</span></div>
  </div>`;
}
function fmtStart(i) { return `${Math.floor(i / 12)}-${String(i % 12 + 1).padStart(2, '0')}`; }

/* ── One company with its role track ─────────────────────────── */
function jobEntry(e, i) {
  const isActive = !e.end;
  const roles = e.roles.map((r, j) => {
    const promoted = j < e.roles.length - 1;
    const current  = !r.end;
    return `
      <li class="role${current ? ' role-current' : ''}" style="--r:${j}">
        <span class="role-dot" aria-hidden="true"></span>
        <div class="role-hd">
          <h4 class="role-title">${h(r.title)}</h4>
          ${current ? '<span class="role-chip role-chip-now">Current</span>' : ''}
          ${promoted ? '<span class="role-chip role-chip-promo">&uarr; Promoted</span>' : ''}
        </div>
        <p class="role-period">${fmtMonth(r.start)} – ${fmtMonth(r.end)} <span>&middot; ${tenure(r.start, r.end)}</span></p>
        ${r.highlights?.length ? `
        <ul class="exp-bullets role-bullets">
          ${r.highlights.map(hl => `<li><span class="exp-bullet-dot"></span>${h(hl)}</li>`).join('')}
        </ul>` : ''}
      </li>`;
  }).join('');

  return `
    <div class="tl-entry${isActive ? ' tl-active' : ''}" style="--tl-delay:${(i * 0.1).toFixed(2)}s">
      <div class="tl-pip"></div>
      <div class="tl-body">
        <div class="exp-hd">
          <div class="exp-hd-main">
            ${orgLogo({ logo: e.logo, initials: e.initials, logoBg: e.logoBg, link: e.link, alt: e.company })}
            <div class="exp-hd-text">
              ${e.link
                ? `<a href="${h(e.link)}" class="exp-co-link" target="_blank" rel="noopener noreferrer">
                     <h3 class="exp-company">${h(e.company)}</h3>${EXT}
                   </a>`
                : `<h3 class="exp-company">${h(e.company)}</h3>`}
              <p class="exp-meta">${[e.employment, tenure(e.start, e.end)].filter(Boolean).map(h).join(' &middot; ')}</p>
              <p class="exp-loc">${h(e.location)}</p>
            </div>
          </div>
          <span class="exp-period-badge">${fmtMonth(e.start)} – ${fmtMonth(e.end)}</span>
        </div>
        <ol class="role-track${e.roles.length > 1 ? ' role-track-multi' : ''}">
          ${roles}
        </ol>
        ${e.highlights?.length ? `
        <div class="exp-impact">
          <p class="exp-impact-label">Impact</p>
          <ul class="exp-bullets">
            ${e.highlights.map(hl => `<li><span class="exp-bullet-dot"></span>${h(hl)}</li>`).join('')}
          </ul>
        </div>` : ''}
      </div>
    </div>`;
}

function renderExperience() {
  const entries = PORTFOLIO.experience.map(jobEntry).join('');
  const activities = (PORTFOLIO.activities || []).map(timelineEntry).join('');
  const volunteer  = (PORTFOLIO.volunteer  || []).map(timelineEntry).join('');

  return `
<section id="experience" class="section">
  ${eyebrow(1, 'Experience')}
  <h2 class="section-title">Work History</h2>
  ${renderCareerStrip()}
  <div class="tl-wrap">
    ${entries}
  </div>
  ${activities ? `
  <p class="awards-eyebrow exp-activities-eyebrow">Leadership &amp; Extracurricular</p>
  <div class="tl-wrap">
    ${activities}
  </div>` : ''}
  ${volunteer ? `
  <p class="awards-eyebrow exp-activities-eyebrow">Volunteering</p>
  <div class="tl-wrap">
    ${volunteer}
  </div>` : ''}
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
      ${p.org || p.period ? `<p class="project-meta">${[p.org, p.period].filter(Boolean).map(h).join(' &middot; ')}</p>` : ''}
      <div class="project-tech">
        ${p.tech.map(t => `<span class="tech-tag">${h(t)}</span>`).join('')}
      </div>
      <p class="project-desc">${h(p.description)}</p>
      ${p.highlights?.length ? `
      <details class="project-more">
        <summary>Key contributions</summary>
        <ul>${p.highlights.map(x => `<li>${h(x)}</li>`).join('')}</ul>
      </details>` : ''}
      ${p.link ? `<a href="${h(p.link)}" class="project-link" target="_blank" rel="noopener noreferrer">Visit Project &rarr;</a>` : ''}
    </div>`).join('')}
  </div>
</section>`;
}

/* ─── Skills ─────────────────────────────────────────────────── */
function renderSkills() {
  const cats = PORTFOLIO.skills.map(s => s.category);

  const filterBtns = ['All', ...cats].map((c, i) =>
    `<button class="skill-filter-btn${i === 0 ? ' active' : ''}" data-cat="${i === 0 ? 'all' : h(c)}">${h(c)}</button>`
  ).join('');

  const cards = PORTFOLIO.skills.flatMap(s =>
    s.items.map(name => {
      const m = SKILL_META[name] || { icon: 'txt', text: name.slice(0, 2).toUpperCase(), accent: '#6B7280' };
      let iconHtml;
      if (m.icon === 'di') {
        iconHtml = `<i class="${h(m.cls)}" aria-hidden="true"></i>`;
      } else if (m.icon === 'img') {
        iconHtml = `<img src="${h(m.src)}" alt="${h(name)}" width="38" height="38" loading="lazy">`;
      } else {
        iconHtml = `<div class="skill-txt-icon" style="background:${h(m.accent)}">${h(m.text || '?')}</div>`;
      }
      return `<div class="skill-card" data-cat="${h(s.category)}" style="--sk-accent:${h(m.accent)}">
        <div class="skill-icon-wrap">${iconHtml}</div>
        <span class="skill-label">${h(name)}</span>
      </div>`;
    })
  ).join('');

  return `
<section id="skills" class="section">
  ${eyebrow(3, 'Skills')}
  <h2 class="section-title">Technical Stack</h2>
  <div class="skills-filters" role="group" aria-label="Filter skills by category">
    ${filterBtns}
  </div>
  <div class="skills-grid">
    ${cards}
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
    ${[...PORTFOLIO.research].sort((a, b) => String(b.date || b.year).localeCompare(String(a.date || a.year))).map(r => `
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
      ${r.link || r.links?.length ? `
      <div class="exp-links">
        ${r.link ? `<a href="${h(r.link)}" class="research-link" target="_blank" rel="noopener noreferrer">View Paper &rarr;</a>` : ''}
        ${(r.links || []).map(l => `<a href="${h(l.url)}" class="research-link" target="_blank" rel="noopener noreferrer">${h(l.label)} ${EXT}</a>`).join('')}
      </div>` : ''}
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
      ${c.badge ? `<img class="cert-badge" src="${h(c.badge)}" alt="${h(c.name)} badge" loading="lazy">` : ''}
      ${c.issuer ? `<p class="cert-issuer">${h(c.issuer)}</p>` : ''}
      <h3 class="cert-name">${h(c.name)}</h3>
      <div class="cert-meta">
        ${c.code  ? `<span class="cert-code">${h(c.code)}</span>` : ''}
        ${c.score ? `<span class="cert-score">${h(c.score)}</span>` : ''}
        ${c.issued ? `<span class="cert-code">Issued ${h(c.issued)}${c.expires ? ` · Expires ${h(c.expires)}` : ''}</span>` : ''}
      </div>
      ${c.description ? `<p class="cert-desc">${h(c.description)}</p>` : ''}
      ${c.skills?.length ? `<div class="cert-skills">${c.skills.map(t => `<span class="research-tag">${h(t)}</span>`).join('')}</div>` : ''}
      ${c.credentialId ? `<p class="cert-id">Credential ID ${h(c.credentialId)}</p>` : ''}
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
        ${a.link ? `<a href="${h(a.link)}" class="research-link award-link" target="_blank" rel="noopener noreferrer">Details ${EXT}</a>` : ''}
      </div>
    </div>`).join('')}
  </div>
</section>`;
}

/* ─── Contact ────────────────────────────────────────────────── */
function renderContact() {
  const p = PORTFOLIO;
  const rows = [
    p.email    && { label: 'Email',    val: p.email,                   href: `mailto:${p.email}`  },
    p.github   && { label: 'GitHub',   val: 'github.com/Suvrakar',     href: p.github             },
    p.linkedin && { label: 'LinkedIn', val: 'linkedin.com/in/suvra123', href: p.linkedin           },
    p.medium   && { label: 'Medium',   val: 'suvra1.medium.com',        href: p.medium             },
    p.phone    && { label: 'Phone',    val: p.phone,                   href: `tel:${p.phone}`     },
    p.leetcode && { label: 'LeetCode', val: 'leetcode.com/Suvrakar',   href: p.leetcode           },
  ].filter(Boolean);

  return `
<section id="contact" class="section">
  ${eyebrow(7, 'Contact')}
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

/* ─── Beyond Code: travel + reading ──────────────────────────── */
const COVER_TONES = ['#1E293B', '#334155', '#7C2D12', '#14532D', '#1E3A8A', '#581C87', '#713F12', '#0F766E', '#9F1239', '#3F3F46', '#155E75', '#4C1D95'];
function renderBeyond() {
  const travel = PORTFOLIO.travel || [];
  const books  = PORTFOLIO.books  || [];
  if (!travel.length && !books.length) return '';

  const stamps = travel.map((t, i) => `
    <article class="trip" style="--i:${i}">
      <div class="trip-stamp" aria-hidden="true">
        <span class="trip-flag">${t.flag || ''}</span>
        <span class="trip-code">${h(t.code || '')}</span>
      </div>
      <div class="trip-body">
        <div class="trip-hd">
          <h3 class="trip-country">${h(t.country)}</h3>
          ${t.tag ? `<span class="role-chip role-chip-now">${h(t.tag)}</span>` : ''}
        </div>
        ${t.places?.length ? `<p class="trip-places">${t.places.map(h).join(' &middot; ')}</p>` : ''}
        <p class="trip-story${t.story ? '' : ' trip-story-empty'}">${t.story ? h(t.story) : 'Story coming soon.'}</p>
      </div>
    </article>`).join('');

  const fav = books.find(b => b.favorite);
  const favorite = fav ? `
  <article class="fav-book">
    <div class="fav-cover"><img src="${h(fav.cover)}" alt="${h(fav.title)} by ${h(fav.author)} — cover" loading="lazy"></div>
    <div class="fav-body">
      <span class="fav-label">&#9733; All-time favourite</span>
      <h3 class="fav-title">${h(fav.title)}</h3>
      <p class="fav-author">${h(fav.author)}</p>
      ${fav.blurb ? `<p class="fav-blurb">${h(fav.blurb)}</p>` : ''}
    </div>
  </article>` : '';

  const shelf = books.filter(b => !b.favorite).map((b, i) => `
    <article class="book${b.cover ? ' book-has-cover' : ''}${b.portrait ? ' book-has-portrait' : ''}" data-lang="${h(b.lang)}" style="--cover:${COVER_TONES[i % COVER_TONES.length]}">
      <div class="book-cover">
        ${b.cover
          ? `<img class="book-img" src="${h(b.cover)}" alt="${h(b.title)} by ${h(b.author)} — cover" loading="lazy">`
          : `${b.portrait ? `<img class="book-img" src="${h(b.portrait)}" alt="" loading="lazy">` : ''}
        ${b.note ? `<span class="book-note">${h(b.note)}</span>` : ''}
        <p class="book-title"${b.bn ? ' lang="bn"' : ''}>${h(b.bn || b.title)}</p>
        ${b.authorBn || b.author ? `<p class="book-author"${b.authorBn ? ' lang="bn"' : ''}>${h(b.authorBn || b.author)}</p>` : ''}`}
      </div>
      ${b.cover
        ? `<p class="book-caption"><strong>${h(b.title)}</strong> &middot; ${h(b.author)}</p>`
        : b.bn ? `<p class="book-caption">${[b.title, b.author].filter(Boolean).map(h).join(' &middot; ')}</p>` : ''}
      ${b.takeaway ? `<p class="book-takeaway">&ldquo;${h(b.takeaway)}&rdquo;</p>` : ''}
    </article>`).join('');

  const hasBn = books.some(b => b.lang === 'bn'), hasEn = books.some(b => b.lang === 'en');
  return `
<section id="beyond" class="section">
  ${eyebrow(6, 'Beyond Code')}
  <h2 class="section-title">Travel &amp; Reading</h2>

  ${travel.length ? `
  <p class="awards-eyebrow">Places I&rsquo;ve Been</p>
  <div class="trips">${stamps}</div>` : ''}

  ${books.length ? `
  <div class="shelf-hd">
    <p class="awards-eyebrow shelf-eyebrow">On My Bookshelf</p>
    ${hasBn && hasEn ? `
    <div class="skills-filters shelf-filters" role="group" aria-label="Filter books by language">
      <button class="skill-filter-btn active" data-lang="all">All</button>
      <button class="skill-filter-btn" data-lang="en">English</button>
      <button class="skill-filter-btn" data-lang="bn" lang="bn">বাংলা</button>
    </div>` : ''}
  </div>
  ${favorite}
  <div class="shelf">${shelf}</div>` : ''}
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
      renderBeyond() +
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

/* ─── Timeline scroll-reveal ─────────────────────────────────── */
function setupTimeline() {
  const entries = document.querySelectorAll('.tl-entry, .career-strip');
  if (!entries.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('tl-visible');
      io.unobserve(entry.target);          /* fire once */
    });
  }, { threshold: 0.15 });

  entries.forEach(el => io.observe(el));
}

/* ─── Skills filter ──────────────────────────────────────────── */
function setupSkillFilters() {
  const filtersEl = document.querySelector('.skills-filters');
  if (!filtersEl) return;

  filtersEl.addEventListener('click', e => {
    const btn = e.target.closest('.skill-filter-btn');
    if (!btn) return;

    filtersEl.querySelectorAll('.skill-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.dataset.cat;
    document.querySelectorAll('.skill-card').forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
  });
}

/* ─── Bookshelf language filter ─────────────────────────────── */
function setupShelfFilters() {
  const el = document.querySelector('.shelf-filters');
  if (!el) return;
  el.addEventListener('click', e => {
    const btn = e.target.closest('.skill-filter-btn');
    if (!btn) return;
    el.querySelectorAll('.skill-filter-btn').forEach(b => b.classList.toggle('active', b === btn));
    const lang = btn.dataset.lang;
    document.querySelectorAll('.book').forEach(card => {
      card.style.display = (lang === 'all' || card.dataset.lang === lang) ? '' : 'none';
    });
  });
}

/* ─── Boot ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  render();
  setupNav();
  setupMobileMenu();
  setupLightbox();
  setupSkillFilters();
  setupShelfFilters();
  setupTimeline();
});
