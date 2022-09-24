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

	// To make use of env variables
	envPrefix: ["VITE_"],

	build: {
		target: ["es2021", "chrome100", "safari13"],
		// don't minify for debug builds
		minify: !process.env.VITE_DEBUG ? "esbuild" : false,
		// produce sourcemaps for debug builds
		sourcemap: !!process.env.VITE_DEBUG,
	},

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
});
