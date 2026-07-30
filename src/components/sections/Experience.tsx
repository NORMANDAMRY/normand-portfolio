import { motion } from 'framer-motion'
import { Briefcase, Building } from 'lucide-react'
import { experiences } from '../../content/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Work <span className="text-violet-600 dark:text-violet-400">Experience</span>
          </h2>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative pl-8 border-l-2 border-violet-200 dark:border-violet-800 ml-4"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-violet-600 rounded-full flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-white" />
              </div>

              <div className="mb-8 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400 mt-1">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-gray-300 dark:text-slate-600">|</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <span className="text-violet-500 mt-1.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
