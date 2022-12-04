module.exports = {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './pligins/**/*{js,ts}',
      './nuxt.config.{js,ts}'
  
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily:{
          "cairo": ["Cairo"]
        },
        
          // "gradintColor": ["background-image: linear-gradient(#F9C729,#FB9633);"]
        
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }