export type ContentItem = {
  slug: string;
  title: string;
  description: string;
  date?: string;
  kind: 'note' | 'writing';
  paragraphs: string[];
};

export const notes: ContentItem[] = [
  {
    slug: 'things-i-believe',
    title: 'Things I believe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    kind: 'note',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at justo sed lorem posuere luctus.',
      'Curabitur euismod, nisl at aliquet posuere, neque libero congue massa, vitae tempor sem urna in nibh.',
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    ],
  },
  {
    slug: 'understanding-ai',
    title: 'Understanding AI',
    description: 'Lorem ipsum dolor sit amet, a gentle guide to ideas in motion.',
    kind: 'note',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
  {
    slug: 'developer-experience',
    title: 'Developer experience',
    description: 'Lorem ipsum dolor sit amet, building tools that feel clear and useful.',
    kind: 'note',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      'Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.',
      'Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.',
    ],
  },
  {
    slug: 'personal-software',
    title: 'Personal software',
    description: 'Lorem ipsum dolor sit amet, small projects for curious people.',
    kind: 'note',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.',
      'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in.',
      'Etiam porta sem malesuada magna mollis euismod.',
    ],
  },
];

export const writing: ContentItem[] = [
  {
    slug: 'a-small-note-on-learning',
    title: 'A small note on learning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'September 2026',
    kind: 'writing',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.',
      'Nullam quis risus eget urna mollis ornare vel eu leo.',
    ],
  },
  {
    slug: 'building-in-public',
    title: 'Building in public',
    description: 'Lorem ipsum dolor sit amet, notes from an unfinished project.',
    date: 'August 2026',
    kind: 'writing',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.',
      'Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam.',
      'Pellentesque ornare sem lacinia quam venenatis vestibulum.',
    ],
  },
  {
    slug: 'what-i-am-exploring',
    title: 'What I am exploring',
    description: 'Lorem ipsum dolor sit amet, a running list of questions.',
    date: 'July 2026',
    kind: 'writing',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo.',
      'Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
      'Cras mattis consectetur purus sit amet fermentum.',
    ],
  },
];

export const allContent = [...notes, ...writing];

export function getContent(slug: string) {
  return allContent.find((item) => item.slug === slug);
}
