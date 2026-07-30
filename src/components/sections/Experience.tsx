import { motion } from 'framer-motion'
import { Briefcase, Building } from 'lucide-react'
import { experiences } from '../../content/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-surface mb-12 text-center">
            Work <span className="text-gradient">Experience</span>
          </h2>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative pl-8 border-l border-muted ml-4"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center glow-accent">
                <Briefcase className="w-3 h-3 text-surface" />
              </div>

              <div className="mb-8 glass rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-surface">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-secondary mt-1 text-sm">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-surface/10">|</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent-light">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-secondary">
                      <span className="text-accent-light mt-1.5 shrink-0">•</span>
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
