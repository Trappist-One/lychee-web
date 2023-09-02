/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        lychee:
          'Helvetica Neue, Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Arial, sans-serif',
      },
      colors: {
        ly: {
          "bg-color": "var(--ly-bg-color)",
        },
      },
    },
  },
  plugins: [],
};
