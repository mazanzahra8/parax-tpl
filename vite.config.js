import { resolve } from 'path'
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
        autoload: true,
        outDir: 'dist',
        emptyOutDir: true,
        manifest: true,
    },
});
