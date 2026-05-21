import type { IconName, ExperienceArtifact } from './roadmap';
import type { Narrative } from './narrative';

export interface CommunityRole {
  slug: string;
  org: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  blurb: string;
  highlights: string[];
  tags: string[];
  icon: IconName;
  pastel: string;
  pastelStrong: string;
  logo?: string;
  logoFill?: boolean;
  logoBg?: string;
  links?: { kind: 'instagram' | 'website'; label: string; href: string }[];
  narrative?: Narrative;
  photos?: { src: string; alt: string; caption?: string }[];
  artifacts?: ExperienceArtifact[];
}

// Most-recent / current first
export const community: CommunityRole[] = [
  {
    slug: 'muslim-alumni-network-cmu',
    org: 'Muslim Alumni Network — Carnegie Mellon University',
    role: 'Secretary',
    location: 'Remote · CMU',
    period: '2024 – present',
    current: true,
    blurb:
      'Building bridges between current Muslim CMU students and alumni — mentorship, networking, and continuity for a community I care about.',
    highlights: [],
    tags: ['Leadership', 'Mentorship', 'Alumni'],
    icon: 'scotty',
    pastel: '#e6dcf2',
    pastelStrong: '#9c83c8',
    logo: '/community/muslim-alumni-network-cmu.png',
    logoFill: true,
    links: [
      { kind: 'website', label: 'cmumuslimalumni.github.io', href: 'https://cmumuslimalumni.github.io' },
      { kind: 'instagram', label: '@cmumuslimalumni', href: 'https://www.instagram.com/cmumuslimalumni' },
    ],
  },
  {
    slug: 'muslim-youth-san-diego',
    org: 'Muslim Youth San Diego',
    role: 'Treasurer',
    location: 'San Diego, CA',
    period: '2024 – present',
    current: true,
    blurb:
      'Muslim Youth San Diego works to foster community and share Islamic knowledge with young people across San Diego. I serve as treasurer on the board.',
    highlights: [],
    tags: ['Leadership', 'Community', 'Youth'],
    icon: 'users',
    pastel: '#cfe6e0',
    pastelStrong: '#5a9c91',
    logo: '/community/muslim-youth-san-diego.png',
    links: [
      { kind: 'instagram', label: '@muslimyouthsd', href: 'https://www.instagram.com/muslimyouthsd/' },
    ],
  },
  {
    slug: 'msa-cmu',
    org: 'Muslim Student Association — Carnegie Mellon University',
    role: 'Vice President, Outreach Chair',
    location: 'Pittsburgh, PA',
    period: 'Aug 2022 – May 2024',
    current: false,
    blurb:
      'Helped lead the Muslim Student Association at CMU — organized programming, supported community life, and worked with the board to grow MSA into a dependable home for Muslim students on campus.',
    highlights: [],
    tags: ['Leadership', 'Community', 'Programming'],
    icon: 'scotty',
    pastel: '#e6dcf2',
    pastelStrong: '#9c83c8',
    logo: '/community/msa-cmu.png',
    logoBg: '#931220',
    links: [
      { kind: 'instagram', label: '@msa.cmu', href: 'https://www.instagram.com/msa.cmu/' },
    ],
  },
];
