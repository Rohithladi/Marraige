

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-reverse': 'float-reverse 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1.5s ease-in',
        'fade-in-up': 'fadeInUp 1.5s ease-in',
        'heart-fall': 'fall 7s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
          
        },
        fall: {
          '0%': { transform: 'translateY(-100px)', opacity: 1 },
          '100%': { transform: 'translateY(800px)', opacity: 0 },
        },
        
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(10px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        
        fadeInUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        
      },
    },
  },
  plugins: [],
};
