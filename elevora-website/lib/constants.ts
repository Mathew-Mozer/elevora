export const siteConfig = {
  name: 'Elevora Technologies',
  tagline: 'Transform Your Manual Processes into Intelligent Business Systems',
  description: 'Stop losing hours to spreadsheets. Start scaling with AI-powered automation.',
  url: 'https://elevora.tech',
  email: 'hello@elevora.tech',
  
  // Brand Colors
  colors: {
    indigo: '#2E3A59',
    blue: '#3B82F6',
    green: '#10B981',
    gold: '#F59E0B',
    slate: '#6B7280',
    cloud: '#F9FAFB',
  },
  
  // Navigation
  nav: [
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Process', href: '/process' },
    { name: 'Skills', href: '/skills' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  
  // Stats
  stats: {
    yearsExperience: 5,
    codeContributions: 7000,
    hoursAutomated: 200,
    projectsDelivered: 50,
  },
  
  // Services
  services: [
    {
      title: 'Process Automation & Integration',
      description: 'Connect your existing tools and automate repetitive tasks.',
      icon: 'Workflow',
      benefits: [
        'Connect existing tools (CRM, accounting, inventory)',
        'Automate repetitive tasks and data entry',
        'Build custom workflows for your specific needs',
        'Integrate disparate systems into one unified platform',
      ],
      result: 'Automated 80% of routine patient follow-ups, saving a healthcare company 200+ hours monthly',
    },
    {
      title: 'Spreadsheet to System Transformation',
      description: 'Convert complex Excel files into real business systems.',
      icon: 'Database',
      benefits: [
        'Convert complex Excel files into real databases',
        'Build custom dashboards with real-time data',
        'Create user-friendly interfaces for your team',
        'Implement data validation and error prevention',
      ],
      result: 'Transformed tournament management from 15 spreadsheets to one unified platform',
    },
    {
      title: 'AI-Powered Intelligence',
      description: 'Add AI capabilities to understand and automate complex decisions.',
      icon: 'Brain',
      benefits: [
        'Implement smart search across all your documents',
        'Build chatbots that actually understand your business',
        'Create predictive analytics for better decisions',
        'Deploy RAG systems for instant knowledge retrieval',
      ],
      result: 'Built RAG system improving document search accuracy by 75%',
    },
    {
      title: 'Custom Business Platforms',
      description: 'Build modern web applications tailored to your operations.',
      icon: 'Globe',
      benefits: [
        'Design systems specifically for your operations',
        'Modern web applications accessible anywhere',
        'Mobile-responsive for field teams',
        'Secure, scalable, and maintainable',
      ],
      result: 'Built recruitment platform handling thousands of candidates automatically',
    },
  ],
  
  // Tech Stack
  techStack: {
    'AI/ML': {
      items: ['RAG Systems', 'Vector Databases', 'OpenAI', 'LangChain', 'Embeddings'],
      level: 90,
      years: 2,
    },
    'Frontend': {
      items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      level: 95,
      years: 5,
    },
    'Backend': {
      items: ['Node.js', 'NestJS', 'GraphQL', 'REST APIs', 'PostgreSQL'],
      level: 92,
      years: 5,
    },
    'Cloud & DevOps': {
      items: ['AWS', 'Docker', 'Kubernetes', 'DataDog', 'CI/CD'],
      level: 85,
      years: 4,
    },
    'Databases': {
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Neo4j', 'Vector DBs'],
      level: 88,
      years: 5,
    },
  },
}