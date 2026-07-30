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
          <h1 className="text-4xl md:text-5xl font-bold text-surface mb-4">
            Blog
          </h1>
          <p className="text-lg text-secondary mb-12">
            Thoughts, experiences, and things I've learned along the way.
          </p>

          <div className="space-y-6">
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
                  className="block glass-hover rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 text-sm text-muted mb-3">
                    <Calendar className="w-4 h-4" />
                    <time>{post.date}</time>
                    <span className="text-white/10">•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <h2 className="text-xl font-semibold text-surface mb-2 group-hover:text-accent-light transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-secondary mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-accent-light">
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
