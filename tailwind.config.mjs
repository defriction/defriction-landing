/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00A896',
        'primary-dark': '#008c7a',
        accent: '#FF7F50',
        'accent-dark': '#ff6633',
        'background-light': '#F7F9FB',
        'background-soft': '#f7f9fb',
        'background-dark': '#111c21',
        'surface-light': '#ffffff',
        'surface-dark': '#1e293b',
        'text-main': '#2D3436',
        'text-muted': '#6c7d82',
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        glow: '0 0 40px -10px rgba(71, 180, 235, 0.2)',
      },
    },
  },
  plugins: [forms, containerQueries],
};
