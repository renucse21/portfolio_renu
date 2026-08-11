import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiCamera } from 'react-icons/fi'
import { profile } from '../data/portfolio'
import useTypingEffect from '../hooks/useTypingEffect'

export default function Hero() {
  const typed = useTypingEffect(profile.taglineWords)

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* Background grid + glows */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
      <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-glow-mint blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-glow-amber blur-3xl" />

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: terminal-style intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="glass-card-light dark:glass-card mx-auto max-w-xl overflow-hidden lg:mx-0">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-ink-900/10 bg-ink-900/5 px-4 py-3 dark:border-paper-100/10 dark:bg-black/20">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 font-mono text-xs text-ink-700/60 dark:text-paper-400">whoami.sh</span>
            </div>
            <div className="space-y-2 p-6 font-mono text-sm sm:text-base">
              <p className="text-ink-700/70 dark:text-paper-400">
                <span className="text-mint-500">renuka@portfolio</span>
                <span className="text-ink-400">:</span>
                <span className="text-amber-400">~</span>
                <span className="text-ink-400">$</span> whoami
              </p>
              <p className="text-lg font-semibold text-ink-900 dark:text-paper-100 sm:text-xl">
                {profile.name}
              </p>
              <p className="min-h-[1.75rem] text-mint-500 dark:text-mint-400">
                {typed}
                <span className="ml-0.5 animate-blink">▍</span>
              </p>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-ink-700/80 dark:text-paper-400 lg:mx-0 lg:text-left">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a href={profile.resumeFile} download className="btn-primary">
              <FiDownload /> Download Resume
            </a>
            <a href="#contact" className="btn-outline">
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5 lg:justify-start">
            <SocialIcon href={profile.github} label="GitHub" icon={<FiGithub size={20} />} />
            <SocialIcon href={profile.linkedin} label="LinkedIn" icon={<FiLinkedin size={20} />} />
            <SocialIcon href={`mailto:${profile.email}`} label="Email" icon={<FiMail size={20} />} />
          </div>
        </motion.div>

        {/* Right: profile photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="mx-auto flex justify-center"
        >
          <div className="group relative animate-float">
            <div className="absolute inset-0 -z-10 scale-95 rounded-[2rem] bg-gradient-to-tr from-mint-400/40 to-amber-400/30 blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-[2rem] border border-ink-900/10 bg-ink-800/5 shadow-glass dark:border-paper-100/10 sm:h-80 sm:w-80">
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover  object-top" />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-ink-400 dark:text-paper-400">
                  <FiCamera size={36} />
                  <span className="font-mono text-xs">Replace at src/assets/profile.jpg</span>
                </div>
              )}
              {/* Edit overlay placeholder */}
              {/* <button
                type="button"
                className="absolute inset-0 flex items-center justify-center bg-ink-950/60 font-mono text-xs text-paper-100 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                aria-label="Edit profile photo"
              >
                Click to edit photo
              </button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/10 text-ink-700 transition-all duration-200 hover:-translate-y-1 hover:border-mint-400/40 hover:text-mint-500 dark:border-paper-100/10 dark:text-paper-300 dark:hover:text-mint-400"
    >
      {icon}
    </a>
  )
}
