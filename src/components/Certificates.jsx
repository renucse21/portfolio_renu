import { FiAward, FiExternalLink } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import { certificates } from '../data/portfolio'

export default function Certificates() {
  return (
    <section id="certificates" className="section-shell">
      <SectionHeading
        tag="Certificates"
        title="Continuous learning"
        description="Courses, job simulations, and certifications completed alongside professional work and the M.Tech program."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <Reveal key={cert.title} delay={(i % 3) * 0.08}>
            <GlassCard className="flex h-full flex-col justify-between">
              <div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                  <FiAward size={18} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug text-ink-900 dark:text-paper-100">
                  {cert.title}
                </h3>
                <p className="mt-1.5 font-mono text-xs text-ink-700/60 dark:text-paper-400">
                  {cert.provider}
                  {cert.date ? <span className="ml-2 text-mint-500 dark:text-mint-400">· {cert.date}</span> : null}
                </p>
              </div>

              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-mint-500 hover:underline dark:text-mint-400"
                >
                  View certificate <FiExternalLink size={13} />
                </a>
              ) : (
                <span
                  className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-ink-700/40 dark:text-paper-400/40"
                  title="Add a URL in src/data/portfolio.js"
                >
                  View certificate <FiExternalLink size={13} />
                </span>
              )}
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
