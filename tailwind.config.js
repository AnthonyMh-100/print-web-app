/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // ← Si usas /app
    "./pages/**/*.{js,ts,jsx,tsx}", // ← Si usas /pages
    "./components/**/*.{js,ts,jsx,tsx}", // ← Tus componentes
  ],
  theme: { extend: {} },
  plugins: [],
};
