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
    <section id="projects" className="py-20 bg-nord5/50 dark:bg-nord1/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nord0 dark:text-nord4 mb-4 text-center">
            Featured <span className="text-nord10 dark:text-nord8">Projects</span>
          </h2>
          <p className="text-nord3 dark:text-nord5 text-center mb-8 max-w-2xl mx-auto">
            A collection of projects I've built during my internship and personal time
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-nord10 text-white'
                    : 'bg-white dark:bg-nord2 text-nord0 dark:text-nord4 border border-nord4 dark:border-nord2 hover:border-nord9'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white dark:bg-nord2 rounded-2xl p-6 border border-nord4 dark:border-nord2 hover:border-nord9 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-2 py-1 bg-nord10/10 dark:bg-nord8/10 text-nord10 dark:text-nord8 rounded-full uppercase">
                    {project.category}
                  </span>
                  <span className="text-xs text-nord3 dark:text-nord5">{project.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-nord0 dark:text-nord4 mb-2 group-hover:text-nord10 dark:group-hover:text-nord8 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-nord3 dark:text-nord5 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-nord5 dark:bg-nord1 text-nord0 dark:text-nord4 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-1 bg-nord5 dark:bg-nord1 text-nord3 dark:text-nord5 rounded-md">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
                <div className="flex items-center text-sm text-nord10 dark:text-nord8 font-medium">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-nord2 rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-nord4 dark:border-nord2"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium px-2 py-1 bg-nord10/10 dark:bg-nord8/10 text-nord10 dark:text-nord8 rounded-full uppercase">
                  {selectedProject.category}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-lg hover:bg-nord5 dark:hover:bg-nord1 text-nord3 dark:text-nord5 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-2xl font-bold text-nord0 dark:text-nord4 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-nord3 dark:text-nord5 mb-4">{selectedProject.date}</p>
              <p className="text-nord0 dark:text-nord4 leading-relaxed mb-6">
                {selectedProject.longDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1 bg-nord5 dark:bg-nord1 text-nord0 dark:text-nord4 rounded-lg"
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
                      className="inline-flex items-center gap-2 px-4 py-2 bg-nord10 text-white rounded-xl hover:bg-nord9 transition-colors text-sm font-medium"
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
