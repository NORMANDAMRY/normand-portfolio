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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:underline"
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
            className="inline-flex items-center gap-2 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to blog
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-slate-500 mb-3">
                <Calendar className="w-4 h-4" />
                <time>{post.date}</time>
                <span className="text-gray-300 dark:text-slate-600">•</span>
                <span>{post.readTime} min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="text-lg text-gray-500 dark:text-slate-400 mt-4">{post.excerpt}</p>
              )}
            </header>

            <div className="prose max-w-none text-gray-700 dark:text-gray-200">
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
