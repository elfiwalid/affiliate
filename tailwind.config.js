module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep trust blue for authority
        primary: {
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          200: "#bfdbfe", // blue-200
          300: "#93c5fd", // blue-300
          400: "#60a5fa", // blue-400
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          800: "#1e40af", // blue-800
          900: "#1e3a8a", // blue-900
          DEFAULT: "#1e40af", // blue-800
        },
        // Secondary Colors - Professional slate for balance
        secondary: {
          50: "#f8fafc", // slate-50
          100: "#f1f5f9", // slate-100
          200: "#e2e8f0", // slate-200
          300: "#cbd5e1", // slate-300
          400: "#94a3b8", // slate-400
          500: "#64748b", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1e293b", // slate-800
          900: "#0f172a", // slate-900
          DEFAULT: "#64748b", // slate-500
        },
        // Accent Colors - Strategic red for deals urgency
        accent: {
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          200: "#fecaca", // red-200
          300: "#fca5a5", // red-300
          400: "#f87171", // red-400
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600
          700: "#b91c1c", // red-700
          800: "#991b1b", // red-800
          900: "#7f1d1d", // red-900
          DEFAULT: "#dc2626", // red-600
        },
        // Background Colors
        background: "#ffffff", // white
        surface: "#f8fafc", // slate-50
        // Text Colors
        text: {
          primary: "#0f172a", // slate-900
          secondary: "#475569", // slate-600
        },
        // Status Colors
        success: {
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
          500: "#10b981", // emerald-500
          600: "#059669", // emerald-600
          DEFAULT: "#059669", // emerald-600
        },
        warning: {
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
          DEFAULT: "#d97706", // amber-600
        },
        error: {
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600
          DEFAULT: "#dc2626", // red-600
        },
      },
      fontFamily: {
        // Headlines: Inter for modern authority
        inter: ['Inter', 'sans-serif'],
        // Body: Source Sans 3 for exceptional readability
        'source-sans': ['Source Sans 3', 'sans-serif'],
        // CTAs: Inter for consistency with headlines
        sans: ['Source Sans 3', 'sans-serif'],
        // Accents: JetBrains Mono for technical precision
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Editorial Typography Scale
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'headline': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subheading': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],
        'data': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        // Editorial Spacing Scale
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      maxWidth: {
        // Content-focused widths
        'reading': '65ch',
        'content': '75ch',
        'editorial': '85ch',
      },
      boxShadow: {
        // Editorial Shadow System
        'minimal': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevated': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'modal': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'comparison': '0 8px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        // Refined Border Radius Scale
        'card': '0.75rem',
        'button': '0.5rem',
        'input': '0.5rem',
      },
      animation: {
        // Smooth Editorial Animations
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'scale-in': 'scaleIn 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        // Editorial Timing
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        // Editorial Easing
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}