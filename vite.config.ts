import path from 'path';
import copy from 'rollup-plugin-copy';
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
        copy({
            targets: [
                {
                    src: path.resolve(__dirname, '404.html'),
                    dest: path.resolve(__dirname, './dist'),
                },
            ],
            hook: 'writeBundle',
        }),
    ],
});