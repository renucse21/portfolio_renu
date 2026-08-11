import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiCheckCircle, FiSend } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import { profile } from '../data/portfolio'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hook this up to your form backend of choice (Formspree, EmailJS, etc.)
    setSubmitted(true)
    setForm(initialForm)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        tag="Contact"
        title="Let's build something"
        description="Open to Frontend Developer and Software Engineer roles — reach out any time."
      />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="space-y-5">
          <ContactRow icon={<FiMail size={18} />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactRow
            icon={<FiLinkedin size={18} />}
            label="LinkedIn"
            value="renuka-prasad-dubbaka"
            href={profile.linkedin}
          />
          <ContactRow icon={<FiGithub size={18} />} label="GitHub" value="View profile" href={profile.github} />
          <ContactRow icon={<FiMapPin size={18} />} label="Location" value={profile.location} />
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard hover={false} className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                >
                  <FiCheckCircle size={48} className="text-mint-500 dark:text-mint-400" />
                  <div>
                    <p className="font-display text-lg font-semibold text-ink-900 dark:text-paper-100">
                      Message sent
                    </p>
                    <p className="mt-1 text-sm text-ink-700/70 dark:text-paper-400">
                      Thanks for reaching out — I'll reply soon.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Message"
                    name="message"
                    as="textarea"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    <FiSend size={15} /> Send message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}

function ContactRow({ icon, label, value, href }) {
  const content = (
    <div className="glass-card-light dark:glass-card flex items-center gap-4 p-5 transition-transform duration-200 hover:-translate-y-0.5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint-400/10 text-mint-500 dark:text-mint-400">
        {icon}
      </span>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-ink-700/50 dark:text-paper-400/60">
          {label}
        </p>
        <p className="text-sm font-medium text-ink-900 dark:text-paper-100">{value}</p>
      </div>
    </div>
  )

  if (!href) return content
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block">
      {content}
    </a>
  )
}

function Field({ label, name, type = 'text', as = 'input', ...rest }) {
  const Component = as
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink-700/60 dark:text-paper-400">
        {label}
      </span>
      <Component
        type={as === 'input' ? type : undefined}
        name={name}
        className="w-full rounded-xl border border-ink-900/10 bg-white/60 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-mint-400/60 dark:border-paper-100/10 dark:bg-black/20 dark:text-paper-100"
        {...rest}
      />
    </label>
  )
}
