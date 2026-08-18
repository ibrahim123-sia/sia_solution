import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F7F6F3',
        surface: '#FFFFFF',
        charcoal: '#241F1B',
        muted: '#7C736A',
        hairline: '#E5E3DD',
        petrol: {
          DEFAULT: '#16636A',
          hover: '#0E4A50',
          tint: '#E9F1F1',
        },
        live: '#1E7A4B',
      },
      borderRadius: {
        card: '8px',
        btn: '8px',
        chip: '4px',
      },
      letterSpacing: {
        label: '0.14em',
        heading: '-0.03em',
      },
      maxWidth: {
        prose: '68ch',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
