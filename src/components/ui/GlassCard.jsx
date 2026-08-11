export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <div
      className={`glass-card-light dark:glass-card p-6 ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-mint' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
