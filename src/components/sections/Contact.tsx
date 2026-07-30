import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { GithubIcon } from '../Icons'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nord0 dark:text-nord4 mb-4 text-center">
            Get In <span className="text-nord10 dark:text-nord8">Touch</span>
          </h2>
          <p className="text-nord3 dark:text-nord5 text-center mb-12 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-nord2 rounded-xl border border-nord4 dark:border-nord2">
                <div className="p-3 bg-nord10/10 dark:bg-nord8/10 rounded-lg">
                  <Mail className="w-5 h-5 text-nord10 dark:text-nord8" />
                </div>
                <div>
                  <p className="text-sm text-nord3 dark:text-nord5">Email</p>
                  <a href="mailto:amry0863@gmail.com" className="font-medium text-nord0 dark:text-nord4 hover:text-nord10 dark:hover:text-nord8">
                    amry0863@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-nord2 rounded-xl border border-nord4 dark:border-nord2">
                <div className="p-3 bg-nord10/10 dark:bg-nord8/10 rounded-lg">
                  <Phone className="w-5 h-5 text-nord10 dark:text-nord8" />
                </div>
                <div>
                  <p className="text-sm text-nord3 dark:text-nord5">Phone</p>
                  <a href="tel:+60189066353" className="font-medium text-nord0 dark:text-nord4 hover:text-nord10 dark:hover:text-nord8">
                    +60 18-906 6353
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-nord2 rounded-xl border border-nord4 dark:border-nord2">
                <div className="p-3 bg-nord10/10 dark:bg-nord8/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-nord10 dark:text-nord8" />
                </div>
                <div>
                  <p className="text-sm text-nord3 dark:text-nord5">Location</p>
                  <p className="font-medium text-nord0 dark:text-nord4">Bangi, Selangor, Malaysia</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-nord2 rounded-xl border border-nord4 dark:border-nord2">
                <div className="p-3 bg-nord10/10 dark:bg-nord8/10 rounded-lg">
                  <GithubIcon className="w-5 h-5 text-nord10 dark:text-nord8" />
                </div>
                <div>
                  <p className="text-sm text-nord3 dark:text-nord5">GitHub</p>
                  <a href="https://github.com/NORMANDAMRY" target="_blank" rel="noopener noreferrer" className="font-medium text-nord0 dark:text-nord4 hover:text-nord10 dark:hover:text-nord8">
                    /NORMANDAMRY
                  </a>
                </div>
              </div>
            </div>

            <form
              action="https://formspree.io/f/amry0863@gmail.com"
              method="POST"
              className="bg-white dark:bg-nord2 rounded-2xl p-6 border border-nord4 dark:border-nord2 space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-nord3 dark:text-nord5 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-nord4 dark:border-nord2 bg-nord6 dark:bg-nord1 text-nord0 dark:text-nord4 focus:outline-none focus:ring-2 focus:ring-nord9"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-nord3 dark:text-nord5 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-nord4 dark:border-nord2 bg-nord6 dark:bg-nord1 text-nord0 dark:text-nord4 focus:outline-none focus:ring-2 focus:ring-nord9"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-nord3 dark:text-nord5 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-nord4 dark:border-nord2 bg-nord6 dark:bg-nord1 text-nord0 dark:text-nord4 focus:outline-none focus:ring-2 focus:ring-nord9 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-nord10 text-white rounded-xl hover:bg-nord9 transition-colors font-medium cursor-pointer"
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
