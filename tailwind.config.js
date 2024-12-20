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
            color: '#ffffff', 
            a: {
              color: '#6da8f2',
              textDecoration: 'no-underline',
              '&:hover': {
                
                textDecoration: 'underline',

              },
            'h1, h2, h3': { fontWeight: '400', color:'#1E293B' }, 
            },

            'h1, h2, h3': { fontWeight: '400', color:'#1E293B' },

            blockquote: { fontWeight: '400'}

          },
        },
      },
    },
   
  },
  plugins: [
    require('@tailwindcss/typography'),
  
  ],
}
