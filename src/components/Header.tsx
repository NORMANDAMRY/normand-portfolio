import { useState, useEffect } from 'react'
import { Menu, X, Mail } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { GithubIcon } from './Icons'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace('#', ''))
      const scrollPos = window.scrollY + 100
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(section)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith('/')) return
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-bold text-gray-900 dark:text-white">
          Normand<span className="text-violet-500">.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                if (!item.href.startsWith('/')) {
                  e.preventDefault()
                  handleNavClick(item.href)
                }
              }}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.href.replace('#', '') && !item.href.startsWith('/')
                  ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-1 ml-2 pl-2 border-l border-gray-200 dark:border-slate-700">
            <a
              href="https://github.com/NORMANDAMRY"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:amry0863@gmail.com"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <ThemeToggle />
          </div>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (!item.href.startsWith('/')) {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }
                }}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-gray-200 dark:border-slate-700">
              <a
                href="https://github.com/NORMANDAMRY"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800"
              >
            <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:amry0863@gmail.com"
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                <Mail className="w-5 h-5" />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
