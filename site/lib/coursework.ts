export type Course = {
  code: string;
  title: string;
  term?: string;
  description?: string;
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
// Only include a term when it is known; repository dates are not course dates.
export const coursework: { title: string; courses: Course[] }[] = [
  {
    title: 'Mathematics · UCLA',
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
    title: 'Computer Science · UCLA',
    courses: [
      {
        code: 'CS 31',
        title: 'Introduction to Computer Science I',
        term: 'Winter 2025',
        description:
          'C++ fundamentals, arrays, classes, and testing. Projects include flight and frequent-flyer classes and a Beetle game.',
        links: [
          {
            label: 'Course repository',
            href: 'https://github.com/aarnav-11/UCLA_CS31_W25_projects',
          },
          {
            label: 'Beetle game',
            href: 'https://github.com/aarnav-11/UCLA_CS31_W25_projects/tree/main/Project_6',
          },
        ],
      },
      {
        code: 'CS 32',
        title: 'Introduction to Computer Science II',
        term: 'Summer 2025',
        description:
          'Object-oriented programming, data structures, and algorithms in C++. Projects include a task list and a product class hierarchy.',
        links: [
          {
            label: 'Course repository',
            href: 'https://github.com/aarnav-11/UCLA_CS32_S25_Projects',
          },
          {
            label: 'Task list',
            href: 'https://github.com/aarnav-11/UCLA_CS32_S25_Projects/tree/main/Project_2_final/Project_2_final',
          },
          {
            label: 'Product hierarchy',
            href: 'https://github.com/aarnav-11/UCLA_CS32_S25_Projects/tree/main/Project_3_final/Project_3_final',
          },
        ],
      },
      {
        code: 'CS 33',
        title: 'Introduction to Computer Organization',
        description:
          'Low-level programming and data representation, including bit manipulation in the CS:APP Data Lab.',
        links: [
          {
            label: 'Course repository',
            href: 'https://github.com/aarnav-11/CS33-UCLA',
          },
          {
            label: 'Data Lab',
            href: 'https://github.com/aarnav-11/CS33-UCLA/blob/main/Lab_1/bits.c',
          },
        ],
      },
      {
        code: 'CS 35L',
        title: 'Software Construction',
        description:
          'Stash, a full-stack note-taking app built with React, Express, and SQLite, with authentication, a browser extension, and AI-assisted tagging.',
        links: [
          {
            label: 'Stash · final project',
            href: 'https://github.com/aarnav-11/35L_final_project',
          },
          {
            label: 'Frontend',
            href: 'https://github.com/aarnav-11/35L_final_project/tree/main/cs35l_project/src',
          },
          {
            label: 'Backend',
            href: 'https://github.com/aarnav-11/35L_final_project/tree/main/cs35l_project/server',
          },
        ],
      },
      {
        code: 'CS M146',
        title: 'Introduction to Machine Learning',
        description:
          'Classification and model evaluation, with work on majority-vote baselines, decision trees, and k-nearest neighbors.',
        links: [
          {
            label: 'Course repository',
            href: 'https://github.com/aarnav-11/CSM146-UCLA',
          },
          {
            label: 'Assignment 1 notebook',
            href: 'https://github.com/aarnav-11/CSM146-UCLA/blob/main/Assignment_1_final.ipynb',
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
    courses: [
      {
        code: 'Karpathy',
        title: 'Neural Networks: Zero to Hero',
        description:
          'Self-directed neural network exercises, including Micrograd and Makemore.',
        links: [
          {
            label: 'Learning repository',
            href: 'https://github.com/aarnav-11/zero_to_hero_karpathy',
          },
          {
            label: 'Micrograd',
            href: 'https://github.com/aarnav-11/zero_to_hero_karpathy/tree/main/MicroGrad',
          },
          {
            label: 'Makemore',
            href: 'https://github.com/aarnav-11/zero_to_hero_karpathy/tree/main/Makemore',
          },
        ],
      },
      {
        code: 'CS 336',
        title: 'Assignment 1: Basics',
        description:
          'Self-directed work with the Stanford CS 336 assignment materials, including byte-pair encoding and tokenization.',
        links: [
          {
            label: 'Assignment folder',
            href: 'https://github.com/aarnav-11/zero_to_hero_karpathy/tree/main/cs336_assignment1',
          },
          {
            label: 'BPE code',
            href: 'https://github.com/aarnav-11/zero_to_hero_karpathy/blob/main/cs336_assignment1/cs336_basics/BPE.py',
          },
        ],
      },
    ],
  },
];
