import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-nord4 dark:border-nord2 bg-nord5/50 dark:bg-nord1/50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-nord3 dark:text-nord5">
            Normand Amry
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/NORMANDAMRY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nord3 dark:text-nord5 hover:text-nord0 dark:hover:text-nord4 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:amry0863@gmail.com"
              className="text-nord3 dark:text-nord5 hover:text-nord0 dark:hover:text-nord4 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/normand-amry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nord3 dark:text-nord5 hover:text-nord0 dark:hover:text-nord4 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-nord3 dark:text-nord5">
            &copy; {new Date().getFullYear()} Normand Amry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
