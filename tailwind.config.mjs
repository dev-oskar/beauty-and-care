/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': 'var(--color-primary-50)',
          '100': 'var(--color-primary-100)',
          '200': 'var(--color-primary-200)',
          '300': 'var(--color-primary-300)',
          '400': 'var(--color-primary-400)',
          '500': 'var(--color-primary-500)',
          '600': 'var(--color-primary-600)',
          '700': 'var(--color-primary-700)',
          '800': 'var(--color-primary-800)',
          '900': 'var(--color-primary-900)',
          '950': 'var(--color-primary-950)',
        },
        base: {
          '50': 'var(--color-base-50)',
          '100': 'var(--color-base-100)',
          '200': 'var(--color-base-200)',
          '300': 'var(--color-base-300)',
          '400': 'var(--color-base-400)',
          '500': 'var(--color-base-500)',
          '600': 'var(--color-base-600)',
          '700': 'var(--color-base-700)',
          '800': 'var(--color-base-800)',
          '900': 'var(--color-base-900)',
          '950': 'var(--color-base-950)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading1: ['var(--font-heading-1)'],
        heading2: ['var(--font-heading-2)'],
        decorative: ['var(--font-decorative)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};