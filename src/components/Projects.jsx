import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        tag="Projects"
        title="Things I've shipped"
        description="A selection of applications built end-to-end — from component architecture to API integration."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="glass-card-light dark:glass-card group flex h-full flex-col justify-between overflow-hidden p-7 transition-shadow duration-300 hover:shadow-glow-mint"
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-amber-400">{project.year}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-ink-900 dark:text-paper-100">
                    {project.title}
                  </h3>
                  <p className="font-mono text-sm text-mint-500 dark:text-mint-400">{project.subtitle}</p>
                </div>
                <FiArrowUpRight
                  className="mt-1 shrink-0 text-ink-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-mint-500 dark:text-paper-400"
                  size={22}
                />
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-700/80 dark:text-paper-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3 border-t border-ink-900/10 pt-5 dark:border-paper-100/10">
              <ProjectLink href={project.demo} icon={<FiExternalLink size={15} />} label="Live demo" />
              <ProjectLink href={project.github} icon={<FiGithub size={15} />} label="Source" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function ProjectLink({ href, icon, label }) {
  const isActive = Boolean(href)
  const content = (
    <>
      {icon} {label}
    </>
  )

  if (!isActive) {
    return (
      <span
        className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs text-ink-700/40 dark:text-paper-400/40"
        title="Add a link in src/data/portfolio.js"
      >
        {content}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs text-ink-900 transition-colors hover:bg-mint-400/10 hover:text-mint-500 dark:text-paper-200 dark:hover:text-mint-400"
    >
      {content}
    </a>
  )
}
