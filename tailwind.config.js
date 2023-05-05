/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
