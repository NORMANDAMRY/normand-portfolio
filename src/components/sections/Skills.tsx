import { motion } from 'framer-motion'
import { skillGroups } from '../../content/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-surface mb-12 text-center">
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="glass-hover rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-surface mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/5 dark:bg-white/5 text-secondary text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
