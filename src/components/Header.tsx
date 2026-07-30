import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-bold text-surface">
          Normand<span className="text-accent">.dev</span>
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
                  ? 'text-accent bg-white/10 dark:bg-white/10'
                  : 'text-secondary hover:text-surface hover-bg-surface'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-1 ml-2 pl-2 border-l border-muted">
            <a
              href="https://github.com/NORMANDAMRY"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-secondary hover:text-surface hover-bg-surface transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <ThemeToggle />
            <a
              href="mailto:amry0863@gmail.com"
              className="ml-1 px-4 py-2 bg-cta hover:bg-cta-hover text-white rounded-xl text-sm font-medium transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-secondary hover-bg-surface cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-muted glass">
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
                className="block px-3 py-2 rounded-lg text-sm font-medium text-secondary hover:text-surface hover-bg-surface"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-muted">
              <a
                href="https://github.com/NORMANDAMRY"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-secondary hover:text-surface hover-bg-surface"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <ThemeToggle />
              <a
                href="mailto:amry0863@gmail.com"
                className="ml-auto px-4 py-2 bg-cta hover:bg-cta-hover text-white rounded-xl text-sm font-medium transition-colors"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
