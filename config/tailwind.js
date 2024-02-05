module.exports = {
    theme: {
      fontFamily: {
        arial: ["Arial"],
     },

      screens: {
        'xxl': {'max': '1400px'},
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
        'prexl': {'max': '1200px'},
        'lg': {'max': '1090px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
        'premd': {'max': '660px'},
        'sm': {'max': '479px'},
        // => @media (max-width: 639px) { ... }
      }
    }
  }