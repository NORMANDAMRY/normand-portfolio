import { motion } from 'framer-motion'
import { MapPin, Calendar, GraduationCap } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-nord5/50 dark:bg-nord1/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nord0 dark:text-nord4 mb-8 text-center">
            About <span className="text-nord10 dark:text-nord8">Me</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-nord2 rounded-xl border border-nord4 dark:border-nord2">
              <MapPin className="w-5 h-5 text-nord10 dark:text-nord8 shrink-0" />
              <div>
                <p className="text-sm text-nord3 dark:text-nord5">Location</p>
                <p className="font-medium text-nord0 dark:text-nord4">Bangi, Selangor</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-nord2 rounded-xl border border-nord4 dark:border-nord2">
              <Calendar className="w-5 h-5 text-nord10 dark:text-nord8 shrink-0" />
              <div>
                <p className="text-sm text-nord3 dark:text-nord5">Availability</p>
                <p className="font-medium text-nord0 dark:text-nord4">September 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-nord2 rounded-xl border border-nord4 dark:border-nord2">
              <GraduationCap className="w-5 h-5 text-nord10 dark:text-nord8 shrink-0" />
              <div>
                <p className="text-sm text-nord3 dark:text-nord5">Education</p>
                <p className="font-medium text-nord0 dark:text-nord4">UniKL MIIT</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-nord2 rounded-2xl p-6 md:p-8 border border-nord4 dark:border-nord2">
            <p className="text-nord0 dark:text-nord4 leading-relaxed text-lg">
              Fresh graduate with a <strong>Diploma in Networking Technology</strong> from <strong>UniKL MIIT</strong>,
              passionate about software development, networking, and IT infrastructure. Strong foundation in
              system administration, network configuration, and full-stack application development, with
              hands-on experience gained through academic projects and practical training at{' '}
              <strong>Consurv Technic</strong>.
            </p>
            <p className="text-nord0 dark:text-nord4 leading-relaxed text-lg mt-4">
              During my 18-week internship, I built and deployed <strong>5+ production-grade systems</strong> spanning
              mobile, web, desktop, and serverless platforms. A quick learner with strong analytical and
              problem-solving skills, eager to contribute to a collaborative team as a{' '}
              <strong>Software Engineer</strong> or <strong>IT professional</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
