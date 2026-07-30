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
          <h2 className="text-3xl md:text-4xl font-bold text-nord0 dark:text-nord4 mb-12 text-center">
            Work <span className="text-nord10 dark:text-nord8">Experience</span>
          </h2>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative pl-8 border-l-2 border-nord4 dark:border-nord2 ml-4"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-nord10 rounded-full flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-white" />
              </div>

              <div className="mb-8 bg-white dark:bg-nord2 rounded-2xl p-6 border border-nord4 dark:border-nord2">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-nord0 dark:text-nord4">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-nord3 dark:text-nord5 mt-1">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-nord4 dark:text-nord2">|</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-nord10/10 dark:bg-nord8/10 text-nord10 dark:text-nord8 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-nord0 dark:text-nord4">
                      <span className="text-nord10 dark:text-nord8 mt-1.5 shrink-0">•</span>
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
