import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { GithubIcon } from '../Icons'

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-surface mb-4 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="glass-hover rounded-xl p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10 shrink-0">
                  <Mail className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <p className="text-xs text-muted">Email</p>
                  <a href="mailto:amry0863@gmail.com" className="font-medium text-surface hover:text-accent-light">
                    amry0863@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-hover rounded-xl p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10 shrink-0">
                  <Phone className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <p className="text-xs text-muted">Phone</p>
                  <a href="tel:+60189066353" className="font-medium text-surface hover:text-accent-light">
                    +60 18-906 6353
                  </a>
                </div>
              </div>

              <div className="glass-hover rounded-xl p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10 shrink-0">
                  <MapPin className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <p className="text-xs text-muted">Location</p>
                  <p className="font-medium text-surface">Bangi, Selangor, Malaysia</p>
                </div>
              </div>

              <div className="glass-hover rounded-xl p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10 shrink-0">
                  <GithubIcon className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <p className="text-xs text-muted">GitHub</p>
                  <a href="https://github.com/NORMANDAMRY" target="_blank" rel="noopener noreferrer" className="font-medium text-surface hover:text-accent-light">
                    /NORMANDAMRY
                  </a>
                </div>
              </div>
            </div>

            <form
              action="https://formspree.io/f/xpqvewwe"
              method="POST"
              className="glass rounded-2xl p-6 space-y-4"
            >
              <div>
<label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
                   Name
                 </label>
                 <input
                   type="text"
                   id="name"
                   name="name"
                   required
                   className="w-full px-4 py-2.5 rounded-xl bg-white/5 dark:bg-white/5 border border-muted text-surface placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>
              <div>
<label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                   Email
                 </label>
                 <input
                   type="email"
                   id="email"
                   name="email"
                   required
                   className="w-full px-4 py-2.5 rounded-xl bg-white/5 dark:bg-white/5 border border-muted text-surface placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>
              <div>
<label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
                   Message
                 </label>
                 <textarea
                   id="message"
                   name="message"
                   rows={4}
                   required
                   className="w-full px-4 py-2.5 rounded-xl bg-white/5 dark:bg-white/5 border border-muted text-surface placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-surface rounded-xl hover:bg-accent/90 transition-colors font-medium cursor-pointer glow-accent"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
