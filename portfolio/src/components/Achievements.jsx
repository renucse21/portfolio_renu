import { FiUsers, FiZap, FiStar } from 'react-icons/fi'
import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { achievements } from '../data/portfolio'

const iconMap = {
  nss: <FiUsers size={22} />,
  fdp: <FiZap size={22} />,
  default: <FiStar size={22} />,
}

const colorMap = {
  nss: 'bg-amber-400/10 text-amber-400',
  fdp: 'bg-mint-400/10 text-mint-500 dark:text-mint-400',
  default: 'bg-paper-100/10 text-paper-400',
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeading
        tag="Achievements"
        title="Beyond the codebase"
        description="Community service, academic participation, and professional development that go beyond technical work."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: 'easeOut' }}
            className="glass-card-light dark:glass-card flex flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-mint"
          >
            {/* Icon + period row */}
            <div className="flex items-start justify-between gap-3">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                  colorMap[item.icon] ?? colorMap.default
                }`}
              >
                {iconMap[item.icon] ?? iconMap.default}
              </span>
              <span className="font-mono text-xs text-mint-500 dark:text-mint-400">{item.period}</span>
            </div>

            {/* Content */}
            <div>
              <h3 className="font-display text-base font-semibold leading-snug text-ink-900 dark:text-paper-100">
                {item.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-ink-700/60 dark:text-paper-400">{item.issuer}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-700/80 dark:text-paper-300">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
