const colors = require('tailwindcss/colors')

module.exports= {
    purge: ['./*.html'],
    
theme:{
    extend: {
        spacing: {
            'enorme':'80rem'
        },
        transitionDuration:{
            '2000':'2000ms',
            '3000':'3000ms',
    
        },
    
        grayscale:{
            50: '50%',
    
        }
    },

    fontFamily:{
        lora: "'Lora','serif'"
    },

    colors:{
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        green: colors.green,
        blue: colors.blue,
        red: colors.rose,
        yellow: colors.amber,
    },
   

},
variants:{
    extend:{
        backgroundColor:['active'],
        grayscale:['hover','focus'],
        sepia:['hover','focus']
    }
},

}