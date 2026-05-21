/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1a1a1a',
          muted: '#5a5a5a',
          faint: '#9a9a9a',
        },
        paper: {
          DEFAULT: '#fafaf7',
          warm: '#f3f1ea',
          line: '#e6e3da',
        },
        accent: {
          DEFAULT: '#3b6e8f',
          soft: '#dfe7ed',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        prose: '38rem',
        page: '76rem',
      },
    },
  },
  plugins: [],
};
