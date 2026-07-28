import shape from './src/images/shape'; 

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
     boxShadow: {
        'white-glow': '0 0 20px 4px rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
}
