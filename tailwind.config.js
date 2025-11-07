/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Đảm bảo đường dẫn này khớp với cấu trúc thư mục của bạn
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Nếu bạn có thư mục src/, hãy thêm nó vào
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}