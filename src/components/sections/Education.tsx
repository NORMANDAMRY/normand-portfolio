import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-deep/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 text-center">
            Education &amp; <span className="text-cyan-400">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-950/50 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100">
                    Universiti Kuala Lumpur (UniKL MIIT)
                  </h3>
                  <p className="text-sm text-muted-light">Diploma in Networking Technology</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-light mb-3">
                <Calendar className="w-4 h-4" />
                <span>2023 – Present (Expected Nov 2026)</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/50 text-cyan-300 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                CGPA: 3.19
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-950/50 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100">
                    Maahad Muhammadi Tumpat
                  </h3>
                  <p className="text-sm text-muted-light">SMU &amp; SPM</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-light">
                <Calendar className="w-4 h-4" />
                <span>2018 – 2022</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-950/50 rounded-lg">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">
                  Red Hat System Administration I (RH124)
                </h3>
                <p className="text-sm text-muted-light">Red Hat | 2025 | Active</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
