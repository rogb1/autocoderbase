/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'Nunito', 'system-ui', 'sans-serif'],
      },
      animation: {
        spin: 'spin 1s linear infinite', // Default spin
        'spin-slow': 'spin-slow 16s linear infinite', // Custom slower spin
        'spin-reverse-slow': 'spin-reverse-slow 20s linear infinite', // Reverse spin
        'coin-spin': 'coin-spin 1s ease-in-out', // Coin flip animation
        'gradient': 'gradient-animation 10s ease infinite', // Gradient animation
      },
      colors: {
        // Updated Professional & Modern Colors

        primary: {
          50: '#f3f4f6',
          100: '#e5e7eb',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#1E293B', // Dark Navy
          600: '#1c2534',
          700: '#181f2a',
          800: '#141922',
          900: '#0f131a',
        },
        secondary: {
          50: '#f3f4f6',
          100: '#e5e7eb',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#1E293B', // Same as primary for consistency
          600: '#1c2534',
          700: '#181f2a',
          800: '#141922',
          900: '#0f131a',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3B82F6', // Bright Blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        
        background: {
          DEFAULT: '#F8FAFC', // Off-white
        }, 
        foreground: {
          DEFAULT: '#0F172A', // Almost Black
        },
        destructive: {
          DEFAULT: '#ef4444', // Red
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#e5e7eb', // Light Gray
          foreground: '#6b7280', // Medium Gray
        },
        border: '#e5e7eb', // Light Gray Border
        input: '#e5e7eb', // Light Gray Input
        ring: '#3B82F6', // Bright Blue Ring
        card: {
          DEFAULT: '#ffffff', // White
          foreground: '#0F172A', // Almost Black
        },
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.25rem',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          xs: "100%",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      boxShadow: {
        'profile': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        '3d': '0 10px 15px rgba(0, 0, 0, 0.3), 0 20px 25px rgba(0, 0, 0, 0.2), 0 30px 35px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};