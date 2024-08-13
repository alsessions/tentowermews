/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['"Roboto Slab"', 'serif'],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#F1F5F9',
            a: {
              color: '#6da8f2',
              textDecoration: 'no-underline',
              '&:hover': {
                
                textDecoration: 'underline',

              },
            'h1, h2, h3': { fontWeight: '400' }, 
            },
            'h1, h2, h3': { fontWeight: '400' },
            'h1, h2, h3': { color: 'white' },
            blockquote: { fontWeight: '400'},
            blockquote: { color: 'E2E8F0'}
          },
        },
      },
    },
   
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-intersect'),
  ],
}
