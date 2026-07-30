import { motion } from 'framer-motion'
import { MapPin, Calendar, GraduationCap } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-surface mb-8 text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="glass-hover rounded-xl p-4 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-accent/10">
                <MapPin className="w-5 h-5 text-accent-light" />
              </div>
              <div>
                <p className="text-xs text-muted">Location</p>
                <p className="font-medium text-surface text-sm">Bangi, Selangor</p>
              </div>
            </div>
            <div className="glass-hover rounded-xl p-4 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-accent/10">
                <Calendar className="w-5 h-5 text-accent-light" />
              </div>
              <div>
                <p className="text-xs text-muted">Availability</p>
                <p className="font-medium text-surface text-sm">September 2026</p>
              </div>
            </div>
            <div className="glass-hover rounded-xl p-4 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-accent/10">
                <GraduationCap className="w-5 h-5 text-accent-light" />
              </div>
              <div>
                <p className="text-xs text-muted">Education</p>
                <p className="font-medium text-surface text-sm">UniKL MIIT</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 md:p-8">
<p className="text-secondary leading-relaxed text-lg">
               Fresh graduate with a <strong className="text-surface">Diploma in Networking Technology</strong> from{' '}
               <strong className="text-surface">UniKL MIIT</strong>, passionate about software development,
               networking, and IT infrastructure. Strong foundation in system administration, network
               configuration, and full-stack application development, with hands-on experience gained
               through academic projects and practical training at{' '}
               <strong className="text-surface">Consurv Technic</strong>.
             </p>
             <p className="text-secondary leading-relaxed text-lg mt-4">
               During my 18-week internship, I built and deployed{' '}
               <strong className="text-surface">5+ production-grade systems</strong> spanning mobile, web,
               desktop, and serverless platforms. A quick learner with strong analytical and problem-solving
               skills, eager to contribute to a collaborative team as a{' '}
               <strong className="text-surface">Software Engineer</strong> or{' '}
               <strong className="text-surface">IT professional</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
