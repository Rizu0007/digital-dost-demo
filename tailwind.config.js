/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    
      screens: {
        'xs': '0px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '2560px',
        'min-[1199px]': '1199px',
        'min-[1339px]': '1339px',
        'min-[1424px]': '1424px',
        
      
    },
    extend: {
     

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

         

      },
      backgroundImage: {
        'custom-image': "url('/CaseStudy-Full/CaseStudy-header-bg-1.webp')",
        'custom-image1':"url('/Header/hder.png')",
      },

      
    },
  },
  plugins: [],
}