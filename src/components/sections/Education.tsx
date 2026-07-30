import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-nord5/50 dark:bg-nord1/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nord0 dark:text-nord4 mb-12 text-center">
            Education &amp; <span className="text-nord10 dark:text-nord8">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-nord2 rounded-2xl p-6 border border-nord4 dark:border-nord2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-nord10/10 dark:bg-nord8/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-nord10 dark:text-nord8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-nord0 dark:text-nord4">
                    Universiti Kuala Lumpur (UniKL MIIT)
                  </h3>
                  <p className="text-sm text-nord3 dark:text-nord5">Diploma in Networking Technology</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-nord3 dark:text-nord5 mb-3">
                <Calendar className="w-4 h-4" />
                <span>2023 – Present (Expected Nov 2026)</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-nord14/10 text-nord10 dark:text-nord8 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                CGPA: 3.19
              </div>
            </div>

            <div className="bg-white dark:bg-nord2 rounded-2xl p-6 border border-nord4 dark:border-nord2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-nord10/10 dark:bg-nord8/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-nord10 dark:text-nord8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-nord0 dark:text-nord4">
                    Maahad Muhammadi Tumpat
                  </h3>
                  <p className="text-sm text-nord3 dark:text-nord5">SMU &amp; SPM</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-nord3 dark:text-nord5">
                <Calendar className="w-4 h-4" />
                <span>2018 – 2022</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-nord2 rounded-2xl p-6 border border-nord4 dark:border-nord2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-nord14/10 rounded-lg">
                <Award className="w-6 h-6 text-nord14" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-nord0 dark:text-nord4">
                  Red Hat System Administration I (RH124)
                </h3>
                <p className="text-sm text-nord3 dark:text-nord5">Red Hat | 2025 | Active</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
