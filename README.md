# Repro for issue with [vite-plugin-entrypoints]

https://github.com/georgwittberger/vite-plugin-entrypoints

View the vite config files at the root and test if they resolve by using these commands:
- `npm run test1` - `vite.config.cjs` works
- `npm run test2` - `vite.config.mjs` does not work
- `npm run test3` - `vite2.config.mjs` does not work
- `npm run test4` - `vite3.config.mjs` works
