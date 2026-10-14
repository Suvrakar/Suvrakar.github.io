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
  medium:    'https://suvra1.medium.com/',
  scholar:   'https://scholar.google.com/citations?user=neqL4cgAAAAJ&hl=en',

  /* ── Hero Stats ────────────────────────────────────────────── */
  stats: [
    { value: '5+',    label: 'Years Experience' },
    { value: '10M+',  label: 'Daily Requests'   },
    { value: '99.9%', label: 'Uptime SLA'        },
  ],

  /* ── About Bio ──────────────────────────────────────────────── */
  bio: [
    'Full-stack backend engineer building distributed systems, microservices, and cloud-native platforms at scale. Currently at Brainstation 23 PLC — architecting infrastructure for Bangladesh\'s leading digital platforms.',
    'Alongside engineering, I have an active research background in computer vision and machine learning — with thesis work on license plate recognition and DDoS detection. I believe the best engineers are part scientist: rigorous, curious, and comfortable with ambiguity.',
    'As a Claude Certified Architect, I design production-grade LLM systems — agents, tool & MCP integrations, and multi-agent workflows — on my path toward becoming a Forward Deployed Engineer, bridging AI innovation with real-world business impact.',
  ],
  specialization: 'AI-Native Engineering · Distributed Systems · Computer Vision',

  /* ── Education ──────────────────────────────────────────────── */
  education: [
    {
      degree:      'MSc. Management of Technology',
      institution: 'IAT, BUET',
      year:        '2024',
      thesis:      'Smart Tolling: YOLO-tiny & Haar Cascade for Bangla License Plate Recognition',
      link:        'https://buet.ac.bd',
      logo:        'assets/images/logos/buet.svg',
      initials:    'BU',
      logoBg:      '#003366',
    },
    {
      degree:      'BSc. Computer Science & Engineering',
      institution: 'BRAC University, Dhaka',
      year:        '2020',
      thesis:      'Real-Time DDoS Attack Detection Using Machine Learning',
      link:        'https://www.bracu.ac.bd',
      logo:        'assets/images/logos/bracu.svg',
      initials:    'BU',
      logoBg:      '#C8202F',
    },
  ],

  /* ── Work Experience ────────────────────────────────────────── */
  /* Dates are 'YYYY-MM'; end: null = present. Roles are newest first —
     every role after the first at a company is shown as a promotion. */
  experience: [
    {
      company:    'Brain Station 23 PLC',
      employment: 'Full-time · On-site',
      location:   'Dhaka, Bangladesh',
      start:      '2024-05',
      end:        null,
      link:       'https://brainstation-23.com',
      logo:       'assets/images/logos/brainstation23.svg',
      initials:   'B23',
      logoBg:     '#0055B3',
      roles: [
        {
          title: 'Senior Software Engineer – I',
          start: '2025-07',
          end:   null,
          highlights: [
            'Own project delivery end-to-end with a focus on profitability — leading design and architecture discussions across the team.',
            'Define coding standards and maintain CI/CD pipelines for automated deployment, testing and production monitoring.',
            'Proactively identify system bottlenecks and architectural risks; guide software design decisions.',
            'Build business-driven Proofs of Concept for presales to validate solutions and win new opportunities.',
            'Align features with business goals alongside client, BA, SQA, UI/UX and DevOps teams.',
          ],
        },
        {
          title: 'Software Engineer – II',
          start: '2024-05',
          end:   '2025-07',
          highlights: [
            'Led technical implementation of complex, performance-critical features and mentored junior developers.',
            'Wrote unit/integration tests, troubleshot production issues and provided estimates for project planning.',
            'Leveraged AI tools to accelerate delivery.',
          ],
        },
      ],
      highlights: [
        'Led backend for MyBL (Banglalink) & OneID — 30% API performance improvement handling 10M+ daily requests at 99.9% uptime.',
        'Microservices with Spring Boot, FastAPI and Django; Keycloak SSO; Redis caching and Grafana/CloudWatch monitoring.',
      ],
    },
    {
      company:    'RedDot Digital Limited',
      employment: 'Full-time',
      location:   'Dhaka, Bangladesh · A Robi Axiata subsidiary',
      start:      '2022-04',
      end:        '2024-05',
      link:       'https://reddigital.com.bd',
      logo:       'assets/images/logos/reddigital.png',
      initials:   'RD',
      logoBg:     '#E2231A',
      roles: [
        {
          title: 'Software Engineer',
          start: '2022-04',
          end:   '2024-05',
          highlights: [
            'Full-stack development in an agile team — GraphQL APIs with Graphene-Django and React + TypeScript frontends via Apollo.',
            'Built Rstore (Robi Axiata) and Shopoth (Agami – BAT) e-commerce platforms; GraphQL APIs serving 1M+ users.',
            'Containerized services with Docker.',
            'Employee of the Month (Feb 2023) and Outstanding Determination (Sep 2022) for Rstore delivery; received an appreciation letter.',
          ],
        },
      ],
    },
    {
      company:    'Hivecore Limited',
      employment: 'Full-time',
      location:   'Banani, Dhaka',
      start:      '2021-04',
      end:        '2022-04',
      link:       'https://hivecorelimited.com/',
      logo:       'assets/images/logos/hivecore.png',
      initials:   'HC',
      logoBg:     '#2D6A4F',
      roles: [
        {
          title: 'Software Engineer',
          start: '2021-10',
          end:   '2022-04',
          highlights: [
            'HRM, ERP and OAuth 2.0 authentication modules for 1,000+ users.',
            'React frontends with Axios; REST APIs in Express/Node.js and Spring Boot on MongoDB and MySQL.',
            'Docker + CI/CD automation — 50% reduction in release cycle time.',
          ],
        },
        {
          title: 'Trainee Software Engineer',
          start: '2021-04',
          end:   '2021-09',
          highlights: [
            'Started with React.js and Java; earned promotion to Software Engineer in 6 months.',
          ],
        },
      ],
      highlights: [
        'Received a recommendation letter from Hivecore Limited.',
      ],
    },
  ],

  /* ── Leadership & Extracurricular ───────────────────────────── */
  activities: [
    {
      company:  'BRAC University Business Club (BIZ BEE)',
      role:     'Director of Information Technology',
      location: '66 Mohakhali, Dhaka · Leadership & Web Development',
      period:   'May 2016 – Jan 2020',
      link:     'https://bizbee.club/',
      logo:     'assets/images/logos/bracu.svg',
      initials: 'BB',
      logoBg:   '#C8202F',
      /* Listed oldest → newest; rendered as an animated promotion ladder */
      progression: [
        { role: 'General Member',                     period: 'May 2016 – Dec 2016' },
        { role: 'Senior Executive',                   period: 'Jan 2017 – Jan 2018' },
        { role: 'Assistant Director',                 period: 'Feb 2018 – Sep 2018' },
        { role: 'Co Director',                        period: 'Sep 2018 – Dec 2018' },
        { role: 'Director of IT',                     period: 'Feb 2019 – Jan 2020' },
      ],
      highlights: [
        'Led the IT department of the club and delivered several key projects end-to-end.',
        'Led the BIZ BEE website building team (bizbee.club).',
        'Supervised and led the VISION magazine creative team — featured in The Daily Star.',
        'Ran upskilling seminars; organized Blood Donation, Club Fair and Job Fair campaigns.',
        'Organized Adwiz 2017, an inter-university business competition.',
      ],
      photos: [
        { src: 'assets/images/bizbee-director-letter.jpg',        caption: 'BIZ BEE — Letter of Promotion to Director of IT (Feb 2019)' },
        { src: 'assets/images/bizbee-face-to-face-stage.jpg',     caption: 'BIZ BEE "Face to Face" — on stage' },
        { src: 'assets/images/bizbee-face-to-face-award.jpg',     caption: 'BIZ BEE "Face to Face" — recognition on stage' },
        { src: 'assets/images/bizbee-team-gala.jpg',              caption: 'BIZ BEE team at the club gala' },
        { src: 'assets/images/bizbee-farewell-legend-of-it.jpg',  caption: 'Farewell card from the BIZ BEE IT team — "The Legend of IT"' },
      ],
    },
  ],

  /* ── Volunteering ───────────────────────────────────────────── */
  volunteer: [
    {
      company:  'Berger ADwiz 2017',
      role:     'Organizer',
      location: 'Inter-university advertisement competition · Education',
      period:   'Dec 2017',
      link:     'https://www.youtube.com/watch?v=Jfnme2KK1c8',
      logo:     'assets/images/logos/adwiz.jpg',
      initials: 'AD',
      logoBg:   '#1F9E5A',
      highlights: [
        'Organized Berger ADwiz, an inter-university advertisement competition hosted by BRAC University Business Club (BIZ BEE).',
      ],
      links: [
        { label: 'Watch event video', url: 'https://www.youtube.com/watch?v=Jfnme2KK1c8' },
      ],
    },
    {
      company:  'Bangladesh Thalassemia Foundation',
      role:     'Volunteer',
      location: 'Health',
      period:   'Jan 2017 – Jan 2018',
      link:     null,
      logo:     'assets/images/logos/thalassemia.jpg',
      initials: 'BTF',
      logoBg:   '#D7263D',
      highlights: [
        'Recognized for outstanding voluntary service at the blood donation program at BRAC University (Jan 29, 2018).',
      ],
      links: [
        { label: 'View certificate', url: 'https://drive.google.com/file/d/1i8scdyNoY3Ardbeq9I9GVLv-DX5BHEVQ/view?usp=sharing' },
      ],
      photos: [
        { src: 'assets/images/thalassemia-volunteer-certificate.jpg', caption: 'Bangladesh Thalassemia Foundation — Certificate for voluntary service (Jan 2018)' },
      ],
    },
    {
      company:  'BUET Energy Club (BEC)',
      role:     'Student Ambassador',
      location: 'Education',
      period:   'Mar 2017 – Dec 2018',
      link:     null,
      logo:     'assets/images/logos/buet-energy-club.jpg',
      initials: 'BEC',
      logoBg:   '#003366',
      highlights: [
        'Assisted with new student orientations — helping new arrivals settle in and answering their questions.',
        'Represented the club at college fairs, information sessions and alumni gatherings.',
        'Engaged current and prospective students via social media and email about programs, events and opportunities.',
        'Collaborated with staff, faculty and fellow ambassadors to enhance the overall student experience.',
      ],
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     PROJECTS — Add a new project by copying one { } block below
     ══════════════════════════════════════════════════════════════ */
  projects: [
    {
      name:        'Co-Well (Tsuhara) — Enterprise SSO Integration',
      org:         'Brain Station 23',
      period:      'Nov 2025 – May 2026',
      tech:        ['Keycloak', 'FastAPI', 'SSO', 'Identity Federation'],
      description: 'SSO integration and authentication workflows for a Japan-based enterprise platform serving 10M+ users.',
      highlights:  [
        'Worked on enterprise-grade SSO integration architecture and identity federation workflows.',
        'Built secure login flows, session handling and user identity management.',
        'Scalable backend integration for high-volume user systems.',
        'Drove interoperability between multiple systems and services.',
      ],
      link:        null,
    },
    {
      name:        'OneID Wallet',
      org:         'Brain Station 23',
      period:      'Aug 2025 – Jan 2026',
      tech:        ['FastAPI', 'Django', 'Keycloak', 'AWS'],
      description: 'Microservice-based wallet, identity provider and verification platform for NID, driving licence, passport, certificates and VDS e-signed documents — with Bangla QR payments.',
      highlights:  [
        'Designed and built microservices in FastAPI and Django, plus a user portal for onboarding and verification.',
        'Integrated Keycloak for SSO, authorization and identity federation; implemented eKYC onboarding.',
        'Integrated VDS e-sign, Bangla QR wallet payments and the TSP trust-service gateway.',
        'Ran on AWS — ECS, RDS, IAM, S3, CloudFront, Route 53 and VPC.',
      ],
      link:        null,
    },
    {
      name:        'Banglalink (Veon Group) Microservices',
      org:         'Brain Station 23',
      period:      'May 2024 – May 2025',
      tech:        ['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'Kubernetes'],
      description: 'High-traffic, telecom-grade microservices for one of Bangladesh\'s largest operators — event-driven, fault-tolerant and built for large-scale transactions.',
      highlights:  [
        'Designed microservice architectures in Java, Spring Boot, Spring Security and JPA/Hibernate.',
        'Event-driven and asynchronous processing with Apache Kafka.',
        'Improved performance via query optimization, Redis caching and workflow redesign.',
        'Owned CI/CD, production monitoring and incident troubleshooting with Docker and Kubernetes.',
        'Integrated internal enterprise platforms and third-party services.',
      ],
      link:        null,
    },
    {
      name:        'Shopoth (Agami – BAT) — Multi-Category E-Commerce',
      org:         'RedDot Digital Limited',
      period:      'Apr 2023 – Apr 2024',
      tech:        ['Next.js', 'React', 'Redux', 'TypeScript'],
      description: 'Scalable, high-performance multi-category online shopping platform.',
      highlights:  [
        'Built and optimized frontend features in Next.js with Redux state management.',
        'Integrated APIs for products, authentication, orders and payments.',
        'Improved load speed, rendering and responsiveness; boosted SEO with Next.js features.',
        'Built reusable, responsive component architecture.',
      ],
      link:        null,
    },
    {
      name:        'Rstore (Robi Axiata) — Enterprise E-Commerce',
      org:         'RedDot Digital Limited',
      period:      'Apr 2022 – Jan 2023',
      tech:        ['Django', 'GraphQL', 'React', 'TypeScript'],
      description: 'Enterprise e-commerce and business management platform for Robi Axiata with role-based operations, reporting and analytics.',
      highlights:  [
        'Full-stack: GraphQL APIs with Graphene-Django and React + TypeScript frontend modules.',
        'Implemented RBAC and hierarchy-based permission management.',
        'Built analytics/AI modules and role-specific report generation and downloads.',
        'Maintained API and workflow documentation.',
      ],
      link:        null,
    },
    {
      name:        'Hive HRM — Smart Attendance & Workforce Management',
      org:         'Hivecore Limited',
      period:      'Sep 2021 – Apr 2022',
      tech:        ['React', 'Spring Boot', 'REST', 'ZKTeco'],
      description: 'R&D-driven HRM platform with ZKTeco biometric integration for automated, real-time attendance.',
      highlights:  [
        'Led major parts of frontend development; built backend REST APIs.',
        'Integrated ZKTeco biometric devices — attendance logs automatically on fingerprint scan.',
        'Built customizable attendance policies, shift handling and real-time reporting.',
        'Analyzed limitations of off-the-shelf biometric HRM products and built optimized alternatives.',
      ],
      link:        null,
    },
    {
      name:        'Nutrition Bee — Online Learning Platform (Startup)',
      org:         'Founder · Startup venture',
      period:      'Jan 2021 – Dec 2023',
      tech:        ['Node.js', 'Express.js', 'MongoDB', 'PassportJS'],
      description: 'Launched an online learning and course management platform to production — 200+ active users and 30–50 daily logins.',
      highlights:  [
        'Backend APIs in Node.js/Express with PassportJS auth and an AdminJS admin panel on MongoDB.',
        'Integrated bKash, Nagad and Rocket payments with automated confirmations via NodeMailer.',
        'Built encrypted video streaming, quizzes with auto-marking, and certificate eligibility.',
        'Device-restriction logic to prevent account sharing.',
        'Lesson learned: the product worked technically, but the venture failed on marketing, user acquisition and business execution.',
      ],
      link:        null,
    },
  ],

  /* ══════════════════════════════════════════════════════════════
     RESEARCH — Add a new paper/thesis by copying one { } block
     ══════════════════════════════════════════════════════════════
     Fields:
       date   — ISO date (YYYY or YYYY-MM-DD); list is shown newest first
       photos — array of image filenames from assets/images/ (or [])
       link   — DOI / URL or null
       links  — optional extra links: [{ label, url }]
  */
  research: [
    {
      title:       'An Efficient Real Time DDoS Detection Model Using Machine Learning Algorithms',
      type:        'Preprint',
      institution: 'arXiv — Cornell University',
      year:        'Jan 24, 2025',
      date:        '2025-01-24',
      description: 'Real-time DDoS detection on the UNB CICDDoS2019 dataset, comparing Logistic Regression, KNN, Random Forest, SVM and Naive Bayes after cleaning, standardization and PCA feature selection. Evaluates precision, recall, F1-score and time complexity — Random Forest, AdaBoost and XGBoost come out best for real-time use.',
      tags:        ['Machine Learning', 'Network Security', 'CICDDoS2019', 'PCA', 'XGBoost'],
      photos:      [],
      link:        'https://arxiv.org/abs/2501.14311',
    },
    {
      title:       'A Cloud-Based Hybrid Model for Real-Time Detection of BRTA-Approved Licence Plates Using YOLO Tiny and Haar Cascade',
      type:        'Conference Paper',
      institution: 'IEEE — ICCIT 2024',
      year:        'Nov 27, 2024',
      date:        '2024-11-27',
      description: 'Published at the 27th International Conference on Computer and Information Technology (ICCIT 2024). A cloud-backed hybrid YOLO-tiny + Haar Cascade pipeline for real-time detection of BRTA-approved Bangladeshi licence plates.',
      tags:        ['Computer Vision', 'YOLO', 'Haar Cascade', 'Cloud', 'IEEE'],
      photos:      [],
      link:        'https://ieeexplore.ieee.org/document/11022598',
      links:       [{ label: 'ICCIT 2024', url: 'https://iccit.org.bd/2024/' }],
    },
    {
      title:       'Smart Tolling: YOLO-tiny & Haar Cascade for Bangla License Plate Recognition',
      type:        'MSc Thesis',
      institution: 'IAT, BUET',
      year:        '2024',
      date:        '2024',
      description: 'Real-time, low-cost tolling system tailored for Bangladesh. Hybrid pipeline using YOLOv4-tiny, Haar Cascade, and EasyOCR achieves 91% OCR accuracy with minimal hardware. Backend powered by cloud-based microservices for scalable toll and payment automation.',
      tags:        ['Computer Vision', 'YOLO', 'EasyOCR', 'Python', 'Microservices'],
      photos:      [
        'assets/images/research-poster.jpg',
        'assets/images/research-thesis-defense.jpg',
        'assets/images/research-bear-presentation.jpg',
      ],
      link:        null,
    },
    {
      title:       'Real-Time DDoS Attack Detection Using Machine Learning',
      type:        'BSc Thesis',
      institution: 'BRAC University, Dhaka',
      year:        '2020',
      date:        '2020',
      description: 'Machine learning approach for real-time detection of Distributed Denial of Service attacks in network traffic using flow-based features and ensemble classifiers.',
      tags:        ['Machine Learning', 'Network Security', 'Python', 'scikit-learn'],
      photos:      [],
      link:        null,
    },
    {
      title:       'IoT Based Automated Irrigation and Smart Agriculture Monitoring System',
      type:        'Journal Article',
      institution: 'IRJMETS · Vol. 3, Issue 4',
      year:        'Apr 13, 2021',
      date:        '2021-04-13',
      description: 'Low-cost, sensor-driven irrigation device for Bangladeshi farmers. Controls the water motor from soil-moisture, water-level and rain sensors, with manual control via an Android app and cloud data sync through NodeMCU — saving water, electricity and labour.',
      tags:        ['IoT', 'Arduino', 'NodeMCU', 'Android', 'Smart Agriculture'],
      photos:      [],
      link:        'https://www.irjmets.com/uploadedfiles/paper/volume3/issue_4_april_2021/8211/1628083337.pdf',
      links:       [{ label: 'Watch demo video', url: 'https://www.youtube.com/watch?v=QzWe3d_7iA0' }],
    },
  ],

  /* ── Skills ─────────────────────────────────────────────────── */
  skills: [
    { category: 'Languages',      items: ['JavaScript ES6+', 'TypeScript', 'Python', 'Java'] },
    { category: 'Frontend',       items: ['React', 'Next.js'] },
    { category: 'Backend',        items: ['Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'Django'] },
    { category: 'Databases',      items: ['PostgreSQL', 'Redis', 'Elasticsearch'] },
    { category: 'APIs',           items: ['GraphQL', 'REST', 'gRPC'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins'] },
    { category: 'Claude / Agentic AI', items: ['Claude API', 'Claude Agent SDK', 'Claude Code', 'MCP', 'Multi-Agent Orchestration', 'Prompt Engineering', 'Context Management', 'Structured Output'] },
    { category: 'AI / ML',        items: ['LangChain', 'OpenAI API', 'Gemini API', 'Agentic Patterns', 'YOLO', 'Computer Vision'] },
    { category: 'Architecture',   items: ['Microservices', 'Distributed Systems', 'Event-Driven', 'Cloud-Native'] },
  ],

  /* ── Certifications ─────────────────────────────────────────── */
  certifications: [
    {
      name:         'Claude Certified Architect – Foundations',
      issuer:       'Anthropic',
      badge:        'assets/images/badge-claude-architect.png',
      issued:       'Oct 2026',
      expires:      'Oct 2027',
      credentialId: 'fe37af70-5a8d-416a-b602-40d6bf590c6c',
      description:  'Design and build production-grade applications with Claude using Claude Code, the Claude Agent SDK, the Claude API, and MCP.',
      skills:       ['AI System Design', 'Claude Agent SDK', 'Claude Code configuration', 'Context Management', 'Generative AI Architecture', 'Large Language Models (LLMs)', 'Multi-Agent Orchestration', 'Production reliability', 'Prompt Engineering', 'Structured output', 'Tool & MCP design'],
      link:         'https://www.credly.com/badges/fe37af70-5a8d-416a-b602-40d6bf590c6c/public_url',
    },
    {
      name:         'AWS Certified Solutions Architect – Associate',
      issuer:       'Amazon Web Services',
      badge:        'assets/images/badge-aws-saa.png',
      code:         'SAA-C03',
      score:        '911 / 1000',
      issued:       'Apr 2026',
      expires:      'Apr 2029',
      credentialId: 'c9c992ba-5222-484b-ae01-1906c1baad64',
      description:  'Design secure, resilient, high-performing and cost-optimized distributed systems on AWS — well-architected solutions that are scalable and fault-tolerant.',
      skills:       ['Design Secure Architectures', 'Design Resilient Architectures', 'Design High-Performing Architectures', 'Design Cost-Optimized Architectures', 'Cloud Architecture', 'Cloud Infrastructure', 'Cloud Services', 'Cloud Data', 'AWS Cloud'],
      link:         'https://www.credly.com/badges/c9c992ba-5222-484b-ae01-1906c1baad64/public_url',
    },
  ],

  /* ── Awards (photos shown as scrollable strip above the list) ─ */
  awardPhotos: [
    { src: 'assets/images/award-bear-summit-2025.jpg', caption: 'BEAR Summit 2025 — 2nd Runner-up, Electronics Poster (Digital Display)' },
    { src: 'assets/images/award-ftech.jpg',           caption: 'FTECH 2022 — Outstanding Determination'  },
    { src: 'assets/images/award-reddigital.jpg',      caption: 'Red.Digital Outstanding Determination'   },
    { src: 'assets/images/datathon-award.jpg',        caption: 'Robi Datathon 2.0 — Runner-up Award'     },
    { src: 'assets/images/datathon-group.jpg',        caption: 'Robi Datathon 2.0 — Team Ceremony'       },
    { src: 'assets/images/research-excellence-cert.jpg', caption: 'Forum 86 Research Excellence 2023'   },
  ],

  /* Newest first. Optional: link → "Details" link on the award. */
  awards: [
    {
      emoji:       '🏆',
      title:       '2nd Runner-up — BEAR Summit 2025',
      event:       'National Semiconductor Symposium · Innovation Panel, Electronics (Digital Display) — Aug 2025',
      description: 'Recognized for SNAP READ TOLL — Bangla Smart Tolling, an automated toll collection system for efficient, transparent road transport. Judged by experts, then public vote. Summit jointly organized by The World Bank, ICT Division, EDGE Bangladesh and BIDA.',
    },
    {
      emoji:       '🔬',
      title:       'Research Excellence Award — Research Contributor',
      event:       'BUET 86 Forum — May 2023',
      description: 'Conferred for contributions to wireless communication and smart toll management.',
    },
    {
      emoji:       '⭐',
      title:       'Employee of the Month',
      event:       'RedDot Digital Limited — Feb 2023',
      description: 'Exceptional platform reliability contributions.',
    },
    {
      emoji:       '🏅',
      title:       'Outstanding Determination',
      event:       'RedDot Digital Limited — Sep 2022',
      description: 'Awarded within my first quarter of joining, for extraordinary determination and successful delivery of Rstore.',
    },
    {
      emoji:       '🥉',
      title:       '2nd Runner-up — Robi Datathon 2.0',
      event:       'Robi Axiata Limited — Aug 2022',
      description: 'Placed among 400 teams (2,800+ participants, 70+ universities, 11 countries) solving data-driven business problems; also awarded Top Data Engineer.',
      link:        'https://www.bracu.ac.bd/news/brac-university-student-team-clinch-third-place-robi%E2%80%99s-datathon-20',
    },
    {
      emoji:       '💡',
      title:       'Top 8 Finalist — Bracathon 3.0',
      event:       'BRAC — Jul 2019',
      description: 'Qualified among the top 8 teams.',
    },
    {
      emoji:       '📣',
      title:       'ADWIZ 2017 — 2nd Round Qualifier',
      event:       'ADWIZ — Sep 2017',
      description: 'Qualified for the second round of the inter-university advertisement competition.',
    },
    {
      emoji:       '🌍',
      title:       'Hult Prize Regional 2016 — 2nd Round Qualifier',
      event:       'Hult Prize — 2016',
      description: 'Qualified for the second round of the Hult Prize regional competition.',
    },
    {
      emoji:       '🎓',
      title:       'Government Board Scholarship (Talent Pool)',
      event:       'Dhaka Education Board — Classes 5 & 8',
      description: 'Talent-pool scholarship in both class 5 and class 8; 1st position in Shah Ali Thana.',
    },
  ],

};
