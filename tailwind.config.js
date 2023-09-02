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
          "bg-color": "var(--ly-bg-color)",
          "bg-text": "var(--ly-bg-text)",
          "bg-primary": "var(--ly-bg-primary)",
          "bg-secondary": "var(--ly-bg-secondary)",
          "bg-accent": "var(--ly-bg-accent)",
          "bg-neutral": "var(--ly-bg-neutral)",
          "bg-base": "var(--ly-bg-base)",
          "bg-info": "var(--ly-bg-info)",
          "bg-success": "var(--ly-bg-success)",
          "bg-warning": "var(--ly-bg-warning)",
          "bg-error": "var(--ly-bg-error)",
        },
      },
    },
  },
  plugins: [],
};
