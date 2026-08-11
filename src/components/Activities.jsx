import { FiUsers, FiStar } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import { activities } from '../data/portfolio'

export default function Activities() {
  return (
    <section id="activities" className="section-shell">
      <SectionHeading
        tag="Activities"
        title="Beyond the code"
        description="Community service and extracurricular contributions during the undergraduate years."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {activities.map((act, i) => (
          <Reveal key={act.title} delay={i * 0.1}>
            <GlassCard className="flex h-full flex-col">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                  <FiUsers size={22} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-paper-100">
                    {act.title}
                  </h3>
                  <p className="mt-0.5 font-mono text-sm text-mint-500 dark:text-mint-400">{act.org}</p>
                  <p className="font-mono text-xs text-ink-700/60 dark:text-paper-400">{act.period}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {act.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-2 text-sm leading-relaxed text-ink-700/80 dark:text-paper-400"
                  >
                    <FiStar
                      size={13}
                      className="mt-1 shrink-0 text-amber-400"
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
