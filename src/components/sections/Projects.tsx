import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, ChevronRight } from 'lucide-react'
import { GithubIcon } from '../Icons'
import { projects, type Project } from '../../content/projects'

const categories = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'desktop', label: 'Desktop' },
  { value: 'ai', label: 'AI' },
  { value: 'networking', label: 'Networking' },
  { value: 'embedded', label: 'Embedded' },
] as const

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-surface mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-secondary text-center mb-8 max-w-2xl mx-auto">
            A collection of projects I've built during my internship and personal time
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-accent text-surface'
                    : 'glass-hover text-secondary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="glass-hover rounded-2xl p-6 cursor-pointer group"
              >
                {project.image && (
                  <div className="relative -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-2xl h-40">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent-light uppercase">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted">{project.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-surface mb-2 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 dark:bg-white/5 text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded-md bg-white/5 dark:bg-white/5 text-muted">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
                <div className="flex items-center text-sm text-accent-light font-medium">
                  View Details <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent-light uppercase">
                  {selectedProject.category}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-lg hover:bg-white/10 text-secondary cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {(selectedProject.images || (selectedProject.image ? [selectedProject.image] : [])).length > 0 && (
                <div className="-mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 overflow-x-auto">
                  <div className="flex gap-2 p-1">
                    {(selectedProject.images || (selectedProject.image ? [selectedProject.image] : [])).map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${selectedProject.title} ${i + 1}`}
                        className="h-48 md:h-56 rounded-xl object-cover shrink-0"
                      />
                    ))}
                  </div>
                </div>
              )}
              <h3 className="text-2xl font-bold text-surface mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-muted mb-4">{selectedProject.date}</p>
              <div className="text-secondary leading-relaxed mb-6 whitespace-pre-line">
                {selectedProject.longDescription}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1 rounded-lg bg-white/5 dark:bg-white/5 text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {selectedProject.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {selectedProject.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-surface rounded-xl hover:bg-accent/90 transition-colors text-sm font-medium"
                    >
                      {link.label === 'GitHub' ? (
                        <GithubIcon className="w-4 h-4" />
                      ) : (
                        <ExternalLink className="w-4 h-4" />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
