import { FiFileText, FiExternalLink, FiDownload, FiCalendar, FiMapPin } from 'react-icons/fi'
import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { publications } from '../data/portfolio'

export default function Publications() {
  return (
    <section id="publications" className="section-shell">
      <SectionHeading
        tag="Publications"
        title="Research work"
        description="Peer-reviewed papers and conference presentations from ongoing academic research."
      />

      <div className="space-y-6">
        {publications.map((pub, i) => (
          <motion.article
            key={pub.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
            className="glass-card-light dark:glass-card group p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-mint"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
              {/* Icon */}
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mint-400/10 text-mint-500 dark:text-mint-400">
                <FiFileText size={26} />
              </span>

              <div className="flex-1">
                {/* Type badge */}
                <span className="inline-flex items-center rounded-full border border-mint-500/30 bg-mint-500/10 px-3 py-0.5 font-mono text-xs text-mint-400">
                  {pub.type}
                </span>

                {/* Title */}
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink-900 dark:text-paper-100 sm:text-xl">
                  {pub.title}
                </h3>

                {/* Venue */}
                <p className="mt-2 font-mono text-sm font-medium text-amber-400">{pub.venue}</p>

                {/* Meta row */}
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-ink-700/60 dark:text-paper-400/70">
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={12} />
                    {pub.organizer}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={12} />
                    {pub.date}
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-5 flex flex-wrap gap-3 border-t border-ink-900/10 pt-4 dark:border-paper-100/10">
                  {pub.doi ? (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs text-ink-900 transition-colors hover:bg-mint-400/10 hover:text-mint-500 dark:text-paper-200 dark:hover:text-mint-400"
                    >
                      <FiExternalLink size={13} /> View DOI
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs text-ink-700/40 dark:text-paper-400/40" title="Add DOI link in src/data/portfolio.js">
                      <FiExternalLink size={13} /> DOI (add link)
                    </span>
                  )}
                  {pub.pdf ? (
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs text-ink-900 transition-colors hover:bg-mint-400/10 hover:text-mint-500 dark:text-paper-200 dark:hover:text-mint-400"
                    >
                      <FiDownload size={13} /> PDF
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs text-ink-700/40 dark:text-paper-400/40" title="Add PDF link in src/data/portfolio.js">
                      <FiDownload size={13} /> PDF (add link)
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
