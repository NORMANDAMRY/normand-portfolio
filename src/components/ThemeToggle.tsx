import { useTheme } from '../hooks/useTheme'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-nord5 dark:hover:bg-nord1 transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-nord13" />
      ) : (
        <Moon className="w-5 h-5 text-nord3" />
      )}
    </button>
  )
}
