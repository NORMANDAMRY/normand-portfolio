import { motion } from 'framer-motion'
import { ArrowDown, FileText, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../Icons'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-nord10 dark:text-nord8 font-medium mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-nord0 dark:text-nord4 mb-4">
            Normand Amry
          </h1>
          <h2 className="text-2xl md:text-3xl text-nord3 dark:text-nord5 mb-6">
            Networking &amp; Software Engineer
          </h2>
          <p className="text-lg text-nord3 dark:text-nord5 max-w-2xl mx-auto mb-8">
            Fresh graduate with a Diploma in Networking Technology, passionate about building
            full-stack applications, AI systems, and network infrastructure.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-nord10 text-white rounded-xl hover:bg-nord9 transition-colors font-medium"
            >
              <FileText className="w-5 h-5" />
              Download CV
            </a>
            <a
              href="https://github.com/NORMANDAMRY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-nord2 text-nord0 dark:text-nord4 rounded-xl border border-nord4 dark:border-nord2 hover:border-nord9 transition-colors font-medium"
            >
              <GithubIcon className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="mailto:amry0863@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-nord2 text-nord0 dark:text-nord4 rounded-xl border border-nord4 dark:border-nord2 hover:border-nord9 transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="https://linkedin.com/in/amry-razak-b305973a0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-nord2 text-nord0 dark:text-nord4 rounded-xl border border-nord4 dark:border-nord2 hover:border-nord9 transition-colors font-medium"
            >
              <LinkedinIcon className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex flex-col items-center text-nord3 dark:text-nord5 hover:text-nord0 dark:hover:text-nord4 transition-colors"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
