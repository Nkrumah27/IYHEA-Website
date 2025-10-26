
import { Page } from './App';

export interface NavLink {
  name: Page;
  href: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  program: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export interface GhanaDetailItem {
  name: string;
  description: string;
  image: string;
}

export interface GhanaCategoryData {
  [key: string]: GhanaDetailItem[];
}

export interface BlogPost {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
}

export interface SearchResult {
    type: 'Page' | 'Blog' | 'FAQ';
    title: string;
    excerpt: string;
    action: () => void;
}
