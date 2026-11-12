export type Course = {
  code: string;
  title: string;
  links: { label: string; href: string }[];
};

export const activities = [
  'William F. Sharpe Fellow',
  'AISF (AI Scholars Fellowship)',
  'Bruin AI',
  'Bruin Quant Traders',
  'Bruin Poker',
  'Bruin Software Engineers',
  'Intramural Tennis',
];

export const ibSubjects = [
  { subject: 'Physics HL', score: 7 },
  { subject: 'Economics HL', score: 7 },
  { subject: 'Mathematics: Analysis and Approaches HL', score: 6 },
  { subject: 'Chemistry SL', score: 7 },
  { subject: 'English Language & Literature SL', score: 7 },
  { subject: 'Spanish B SL', score: 6 },
];

export const actSubjects = [
  { subject: 'English', score: 36 },
  { subject: 'Science', score: 36 },
  { subject: 'Math', score: 35 },
];

// Add classes here. Leave links empty for courses without public code.
export const coursework: {
  title: string;
  courses: Course[];
  repository?: string;
}[] = [
  {
    title: 'Mathematics',
    courses: [
      {
        code: 'Math 31B',
        title: 'Calculus II',
        links: [],
      },
      {
        code: 'Math 32A',
        title: 'Calculus III',
        links: [],
      },
      {
        code: 'Math 32B',
        title: 'Calculus III',
        links: [],
      },
      {
        code: 'Math 33A',
        title: 'Linear Algebra',
        links: [],
      },
      {
        code: 'Math 33B',
        title: 'Differential Equations',
        links: [],
      },
      {
        code: 'Math 61',
        title: 'Discrete Mathematics',
        links: [],
      },
      {
        code: 'Math 110A',
        title: 'Algebra',
        links: [],
      },
      {
        code: 'Math 115A',
        title: 'Linear Algebra with Proofs',
        links: [],
      },
      {
        code: 'Math 131A',
        title: 'Real Analysis',
        links: [],
      },
      {
        code: 'Math 170E',
        title: 'Probability Theory',
        links: [],
      },
      {
        code: 'Math 174E',
        title: 'Financial Mathematics',
        links: [],
      },
    ],
  },
  {
    title: 'Computer science',
    courses: [
      {
        code: 'CS 31',
        title: 'Introduction to Computer Science I',
        links: [
          {
            label: 'Repository',
            href: 'https://github.com/aarnav-11/UCLA_CS31_W25_projects',
          },
        ],
      },
      {
        code: 'CS 32',
        title: 'Introduction to Computer Science II',
        links: [
          {
            label: 'Repository',
            href: 'https://github.com/aarnav-11/UCLA_CS32_S25_Projects',
          },
        ],
      },
      {
        code: 'CS 33',
        title: 'Introduction to Computer Organization',
        links: [
          {
            label: 'Repository',
            href: 'https://github.com/aarnav-11/CS33-UCLA',
          },
        ],
      },
      {
        code: 'CS 35L',
        title: 'Software Construction',
        links: [
          {
            label: 'Stash Final Project',
            href: 'https://github.com/aarnav-11/35L_final_project',
          },
        ],
      },
      {
        code: 'CS M146',
        title: 'Introduction to Machine Learning',
        links: [
          {
            label: 'Repository',
            href: 'https://github.com/aarnav-11/CSM146-UCLA',
          },
        ],
      },
      {
        code: 'CS 180',
        title: 'Algorithms',
        links: [],
      },
      {
        code: 'CS 260D',
        title: 'Large-Scale Machine Learning (Graduate)',
        links: [],
      },
      {
        code: 'CS 260R',
        title: 'Reinforcement Learning (Graduate)',
        links: [],
      },
    ],
  },
  {
    title: 'Independent learning',
    repository: 'https://github.com/aarnav-11/zero_to_hero_karpathy',
    courses: [
      {
        code: 'Karpathy',
        title: 'Neural Networks: Zero to Hero',
        links: [],
      },
      {
        code: 'CS 336',
        title: 'Assignment 1: Basics',
        links: [],
      },
    ],
  },
];
