import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { blogPosts } from '../../content/blog'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-nord0 dark:text-nord4 mb-4">Post not found</h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-nord10 dark:text-nord8 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-nord3 dark:text-nord5 hover:text-nord0 dark:hover:text-nord4 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to blog
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-2 text-sm text-nord3 dark:text-nord5 mb-3">
                <Calendar className="w-4 h-4" />
                <time>{post.date}</time>
                <span className="text-nord4 dark:border-nord2">•</span>
                <span>{post.readTime} min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-nord0 dark:text-nord4">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="text-lg text-nord3 dark:text-nord5 mt-4">{post.excerpt}</p>
              )}
            </header>

            <div className="prose max-w-none dark:text-nord4">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  )
}
