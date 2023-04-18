tailwind.config = {
   theme: {
      screens: {
         sm: "480px",
         md: "768px",
         lg: "976px",
         xl: "1440px",
      },
      extend: {
         fontFamily: {
            arimo: ["Arimo", "sans-serif"],
            kanit: ["Kanit", "sans-serif"],
         },
         colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: "#000000",
            red: "#ff0000",

            // Branding
            primary: {
            },
            greyscale: {
            }
         },
      },
   }
};