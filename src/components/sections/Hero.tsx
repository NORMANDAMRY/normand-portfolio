import { motion } from 'framer-motion'
import { ArrowDown, FileText, Mail, BarChart3, Zap } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../Icons'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-hero pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-accent-light mb-6">
              <Zap className="w-4 h-4" />
              Diploma in Networking Technology
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-surface leading-tight mb-6">
              Building{' '}
              <span className="text-gradient">Impactful</span>
              <br />
              Software &amp; Networks
            </h1>

            <p className="text-lg text-secondary max-w-xl mb-8 leading-relaxed">
              Fresh graduate passionate about full-stack development, AI systems, and network infrastructure.
              Quick learner with 5+ production-grade systems built during internship.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-surface rounded-xl hover:bg-accent/90 transition-all font-medium glow-accent"
              >
                <FileText className="w-5 h-5" />
                Download CV
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 px-6 py-3 glass-hover text-surface rounded-xl font-medium"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://github.com/NORMANDAMRY"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-secondary hover-text-surface hover-bg-surface transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/amry-razak-b305973a0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-secondary hover-text-surface hover-bg-surface transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href="mailto:amry0863@gmail.com"
                className="p-2 rounded-lg text-secondary hover-text-surface hover-bg-surface transition-all"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-2xl p-6 glow-accent">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-muted">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-muted font-mono">portfolio — normand.dev</span>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-2 text-accent-light">
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-surface/80">normand-amry</span>
                </div>
                <div className="ml-5 space-y-2">
                  <div className="flex items-center gap-2 text-secondary">
                    <Folder className="w-4 h-4 text-yellow-500/70" />
                    <span>projects</span>
                  </div>
                  <div className="ml-5 space-y-1.5">
                    {['JARVIS', 'TaskFlow', 'PayCove', 'AFK'].map((p) => (
                      <div key={p} className="flex items-center gap-2 text-muted">
                        <File className="w-4 h-4 text-accent/60" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-secondary">
                    <Folder className="w-4 h-4 text-yellow-500/70" />
                    <span>experience</span>
                  </div>
                  <div className="ml-5 flex items-center gap-2 text-muted">
                    <File className="w-4 h-4 text-accent/60" />
                    <span>consurv-technic.md</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-muted">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted font-mono">GitHub Activity</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    <span className="text-xs text-muted font-mono">active</span>
                  </div>
                </div>
                <div className="flex items-end gap-1 h-12">
                  {[35, 55, 25, 70, 45, 85, 60, 40, 75, 50, 30, 65, 80, 55].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm transition-all"
                      style={{
                        height: `${h}%`,
                        background: `linear-gradient(to top, rgba(168,85,247,${0.3 + h/200}), rgba(168,85,247,${0.1 + h/300}))`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-muted font-mono">
                <span>18 repos</span>
                <span className="flex items-center gap-1">
                  <BarChart3 className="w-3 h-3" />
                  247 commits
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center mt-20"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex flex-col items-center text-secondary hover-text-surface transition-colors"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ChevronRight(props: { className?: string }) {
  return (
    <svg className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m13 7 5 5-5 5M6 7l5 5-5 5" />
    </svg>
  )
}

function Folder(props: { className?: string }) {
  return (
    <svg className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
    </svg>
  )
}

function File(props: { className?: string }) {
  return (
    <svg className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  )
}
