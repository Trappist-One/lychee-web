import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

// 当前执行node命令时文件夹的地址(工作目录)
const root = process.cwd();

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, root, '')
  return {
    base:'./',
    plugins: [react()],
    root: root,
    // 服务端渲染
    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: env.VITE_PORT,
      host: "0.0.0.0",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
