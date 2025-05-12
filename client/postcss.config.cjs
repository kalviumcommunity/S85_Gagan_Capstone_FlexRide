module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),  // Add the Tailwind PostCSS plugin
    require('autoprefixer'),          // Make sure autoprefixer is also included
  ],
};
