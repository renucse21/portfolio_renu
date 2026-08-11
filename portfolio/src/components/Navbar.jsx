import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { navLinks } from '../data/portfolio'
import useDarkMode from '../hooks/useDarkMode'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useDarkMode()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-900/5 bg-paper-50/80 backdrop-blur-lg dark:border-paper-100/5 dark:bg-ink-900/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-mono text-lg font-semibold text-ink-900 dark:text-paper-100"
        >
          <span className="text-mint-500">&lt;</span>Renuka<span className="text-mint-500">/&gt;</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-mono text-sm text-ink-700/80 transition-colors hover:text-mint-500 dark:text-paper-400 dark:hover:text-mint-400"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="rounded-full border border-ink-900/10 p-2 text-ink-700 transition-colors hover:text-mint-500 dark:border-paper-100/10 dark:text-paper-300 dark:hover:text-mint-400"
          >
            {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="rounded-full border border-ink-900/10 p-2 text-ink-700 dark:border-paper-100/10 dark:text-paper-300"
          >
            {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="rounded-full border border-ink-900/10 p-2 text-ink-900 dark:border-paper-100/10 dark:text-paper-100"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-ink-900/5 bg-paper-50/95 backdrop-blur-lg dark:border-paper-100/5 dark:bg-ink-900/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-lg px-3 py-3 font-mono text-sm text-ink-700 transition-colors hover:bg-mint-400/10 hover:text-mint-500 dark:text-paper-300 dark:hover:text-mint-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
