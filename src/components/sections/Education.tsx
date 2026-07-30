import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Education &amp; <span className="text-violet-600 dark:text-violet-400">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Universiti Kuala Lumpur (UniKL MIIT)
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-slate-400">Diploma in Networking Technology</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400 mb-3">
                <Calendar className="w-4 h-4" />
                <span>2023 – Present (Expected Nov 2026)</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                CGPA: 3.19
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Maahad Muhammadi Tumpat
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-slate-400">SMU &amp; SPM</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400">
                <Calendar className="w-4 h-4" />
                <span>2018 – 2022</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <Award className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Red Hat System Administration I (RH124)
                </h3>
                <p className="text-sm text-gray-500 dark:text-slate-400">Red Hat | 2025 | Active</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
