import { FiCode, FiLayers, FiTarget } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import { profile, stats } from '../data/portfolio'

const overviewCards = [
  {
    icon: <FiCode size={22} />,
    title: 'Component-driven',
    text: 'Builds reusable, well-tested React components with Hooks and Context API for maintainable UIs.',
  },
  {
    icon: <FiLayers size={22} />,
    title: 'Full lifecycle',
    text: 'Comfortable across the frontend lifecycle — from API integration to performance debugging.',
  },
  {
    icon: <FiTarget size={22} />,
    title: 'Agile collaborator',
    text: 'Works closely with cross-functional Agile teams to ship features within tight timelines.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading tag="About" title="Who's rendering this page" description={profile.goal} />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <GlassCard hover={false} className="h-full">
            <p className="font-mono text-xs uppercase tracking-widest text-mint-500">Summary</p>
            <p className="mt-4 text-base leading-relaxed text-ink-700/85 dark:text-paper-300">
              {profile.summary}
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-ink-900/10 pt-6 dark:border-paper-100/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-semibold text-mint-500 dark:text-mint-400">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-xs text-ink-700/60 dark:text-paper-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {overviewCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <GlassCard className="h-full">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint-400/10 text-mint-500 dark:text-mint-400">
                  {card.icon}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-900 dark:text-paper-100">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/75 dark:text-paper-400">
                  {card.text}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
