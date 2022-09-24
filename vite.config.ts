import { defineConfig } from "vite";
import path from "path";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],

	server: {
		port: 3000,
		strictPort: true,
	},

	envPrefix: ["VITE_"],

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
});
