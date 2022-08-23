import 'vite-plugin-book/style.css';

import { renderBook } from 'vite-plugin-book';

renderBook({
    isProd: import.meta.env.PROD,
    baseUrl: import.meta.env.BASE_URL,
    container: '#app',
});
