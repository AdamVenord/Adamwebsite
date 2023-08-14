import { Camera } from 'three';
import {
  frontend,
  backend,
  ux,
  polaroid,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  github,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  star,
  rain,
  labs,
  ctec,
  college,
  devpoint,
  upwork,
  semantic,
  Music,
  spiderwhite,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Photography',
    icon: polaroid,
  },
  {
    title:'Music',
    icon: Music,
  },
];

const photos = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Photography',
    icon: polaroid,
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
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'github',
    icon: github,
  },
  {
    name: 'semantic',
    icon: semantic,
  },
];

const experiences = [
  {
    title: 'didgital literacy certification',
    company_name: 'Ctec',
    icon: ctec,
    iconBg: '#333333',
    date: '2015 - 2016',
  },
  {
    title: 'Assosciates Of Science in psychology',
    company_name: 'Salt lake community college',
    icon: college,
    iconBg: '#333333',
    date: '2016 - 2019',
  },
  {
    title: 'Full Stack Web Development certification',
    company_name: 'DevPoint Labs',
    icon: devpoint,
    iconBg: '#333333',
    date: '2019 - 2020',
  },
  {
    title: 'Freelance work',
    company_name: 'Upwork',
    icon: upwork,
    iconBg: '#333333',
    date: '2020 - Present',
  },
  {
    title: 'Chief executive officer',
    company_name: 'Spider Studios LLC',
    icon: spiderwhite,
    iconBg: '#333333',
    date: '2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Rainy Days',
    description:
      'Quick weather search for anywhere',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: rain,
    repo: 'https://github.com/AdamVenord/Rainy-days',
    demo: 'https://nostalgic-blackwell-a410cd.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'Starwars Api',
    description: 'A Starwars Api list that displays starwars characters',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: star,
    repo: 'https://github.com/AdamVenord/Starwars_api',
    demo: 'https://hopeful-bassi-f9c34b.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'Hourglass2 Project',
    description: 'Stopwatch storage project I did at school',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: labs,
    repo: 'https://github.com/devpointlabs/hourglass-2',
    demo: 'https://en.wikipedia.org/wiki/HTTP_404',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects, photos };
