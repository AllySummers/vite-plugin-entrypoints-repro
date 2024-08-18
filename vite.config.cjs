// @ts-check
// @ts-ignore
const { defineConfig } = require('vite');
const { default: entrypoints } = require('vite-plugin-entrypoints');
const { resolve } = require('node:path');

module.exports = defineConfig({
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
