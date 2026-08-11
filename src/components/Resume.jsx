import { FiDownload, FiFileText } from 'react-icons/fi'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { profile, experience, education } from '../data/portfolio'

export default function Resume() {
  return (
    <section id="resume" className="section-shell">
      <SectionHeading
        tag="Resume"
        title="Experience &amp; education"
        description="The full story — or grab the PDF version below."
      />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="glass-card-light dark:glass-card sticky top-28 flex flex-col items-center gap-5 p-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-mint-400/10 text-mint-500 dark:text-mint-400">
              <FiFileText size={28} />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-ink-900 dark:text-paper-100">
                {profile.name}
              </p>
              <p className="font-mono text-sm text-ink-700/60 dark:text-paper-400">{profile.role} — Resume.pdf</p>
            </div>
            <a href={profile.resumeFile} download className="btn-primary w-full">
              <FiDownload /> Download PDF
            </a>
            <p className="font-mono text-xs text-ink-700/40 dark:text-paper-400/40">
              Replace file at public{profile.resumeFile}
            </p>
          </div>
        </Reveal>

        <div className="space-y-10">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-amber-400">Experience</p>
            <div className="space-y-6">
              {experience.map((job, i) => (
                <Reveal key={job.role} delay={i * 0.08}>
                  <div className="glass-card-light dark:glass-card p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-paper-100">
                        {job.role}
                      </h3>
                      <span className="font-mono text-xs text-mint-500 dark:text-mint-400">{job.period}</span>
                    </div>
                    <p className="mt-1 font-mono text-sm text-ink-700/70 dark:text-paper-400">
                      {job.company} · {job.location}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm leading-relaxed text-ink-700/80 dark:text-paper-400"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mint-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-amber-400">Education</p>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <Reveal key={edu.degree} delay={i * 0.08}>
                  <div className="glass-card-light dark:glass-card flex flex-wrap items-center justify-between gap-3 p-6">
                    <div>
                      <h3 className="font-display text-base font-semibold text-ink-900 dark:text-paper-100">
                        {edu.degree}
                      </h3>
                      <p className="mt-1 font-mono text-sm text-ink-700/70 dark:text-paper-400">{edu.school}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-mint-500 dark:text-mint-400">{edu.period}</p>
                      <p className="font-mono text-xs text-ink-700/60 dark:text-paper-400">{edu.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
