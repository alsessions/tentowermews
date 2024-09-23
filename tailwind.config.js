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
            color: '#3F3F46',
            a: {
              color: '#6da8f2',
              textDecoration: 'no-underline',
              '&:hover': {
                
                textDecoration: 'underline',

              },
            'h1, h2, h3': { fontWeight: '400', color:'#111827' }, 
            },

            'h1, h2, h3': { fontWeight: '400', color:'#111827' },

            blockquote: { fontWeight: '400'}

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
