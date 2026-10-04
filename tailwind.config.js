/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#05070B',
          900: '#0A0D14',
          850: '#0E131E',
          800: '#141A28',
          700: '#1F293D',
          600: '#2F3C56',
        },
        cyber: {
          cyan: '#00F0FF',
          emerald: '#10B981',
          lime: '#45DB7D',
          amber: '#F59E0B',
          purple: '#8B5CF6',
        },
        titanium: {
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Orbitron', 'Space Grotesk', 'sans-serif'],
      },
      letterSpacing: {
        'super-wide': '0.35em',
        'ultra-wide': '0.5em',
        'mega-wide': '0.7em',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'mesh-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
        'hero-glow': 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0, 240, 255, 0.08), transparent)',
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.3)',
        'neon-lime': '0 0 25px -5px rgba(69, 219, 125, 0.3)',
        'glow-subtle': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
