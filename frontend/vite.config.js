import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), svgr()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './src/testing/setup.js',
		coverage: {
			provider: 'v8', 
		},
	},
});
