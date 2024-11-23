import { handler as containerQueries } from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{ts,tsx}'],
  plugins: [containerQueries, forms, typography],
  theme: {
    extend: {},
  },
};
