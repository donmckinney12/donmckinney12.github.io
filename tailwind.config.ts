// tailwind.config.ts
const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#030303", // Deep black
        accent: "#00f2ff",     // Cyber Cyan
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
};
export default config;