import { motion } from 'framer-motion'
import { FiBookOpen, FiExternalLink, FiCalendar, FiMapPin } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { publications } from '../data/portfolio'

export default function Research() {
  return (
    <section id="research" className="section-shell">
      <SectionHeading
        tag="Research"
        title="Published work"
        description="Research contributions presented at peer-reviewed international conferences."
      />

      <div className="space-y-6">
        {publications.map((pub, i) => (
          <Reveal key={i} delay={0.05}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card-light dark:glass-card group overflow-hidden p-7 transition-shadow duration-300 hover:shadow-glow-mint"
            >
              {/* Top row */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-mint-500/30 bg-mint-500/10 px-3 py-1 font-mono text-xs text-mint-400">
                  <FiBookOpen size={11} /> {pub.type}
                </span>
                {pub.doi ? (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-amber-400 hover:underline"
                  >
                    DOI <FiExternalLink size={12} />
                  </a>
                ) : null}
              </div>

              {/* Title */}
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink-900 dark:text-paper-100 sm:text-xl">
                {pub.title}
              </h3>

              {/* Conference */}
              <p className="mt-2 font-mono text-sm font-medium text-amber-400">{pub.conference}</p>

              {/* Meta row */}
              <div className="mt-3 flex flex-wrap gap-4">
                <span className="flex items-center gap-1.5 font-mono text-xs text-ink-700/60 dark:text-paper-400">
                  <FiMapPin size={12} /> {pub.organizer}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-ink-700/60 dark:text-paper-400">
                  <FiCalendar size={12} /> {pub.date}
                </span>
              </div>

              {/* Note */}
              {pub.note && (
                <p className="mt-4 rounded-xl border border-mint-500/15 bg-mint-500/5 px-4 py-3 text-sm leading-relaxed text-ink-700/75 dark:text-paper-400">
                  {pub.note}
                </p>
              )}
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
