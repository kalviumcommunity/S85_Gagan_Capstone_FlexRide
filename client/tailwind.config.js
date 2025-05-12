module.exports = {
    content: [
      "./src/**/*.{html,js,jsx}", // Make sure to include all your components and pages
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1D4ED8', // Blue color
          secondary: '#2563EB', // Lighter blue
          accent: '#4F46E5', // Purple accent color
        },
        spacing: {
          '72': '18rem', // Extra spacing for large elements
        },
      },
    },
    plugins: [],
  };
  