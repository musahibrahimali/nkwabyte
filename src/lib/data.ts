import type { Solution, Course } from './types';
import { Bot, Code, Beaker, GraduationCap } from 'lucide-react';

export const solutions: Solution[] = [
  {
    icon: Bot,
    title: 'AI Consulting',
    description: 'Expert guidance to integrate AI solutions into your business, boosting efficiency and innovation.',
  },
  {
    icon: Code,
    title: 'MVP Builds',
    description: 'Rapidly develop and launch Minimum Viable Products to test your ideas in the real market.',
  },
  {
    icon: Beaker,
    title: 'AI Lab Assistant',
    description: 'Specialized AI tools and support for research and development labs.',
  },
  {
    icon: GraduationCap,
    title: 'Tech Courses',
    description: 'Upskill your team or yourself with our cutting-edge technology courses.',
  },
];


export const courses: Course[] = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      category: 'AI & ML',
      level: 'Beginner',
      format: 'Online',
      description: 'A comprehensive introduction to the fundamental concepts and applications of machine learning.',
      image: 'https://placehold.co/600x400.png',
      dataAiHint: 'machine learning'
    },
    {
      id: 2,
      title: 'Advanced React Patterns',
      category: 'Web Development',
      level: 'Advanced',
      format: 'Online',
      description: 'Deep dive into advanced techniques and patterns for building scalable React applications.',
      image: 'https://placehold.co/600x400.png',
      dataAiHint: 'react code'
    },
    {
      id: 3,
      title: 'Data Visualization with D3.js',
      category: 'Data Science',
      level: 'Intermediate',
      format: 'Online',
      description: 'Learn to create stunning, interactive data visualizations for the web using D3.js.',
      image: 'https://placehold.co/600x400.png',
      dataAiHint: 'data visualization'
    },
    {
      id: 4,
      title: 'Full-Stack Web Development Bootcamp',
      category: 'Web Development',
      level: 'Beginner',
      format: 'In-person',
      description: 'An intensive, hands-on bootcamp covering everything you need to become a full-stack developer.',
      image: 'https://placehold.co/600x400.png',
      dataAiHint: 'web development'
    },
    {
        id: 5,
        title: 'Natural Language Processing',
        category: 'AI & ML',
        level: 'Intermediate',
        format: 'Online',
        description: 'Explore the world of NLP and learn how to build applications that understand human language.',
        image: 'https://placehold.co/600x400.png',
        dataAiHint: 'natural language'
    },
    {
        id: 6,
        title: 'Python for Data Science',
        category: 'Data Science',
        level: 'Beginner',
        format: 'In-person',
        description: 'Get started with Python and learn how to use it for data analysis, manipulation, and visualization.',
        image: 'https://placehold.co/600x400.png',
        dataAiHint: 'python data'
    }
  ];
