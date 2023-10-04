import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  proximity,
  terralogic,
  accenture,
  metaversus,
  liva,
  nike,
  marmeto,
  pesto,
  brighterDays,
  gymLanding
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Problem Solver',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
];

const experiences = [
  {
    title: 'Junior Software Developer',
    company_name: 'Marmeto',
    icon: marmeto,
    iconBg: '#383E56',
    date: 'Aug 2022 - Nov 2022',
    points: [
      'Developed a feature-rich e-commerce application for selling reel templates, including reel listings, cart, order management, wishlist, and mobile responsiveness.',
      'Integrated over 20 external REST APIs to enhance application functionality.',
      'Established a robust Template Redux architecture from scratch, creating 10+ actions and reducers to optimize state management.',
      'Collaborated seamlessly with diverse stakeholders to consistently deliver new application features and improvements.',
    ],
  },
  {
    title: 'Junior Software Developer',
    company_name: 'Pesto',
    icon: pesto,
    iconBg: '#E6DEDD',
    date: 'Dec 2020 - Present',
    points: [
      "Orchestrated the seamless integration of 60 REST APIs into a Tata Steel Project's E-commerce web application, enhancing its functionality and user experience.",
      'Built Redux from scratch with 15+ actions & reducers, enhancing state management efficiency',
      "Led a 4-member team in the manager's absence, resolving 3 major and 5 minor client issues",
      'Aided team members in tackling technical challenges, including product listing, POST methods, and cart functionality.',
    ],
  },
  // {
  //   title: 'Software Developer',
  //   company_name: 'Accenture',
  //   icon: accenture,
  //   iconBg: '#383E56',
  //   date: 'Aug 2022 - Jan 2019',
  //   points: [
  //     'Provided Level 2 production support to 50 users from Société General for BO trading application with a case closure rate of 95% for Service Level Agreement (SLA) cases in a fast-paced environment.',
  //     'Worked with SQL and Linux in resolving over 300 user issues & update the status on Jira. ',
  //     'Implemented simple automation using Linux which reduced customer complaints by 20%.',
  //     'Implemented dashboards in JIRA with key indicators (KPIs) to track work progress which improved closure rate by 20% & saved around 5hrs/day collectively.',
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Metaversus',
    description:
      'Step into a boundless meta world of endless possibilities and immersive exploration. Experience a virtual realm where creativity, social interaction, and limitless adventure converge.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: metaversus,
    source_code_link: 'https://github.com/evilieswithin/metaversus',
    live_link: 'https://metaversus-black-eight.vercel.app/',
  },
  {
    name: 'Brighter Days',
    description:
      "Join us on this journey towards creating brighter days for communities in need. Together, we're revolutionizing social impact!",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'vite',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: brighterDays,
    source_code_link: 'https://github.com/pesto-students/front-end-repo-tech-troopers',
    live_link: 'https://front-end-repo-tech-troopers-chi.vercel.app/',
  },
  {
    name: 'Evo Fitnes',
    description:
      'A Complete Typescript Fitness Application. For frontend, some of the tech stacks used are - React, Typescript, Vite, Tailwind, Hero Icons, Framer Motion, Form Submit, React Anchor Link Smooth Scroll',
    tags: [
      {
        name: 'Typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'reactjs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: gymLanding,
    source_code_link: 'https://github.com/evilieswithin/Gym-landingPage',
    live_link: 'https://gym-landing-page-i9amk0wnh-evilieswithin.vercel.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
