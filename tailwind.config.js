/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-purple": "#3F23E5",
        "brand-purple-light": "#6D5BEF",
        "brand-purple-dark": "#2B17A0",
        "brand-gray": "#F3F4F6", // A light gray for backgrounds
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Example: Using Poppins
      },
      animation: {
        "subtle-pulse": "subtle-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 3s linear infinite", // Added from HeroSection comment
      },
      keyframes: {
        "subtle-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".7" },
        },
        // Keyframes for spin (if not already part of Tailwind's default spin)
        // Tailwind's default spin animation should work out of the box if 'spin' is a recognized keyword.
        // If 'spin 3s linear infinite' refers to custom keyframes, they would need to be defined here.
        // However, 'spin' is a default Tailwind animation, so just adding it to the animation list should suffice.
      },
    },
  },
  plugins: [],
};
