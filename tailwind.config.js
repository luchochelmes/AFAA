/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        sans: ['Instrument Sans', 'system-ui', 'sans-serif']
      },
      colors: {
        cream: '#F7F8F5',
        ink: '#10201A',
        inkDeep: '#0A1611',
        forest: '#167A3C',
        lime: '#C6F24E',
        muted: '#5C6B63',
        border: '#E3E7E1',
        body: '#3D4A43',
        borderStrong: '#C9CFC7',
        offwhite: '#EDF0EA',
        disabledText: '#9AA69E',
        greenDeep: '#16281F',
        greenBorder: '#2C3B33',
        greenMuted: '#4A5A50',
        cream2: '#D7DED6',
        cream3: '#AFBBB2',
        amber: '#E4A33C',
        amberBg: '#FBF1E2',
        amberText: '#8A6A2E',
        blueBg: '#E9EEF4'
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    }
  },
  plugins: []
};
