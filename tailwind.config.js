import { handler as containerQueries } from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'media',
  plugins: [
    containerQueries,
    forms,
    typography,

    // Variant (pseudo class, element, etc.).
    plugin(({ addVariant }) => {
      addVariant('user-valid', '&:user-valid');
      addVariant('group-user-valid', ':merge(.group):user-valid &');
      addVariant('peer-user-valid', ':merge(.peer):user-valid ~ &');
      addVariant('user-invalid', '&:user-invalid');
      addVariant('group-user-invalid', ':merge(.group):user-invalid &');
      addVariant('peer-user-invalid', ':merge(.peer):user-invalid ~ &');
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Noto Sans Thai"', ...defaultTheme.fontFamily.sans],
        body: ['"Noto Sans Thai Looped"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        chart: {
          1: 'var(--chart-1)',
          2: 'var(--chart-2)',
          3: 'var(--chart-3)',
          4: 'var(--chart-4)',
          5: 'var(--chart-5)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
};
