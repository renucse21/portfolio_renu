/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080B10',
          900: '#0D1117',
          800: '#131922',
          700: '#1B222D',
          600: '#242C38',
        },
        paper: {
          50: '#F3F6FA',
          100: '#E6EDF3',
          400: '#8B949E',
        },
        mint: {
          300: '#7FF3D9',
          400: '#5EEAD4',
          500: '#2DD4BF',
        },
        amber: {
          300: '#FBC97C',
          400: '#F5A623',
          500: '#DC8A0E',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(94,234,212,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(94,234,212,0.06) 1px, transparent 1px)',
        'glow-mint': 'radial-gradient(circle, rgba(94,234,212,0.25) 0%, rgba(94,234,212,0) 70%)',
        'glow-amber': 'radial-gradient(circle, rgba(245,166,35,0.2) 0%, rgba(245,166,35,0) 70%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-mint': '0 0 24px rgba(94, 234, 212, 0.35)',
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
