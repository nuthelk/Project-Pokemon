/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        blob: "url('../src/img/blob.svg')",
        bgLogin: "url('../src/img/blob2.svg')"
      },
    },
  },
  plugins: [],
}
