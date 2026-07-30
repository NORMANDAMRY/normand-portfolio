import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../../content/blog'

export default function BlogList() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Blog
          </h1>
          <p className="text-lg text-muted-light mb-12">
            Thoughts, experiences, and things I've learned along the way.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block bg-card rounded-2xl p-6 border border-border hover:border-cyan-500 transition-all"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-light mb-3">
                    <Calendar className="w-4 h-4" />
                    <time>{post.date}</time>
                    <span className="text-muted">•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-light mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-cyan-400">
                    Read more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
