// @ts-check
import { defineConfig } from 'vite';
import entrypoints from 'vite-plugin-entrypoints';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    root: __dirname,
    plugins: [
        entrypoints({
            entryFilePatterns: ['src/*.js'],
        }),
    ],
    build: {
        lib: {
            entry: {
                main: resolve(__dirname, 'index.js'),
            },
        },
    },
});
