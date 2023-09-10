import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { loadEnv } from 'vite'

// 当前执行node命令时文件夹的地址(工作目录)
const root = process.cwd();


// https://vitejs.dev/config/
export default ({ command, mode }) => {
  console.log(command);
  const env = loadEnv((process.argv[3] === '--mode' ? process.argv[4] : process.argv[3]), root)
  console.log(env);
  return {
    plugins: [react()],
    root: root,
    // 服务端渲染
    server: {
      base: env.VITE_BASE_PATH,
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
};
