export interface BlogPostData {
  slug: string
  title: string
  date: string
  readTime: number
  excerpt: string
  content: string
}

// RAW VITE IMPORT FOR MARKDOWN FILES
// These are loaded at build time via Vite's ?raw import
import internshipPost from './blog/my-internship-at-consurv.md?raw'
import krakenaiPost from './blog/building-krakenai.md?raw'

export const blogPosts: BlogPostData[] = [
  {
    slug: 'my-internship-at-consurv',
    title: 'My 18-Week Internship at Consurv Technic',
    date: 'July 2026',
    readTime: 5,
    excerpt:
      'Reflecting on my journey building 5 production systems, from a corporate website to an AI assistant.',
    content: internshipPost,
  },
  {
    slug: 'building-krakenai',
    title: 'Building KrakenAi: A Multi-Provider AI Gateway',
    date: 'April 2026',
    readTime: 7,
    excerpt:
      'How I designed and deployed an AI assistant supporting 6+ LLM providers with RAG and real-time streaming.',
    content: krakenaiPost,
  },
]
