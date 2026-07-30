import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-surface mb-12 text-center">
            Education &amp; <span className="text-gradient">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="glass-hover rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <GraduationCap className="w-6 h-6 text-accent-light" />
                </div>
                <div>
<h3 className="text-lg font-semibold text-surface">
                     Universiti Kuala Lumpur (UniKL MIIT)
                   </h3>
                   <p className="text-sm text-secondary">Diploma in Networking Technology</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted mb-3">
                <Calendar className="w-4 h-4" />
                <span>2023 – Present (Expected Nov 2026)</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent-light text-sm font-medium">
                <Award className="w-4 h-4" />
                CGPA: 3.19
              </div>
            </div>

            <div className="glass-hover rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <GraduationCap className="w-6 h-6 text-accent-light" />
                </div>
                <div>
<h3 className="text-lg font-semibold text-surface">
                     Maahad Muhammadi Tumpat
                   </h3>
                   <p className="text-sm text-secondary">SMU &amp; SPM</p>
                </div>
              </div>
<div className="flex items-center gap-2 text-sm text-muted">
                 <Calendar className="w-4 h-4" />
                 <span>2018 – 2022</span>
              </div>
            </div>
          </div>

          <div className="glass-hover rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Award className="w-6 h-6 text-accent-light" />
              </div>
              <div>
<h3 className="text-lg font-semibold text-surface">
                   Red Hat System Administration I (RH124)
                 </h3>
                 <p className="text-sm text-secondary">Red Hat | 2025 | Active</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
