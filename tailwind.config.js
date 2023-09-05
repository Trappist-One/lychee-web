/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  important: true,
  theme: {
    extend: {
      boxShadow: {
        'md-b': '0 0 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
      },
      fontFamily: {
        lychee:
          'Helvetica Neue, Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Arial, sans-serif',
      },
      colors: {
        ly: {
          "color": "var(--ly-color)",
          "gray": "var(--ly-gray)",
          "text": "var(--ly-text)",
          "primary": "var(--ly-primary)",
          "secondary": "var(--ly-secondary)",
          "accent": "var(--ly-accent)",
          "neutral": "var(--ly-neutral)",
          "base": "var(--ly-base)",
          "info": "var(--ly-info)",
          "success": "var(--ly-success)",
          "warning": "var(--ly-warning)",
          "error": "var(--ly-error)",
        },
      },
    },
  },
  plugins: [],
};
