import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		//设置别名
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	plugins: [vue()],
	server: {
		port: 8080, //启动端口
		hmr: {
			host: "127.0.0.1",
			port: 8080,
		},
		// 设置 https 代理
		proxy: {
			"/api": {
				target: "http://172.22.93.1:8080",
				changeOrigin: true,
				rewrite: (path: string) => path.replace(/^\/api/, ""),
			},
		},
	},
});
