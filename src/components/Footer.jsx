import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-900/10 dark:border-paper-100/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-10 sm:flex-row sm:justify-between sm:px-8 lg:px-10">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-semibold text-ink-900 dark:text-paper-100">{profile.name}</p>
          <p className="mt-1 font-mono text-xs text-ink-700/50 dark:text-paper-400/60">
            © {year} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-700/70 transition-colors hover:text-mint-500 dark:text-paper-400 dark:hover:text-mint-400"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-700/70 transition-colors hover:text-mint-500 dark:text-paper-400 dark:hover:text-mint-400"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-ink-700/70 transition-colors hover:text-mint-500 dark:text-paper-400 dark:hover:text-mint-400"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
