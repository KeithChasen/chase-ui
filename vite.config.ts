import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'node:path';

export default defineConfig(({ command }) => {
	const isBuild = command === 'build';

	return {
		root: isBuild ? '.' : 'demo',
		plugins: [react(), isBuild && dts({ insertTypesEntry: true })].filter(
			Boolean
		),

		resolve: {
			alias: {
				'chase-ui': path.resolve(__dirname, 'src'),
			},
		},

		build: isBuild
			? {
					lib: {
						entry: 'src/index.ts',
						name: 'ChaseUI',
						fileName: format => `chase-ui.${format}.js`,
						formats: ['es', 'umd'],
					},
					rollupOptions: {
						external: ['react', 'react-dom'],
						output: {
							globals: {
								react: 'React',
								'react-dom': 'ReactDOM',
							},
						},
					},
				}
			: undefined,
	};
});
