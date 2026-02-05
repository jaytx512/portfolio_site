export const projects = [
  {
    slug: 'northwind-growth-suite',
    name: 'Northwind Growth Suite',
    type: 'SaaS Dashboard',
    summary: 'A unified analytics hub with cohorts, funnels, and revenue retention reporting.',
    outcomes: [
      'Cut reporting time from hours to minutes',
      'Replaced 5 disjointed tools with one UI',
      'Improved exec visibility with weekly scorecards',
    ],
    stack: ['TypeScript', 'React', 'Node.js', 'Postgres'],
    link: 'https://example.com',
    role: 'Lead frontend and data visualization',
    timeline: '10 weeks',
    challenge:
      'Executives lacked a single source of truth for product performance, which slowed decisions and muddied priorities.',
    approach:
      'Designed a unified dashboard, standardized metrics, and built interactive cohort views with a clean information hierarchy.',
    results:
      'Teams now review the same KPIs every Monday with clear ownership, and reporting time dropped by more than half.',
    deliverables: ['Dashboard UI system', 'Cohort + funnel views', 'Exportable reports'],
    image: '/images/projects/northwind.jpg',
  },
  {
    slug: 'lumen-studio',
    name: 'Lumen Studio',
    type: 'Marketing Website',
    summary: 'A brand-forward site with bold typography, crisp messaging, and fast load times.',
    outcomes: [
      '+42% increase in inbound leads',
      'Lighthouse performance score 98+',
      'Improved conversion rate on key service pages',
    ],
    stack: ['Astro', 'Tailwind', 'SEO'],
    link: 'https://example.com',
    role: 'Design system + front-end build',
    timeline: '4 weeks',
    challenge:
      'The existing site was visually dated and failed to communicate premium positioning or drive qualified inquiries.',
    approach:
      'Rebuilt the site around service clarity, stronger case study narratives, and a conversion-focused layout.',
    results:
      'Inbound lead quality improved and the studio saw consistent week-over-week requests.',
    deliverables: ['Marketing site', 'Case study pages', 'Content system'],
    image: '/images/projects/lumen.jpg',
  },
  {
    slug: 'fieldops-dispatch',
    name: 'FieldOps Dispatch',
    type: 'Operations Portal',
    summary: 'A mobile-first dispatch console for scheduling, status tracking, and client updates.',
    outcomes: [
      'Reduced manual scheduling time by 50%',
      'Improved on-time completion by 18%',
      'Simplified technician check-ins and handoffs',
    ],
    stack: ['React', 'Node.js', 'Maps API', 'Supabase'],
    link: 'https://example.com',
    role: 'Product and front-end lead',
    timeline: '12 weeks',
    challenge:
      'Dispatchers were using spreadsheets and email threads to track field teams, which led to delays and missed updates.',
    approach:
      'Built a responsive dispatch board, real-time status updates, and a streamlined mobile check-in flow.',
    results:
      'Dispatchers now operate from a single view with fewer handoffs and faster scheduling.',
    deliverables: ['Dispatch board', 'Mobile check-in UX', 'Status notifications'],
    image: '/images/projects/fieldops.jpg',
  },
  {
    slug: 'harborview-commerce',
    name: 'Harborview Commerce',
    type: 'Ecommerce Rebuild',
    summary: 'A performance-focused storefront refresh with streamlined checkout and content blocks.',
    outcomes: [
      '+28% improvement in mobile conversion rate',
      'Cut page load time by 55%',
      'Reduced cart abandonment with clearer UX',
    ],
    stack: ['Next.js', 'TypeScript', 'Stripe', 'CMS'],
    link: 'https://example.com',
    role: 'Frontend performance + checkout UX',
    timeline: '8 weeks',
    challenge:
      'The checkout flow was slow and inconsistent across devices, leading to high mobile abandonment.',
    approach:
      'Optimized the storefront, reworked the checkout UI, and introduced modular content blocks for merchandisers.',
    results:
      'Conversion climbed while support requests tied to checkout issues fell.',
    deliverables: ['Storefront refresh', 'Checkout redesign', 'Content blocks'],
    image: '/images/projects/harborview.jpg',
  },
  {
    slug: 'brightline-health',
    name: 'Brightline Health',
    type: 'Client Portal',
    summary: 'A secure portal for onboarding, document management, and appointment scheduling.',
    outcomes: [
      'Reduced support tickets by 35%',
      'Automated intake workflows end-to-end',
      'Improved patient satisfaction scores',
    ],
    stack: ['React', 'Node.js', 'Postgres', 'Auth'],
    link: 'https://example.com',
    role: 'UX lead + front-end implementation',
    timeline: '6 weeks',
    challenge:
      'Patients struggled with intake paperwork and staff spent hours tracking missing documents.',
    approach:
      'Built a guided onboarding flow with clear progress states and automated reminders.',
    results:
      'Intake completion rates improved and staff regained time for client care.',
    deliverables: ['Client portal', 'Onboarding flow', 'Document management'],
    image: '/images/projects/brightline.jpg',
  },
];
