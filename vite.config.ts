import { defineConfig } from 'vite';
import { book } from 'vite-plugin-book/vite';

export default defineConfig({
    base: '/php-course/',
    plugins: [
        book({
            name: 'PHP course',
            path: 'docs',
            repo: 'https://github.com/intaro/php-course',
        }),
    ],
});