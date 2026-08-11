import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        tag="Skills"
        title="Tools of the trade"
        description="Core technologies used day to day, grouped the way they show up in real project work."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([category, items], colIdx) => (
          <Reveal key={category} delay={colIdx * 0.1}>
            <GlassCard className="h-full">
              <p className="font-mono text-xs uppercase tracking-widest text-amber-400">{category}</p>
              <div className="mt-5 space-y-5">
                {items.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} delay={i * 0.05} />
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function SkillBar({ skill, delay }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="mb-1.5 flex items-center justify-between">
        <span className="font-mono text-sm text-ink-900 dark:text-paper-100">{skill.name}</span>
        <span className="font-mono text-xs text-ink-700/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-paper-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-900/10 dark:bg-paper-100/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-mint-400 to-amber-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay }}
        />
      </div>
    </motion.div>
  )
}
