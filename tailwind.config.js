/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
          extend: {
                  animation: { flip: 'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite' },
                  width: { '128': '32rem' },
                  keyframes: {
                              flip: {
                                      'from': { transform: 'rotateX(0deg)', transformOrigin: '50% bottom ', },
                                      'to': { transform: 'rotateX(180deg)', transformOrigin: '50% bottom ', }
                                      }
                              },
                    fontFamily: {'redhat': ['Red Hat Text', 'sans-serif']},
                  },
         },
  plugins: [
             require('tailwind-scrollbar'),
            ],
}
