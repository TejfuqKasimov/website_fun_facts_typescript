import { defineConfig } from 'vite';
export default defineConfig({
    root: '.', // корень проекта
    build: {
        outDir: 'dist', // выходная папка
        emptyOutDir: true,
    },
    server: {
        port: 3000,
        open: true // автоматически открыть браузер
    }
});
//# sourceMappingURL=vite.config.js.map