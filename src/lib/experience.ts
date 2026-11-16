export interface Role {
  start: string;
  end: string;
  title: string;
  company: string;
  type?: string;
  points: string[];
}

// Source: LinkedIn, Nov 2026. Numbers are as written there; do not round or embellish.
export const EXPERIENCE: Role[] = [
  {
    start: 'Aug 2025',
    end: 'Present',
    title: 'AI Engineer',
    company: 'ViewEngine',
    type: 'Contract, remote',
    points: [
      'Programmatic SEO pipelines in Python that pull from CMS and search APIs.',
      'Scripts that apply bulk fixes across hundreds of URLs.',
      'Sitemap architecture, canonicalization, indexation, and metadata.',
      'Site builds and reusable page templates on Webflow, WordPress, and HubSpot.',
    ],
  },
  {
    start: 'Sep 2024',
    end: 'Aug 2025',
    title: 'Web Developer',
    company: 'Freelance',
    points: [
      'SaaS dashboard in React, Next.js, and Tailwind CSS that cut a client’s manual reporting time by 50%.',
      'Payment and data API integrations.',
    ],
  },
  {
    start: 'Oct 2023',
    end: 'Sep 2024',
    title: 'Frontend Web Developer',
    company: 'Shugaland',
    type: 'Part-time',
    points: [
      'SaaS features in React and TypeScript for 10K+ monthly active users.',
      'API work that cut data load time by 25%.',
      'Azure DevOps pipeline improvements for 20% faster releases.',
    ],
  },
  {
    start: 'Nov 2022',
    end: 'Oct 2023',
    title: 'Web Developer',
    company: 'Canadian tech firm',
    type: 'Contract',
    points: [
      'Legacy-to-modern rebuild with Vue.js, Node.js, and PostgreSQL.',
      'Dockerized deploys that cut server setup time by 60%.',
      'Multi-tenant API layer; 3 enterprise customers onboarded in under 6 months.',
    ],
  },
  {
    start: 'Sep 2021',
    end: 'Sep 2022',
    title: 'Full Stack Engineer',
    company: '10X Ventures',
    points: [
      'Next.js and Blitz.js apps with Node.js, PostgreSQL, and Prisma at 15K+ active users.',
      'APIs handling 50K+ secure transactions a month.',
      'Stripe subscriptions that grew recurring revenue by 20%.',
      'Query work that cut API response time by 35%.',
    ],
  },
  {
    start: 'Sep 2019',
    end: 'Sep 2022',
    title: 'Software Developer',
    company: 'AluSoft Technologies',
    type: 'Part-time',
    points: [
      'Laravel, Node.js, Flutter, and Firebase products.',
      'Mobile app with 2K+ downloads.',
      'Paystack integration that cut manual billing by 50%.',
    ],
  },
];

export const STACK: { group: string; items: string[] }[] = [
  { group: 'SEO and content', items: ['Programmatic SEO', 'Technical SEO', 'Google Search Console', 'Webflow', 'WordPress', 'HubSpot'] },
  { group: 'AI', items: ['Claude skills', 'Prompt engineering', 'Evals'] },
  { group: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'PHP'] },
  { group: 'Frameworks', items: ['React', 'Next.js', 'Astro', 'Vue.js', 'Node.js', 'Laravel', 'Flutter'] },
  { group: 'Data and infra', items: ['PostgreSQL', 'Prisma', 'MySQL', 'Firebase', 'Docker', 'Azure DevOps', 'Netlify'] },
  { group: 'Payments', items: ['Stripe', 'Paystack', 'Flutterwave'] },
];
