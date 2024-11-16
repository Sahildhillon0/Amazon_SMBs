// rollup.config.js
import react from '@rollup/plugin-react';
import path from 'path';

export default {
    input: 'src/index.js',  // Path to your entry file
    output: {
        file: 'dist/bundle.js',  // Output bundled file
        format: 'cjs',           // Output format: CommonJS (can be 'esm', 'iife', etc.)
        sourcemap: true,         // Optional: Generates source maps for easier debugging
    },
    plugins: [
        react(),  // This is required for JSX/React support
        // You can add other plugins here if needed, like for CSS, assets, etc.
    ],
    resolve: {
        alias: {
            // Optional: Add alias for cleaner imports
            '@components': path.resolve(__dirname, 'src/components/'),
        },
    },
    external: [
        'react', 'react-dom',  // Mark these as external if you want to exclude them from the bundle (common for React projects)
    ],
};
