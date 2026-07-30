import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 glass">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/NORMANDAMRY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-surface transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:amry0863@gmail.com"
              className="text-muted hover:text-surface transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/amry-razak-b305973a0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-surface transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Normand Amry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
