import { motion } from 'framer-motion'

/**
 * Signature element: every section is labeled like a self-closing
 * JSX component tag — a nod to the subject's React specialty, and
 * it doubles as a literal breadcrumb of what the section "renders".
 */
export default function SectionHeading({ tag, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-14 flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <span className="jsx-tag">
        <span className="text-ink-400 dark:text-paper-400">&lt;</span>
        {tag}
        <span className="text-ink-400 dark:text-paper-400"> /&gt;</span>
      </span>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900 dark:text-paper-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-ink-700/80 dark:text-paper-400">{description}</p>
      )}
    </motion.div>
  )
}
