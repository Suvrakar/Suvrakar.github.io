/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              PORTFOLIO DATA — EDIT THIS FILE                ║
 * ║                                                              ║
 * ║  To add a project:  copy one block inside "projects" array  ║
 * ║  To add research:   copy one block inside "research" array  ║
 * ║  To update info:    change the values in each field         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const PORTFOLIO = {

  /* ── Personal Info ─────────────────────────────────────────── */
  name:      'Debashis Kar Suvra',
  title:     'Senior Software Engineer',
  location:  'Dhaka, Bangladesh',
  email:     'kar.suvra6682@gmail.com',
  phone:     '+880 183 318 3525',
  github:    'https://github.com/Suvrakar',
  linkedin:  'https://www.linkedin.com/in/suvra123/',
  leetcode:  'https://leetcode.com/Suvrakar/',
  scholar:   'https://scholar.google.com/',

  /* ── Hero Stats (3 numbers shown under your name) ─────────── */
  stats: [
    { value: '5+',    label: 'Years Experience' },
    { value: '10M+',  label: 'Daily Requests'   },
    { value: '99.9%', label: 'Uptime SLA'        },
  ],

  /* ── About Bio (each string = one paragraph) ───────────────── */
  bio: [
    'Full-stack backend engineer building distributed systems, microservices, and cloud-native platforms at scale. Currently at Brainstation 23 PLC — architecting infrastructure for Bangladesh\'s leading digital platforms.',
    'Alongside engineering, I have an active research background in computer vision and machine learning — with thesis work on license plate recognition and DDoS detection. I believe the best engineers are part scientist: rigorous, curious, and comfortable with ambiguity.',
  ],
  specialization: 'AI-Native Engineering · Distributed Systems · Computer Vision',

  /* ── Education ──────────────────────────────────────────────── */
  education: [
    {
      degree:      'MSc. Management of Technology',
      institution: 'IAT, BUET',
      year:        '2024',
      thesis:      'Smart Tolling: YOLO-tiny & Haar Cascade for Bangla License Plate Recognition',
    },
    {
      degree:      'BSc. Computer Science & Engineering',
      institution: 'BRAC University, Dhaka',
      year:        '2020',
      thesis:      'Real-Time DDoS Attack Detection Using Machine Learning',
    },
  ],

  /* ── Work Experience ────────────────────────────────────────── */
  experience: [
    {
      company:  'Brainstation 23 PLC',
      role:     'Senior Software Engineer – I',
      location: 'Dhaka, Bangladesh',
      period:   'Apr 2021 – Present',
      highlights: [
        'Led backend for MyBL & OneID — 30% API performance improvement handling 10M+ daily requests at 99.9% uptime.',
        'Spring Boot & Node.js microservices with Redis caching, Grafana/CloudWatch monitoring.',
        'Architected event-driven systems with Redis queues; mentored junior developers.',
        'Awards: Employee of the Month (Feb 2023), Outstanding Determination (2022).',
      ],
    },
    {
      company:  'Hivecore Limited',
      role:     'Software Engineer – II',
      location: 'Dhaka, Bangladesh',
      period:   'Apr 2022 – May 2024',
      highlights: [
        'Docker + CI/CD automation — 50% reduction in release cycle time.',
        'GraphQL & REST APIs serving 1M+ users on AWS at 99.9% uptime.',
        'ERP/HRM modules for 1,000+ users in Spring Boot + React (TypeScript).',
      ],
    },
    {
      company:  'Co-Well Japan',
      role:     'Software Engineer',
      location: 'Remote',
      period:   'Apr 2021 – Jan 2024',
      highlights: [
        'Distributed microservices architecture for enterprise SaaS identity platform.',
        'Auto-scaling, CI/CD on AWS/Kubernetes with end-to-end monitoring.',
        'Enterprise SSO/Identity Provider for Japanese enterprise clients.',
        'Multi-tenant auth and federated identity management.',
      ],
    },
    {
      company:  'Shopoth-Agami',
      role:     'Software Engineer',
      location: 'Dhaka, Bangladesh',
      period:   'Apr 2016 – Sep 2020',
      highlights: [
        'Full-stack e-commerce platform with auto-scaling infrastructure and CDN integration across Bangladesh.',
        'GraphQL APIs and PostgreSQL optimisation for high-traffic retail platform.',
        'Real-time inventory sync and order management systems.',
      ],
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     PROJECTS — Add a new project by copying one { } block below
     ══════════════════════════════════════════════════════════════
     Fields:
       name        — Project display name
       tech        — Array of technology strings (shown as tags)
       description — Short description (1–3 sentences)
       link        — URL or null if no public link
  */
  projects: [
    {
      name:        'OneID Microservices',
      tech:        ['Node.js', 'AWS', 'Kubernetes', 'Redis'],
      description: 'Distributed microservices architecture for enterprise SaaS identity. Auto-scaling CI/CD on AWS/Kubernetes with end-to-end monitoring and 99.9% uptime.',
      link:        null,
    },
    {
      name:        'MyBL App Overhaul',
      tech:        ['Node.js', 'AWS', 'Redis', 'Spring Boot'],
      description: 'API performance overhaul for Bangladesh\'s leading telecom app. Achieved 30% lower response times under sustained heavy load serving 10M+ daily requests.',
      link:        null,
    },
    {
      name:        'Co-Well Japan IDP',
      tech:        ['Node.js', 'AWS', 'Spring Boot', 'Kubernetes'],
      description: 'Enterprise SSO/Identity Provider for Japanese enterprise clients. Multi-tenant auth, federated identity management, and auto-scaling on AWS.',
      link:        null,
    },
    {
      name:        'Hive HRM + LMS',
      tech:        ['Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
      description: 'ERP/HRM suite for 1,000+ enterprise users. Includes LMS with payment gateway for 1,000+ learners and biometric HRM via ZKTeco SDK with full RBAC.',
      link:        null,
    },
    {
      name:        'Shopoth E-Commerce',
      tech:        ['React', 'Node.js', 'GraphQL', 'PostgreSQL'],
      description: 'Full-stack e-commerce platform with auto-scaling infrastructure, CDN integration, and real-time inventory sync across Bangladesh.',
      link:        'https://shopoth.com/',
    },
    {
      name:        'RStore Retail Platform',
      tech:        ['Node.js', 'GraphQL', 'AWS', 'Elasticsearch'],
      description: 'High-traffic retail platform serving 1M+ users with real-time inventory sync, search via Elasticsearch, and GraphQL APIs.',
      link:        null,
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     RESEARCH — Add a new paper/thesis by copying one { } block
     ══════════════════════════════════════════════════════════════
     Fields:
       title       — Full paper/thesis title
       type        — e.g. 'MSc Thesis', 'BSc Thesis', 'Journal Paper', 'Conference Paper'
       institution — University or publisher
       year        — Publication year (string)
       description — 1–2 sentence abstract / summary
       tags        — Array of keyword strings
       link        — DOI / URL or null
  */
  research: [
    {
      title:       'Smart Tolling: YOLO-tiny & Haar Cascade for Bangla License Plate Recognition',
      type:        'MSc Thesis',
      institution: 'IAT, BUET',
      year:        '2024',
      description: 'Computer vision approach to automated toll collection using YOLO-tiny detection and Haar Cascade classifiers for real-time Bangla number-plate OCR in variable lighting conditions.',
      tags:        ['Computer Vision', 'YOLO', 'OCR', 'Python', 'Deep Learning'],
      link:        null,
    },
    {
      title:       'Real-Time DDoS Attack Detection Using Machine Learning',
      type:        'BSc Thesis',
      institution: 'BRAC University, Dhaka',
      year:        '2020',
      description: 'Machine learning approach for real-time detection of Distributed Denial of Service attacks in network traffic using flow-based features and ensemble classifiers.',
      tags:        ['Machine Learning', 'Network Security', 'Python', 'scikit-learn'],
      link:        null,
    },
  ],

  /* ── Skills ─────────────────────────────────────────────────── */
  skills: [
    { category: 'Languages',        items: ['JavaScript ES6+', 'TypeScript', 'Python', 'Java'] },
    { category: 'Frontend',         items: ['React', 'Next.js'] },
    { category: 'Backend',          items: ['Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'Django'] },
    { category: 'Databases',        items: ['PostgreSQL', 'Redis', 'Elasticsearch'] },
    { category: 'APIs',             items: ['GraphQL', 'REST', 'gRPC'] },
    { category: 'Cloud & DevOps',   items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins'] },
    { category: 'AI / ML',          items: ['LangChain', 'OpenAI API', 'Gemini API', 'Agentic Patterns', 'YOLO', 'Computer Vision'] },
    { category: 'Architecture',     items: ['Microservices', 'Distributed Systems', 'Event-Driven', 'Cloud-Native'] },
  ],

  /* ── Certifications ─────────────────────────────────────────── */
  certifications: [
    {
      name:   'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      code:   'SAA-C03',
      score:  '911 / 1000',
      link:   'https://www.credly.com/badges/c9c992ba-5222-484b-ae01-1906c1baad64/public_url',
    },
  ],

  /* ── Awards ─────────────────────────────────────────────────── */
  awards: [
    {
      title:       '2nd Runner-up — BEAR Summit 2025',
      event:       'National Semiconductor Symposium',
      description: 'AI-powered SNAP READ TOLL using YOLO for automated toll collection.',
    },
    {
      title:       'Research Excellence Collaborator Award',
      event:       'Applied Computer Vision Research',
      description: 'Recognised for contributions to applied computer vision research.',
    },
    {
      title:       '2nd Runner-up — Datathon 2.0',
      event:       'Robi Axiata',
      description: 'Data analytics and problem solving competition.',
    },
    {
      title:       'Employee of the Month',
      event:       'Brainstation 23 PLC — Feb 2023',
      description: 'Exceptional platform reliability contributions.',
    },
  ],

};
