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
    <header className="fixed top-0 left-0 right-0 z-50 bg-nord6/80 dark:bg-nord0/80 backdrop-blur-md border-b border-nord4 dark:border-nord2">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-bold text-nord0 dark:text-nord4">
          Normand<span className="text-nord10 dark:text-nord8">.dev</span>
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
                  ? 'text-nord10 dark:text-nord8 bg-nord10/10 dark:bg-nord8/10'
                  : 'text-nord3 dark:text-nord5 hover:text-nord0 dark:hover:text-nord4 hover:bg-nord5 dark:hover:bg-nord1'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-1 ml-2 pl-2 border-l border-nord4 dark:border-nord2">
            <a
              href="https://github.com/NORMANDAMRY"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-nord3 dark:text-nord5 hover:text-nord0 dark:hover:text-nord4 hover:bg-nord5 dark:hover:bg-nord1 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:amry0863@gmail.com"
              className="p-2 rounded-lg text-nord3 dark:text-nord5 hover:text-nord0 dark:hover:text-nord4 hover:bg-nord5 dark:hover:bg-nord1 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <ThemeToggle />
          </div>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-nord3 dark:text-nord5 hover:bg-nord5 dark:hover:bg-nord1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-nord4 dark:border-nord2 bg-nord6 dark:bg-nord0">
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
                className="block px-3 py-2 rounded-lg text-sm font-medium text-nord3 dark:text-nord5 hover:text-nord0 dark:hover:text-nord4 hover:bg-nord5 dark:hover:bg-nord1"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-nord4 dark:border-nord2">
              <a
                href="https://github.com/NORMANDAMRY"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-nord3 dark:text-nord5 hover:text-nord0 dark:hover:text-nord4 hover:bg-nord5 dark:hover:bg-nord1"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:amry0863@gmail.com"
                className="p-2 rounded-lg text-nord3 dark:text-nord5 hover:text-nord0 dark:hover:text-nord4 hover:bg-nord5 dark:hover:bg-nord1"
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
