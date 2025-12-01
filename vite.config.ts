import {defineConfig, UserConfig} from 'vite';

import react from '@vitejs/plugin-react';

export const viteConfig: UserConfig = {
    build: {
        outDir: './build',
        emptyOutDir: true,
        sourcemap: false,
        commonjsOptions: {
            transformMixedEsModules: true,
            ignoreTryCatch: false,
            include: [/node_modules/],
        },
        chunkSizeWarningLimit: 1000,
    },
    server: {
        host: true,
        open: true,
        port: 3000,
    },
    plugins: [
        react(),
    ],
    define: {
        global: {},
    },
};

export default defineConfig(viteConfig);
