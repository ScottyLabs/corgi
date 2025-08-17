import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-oxc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        copyPublicDir: false, // Don't include public/ in dist/
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            formats: ["es"],
        },
    },
});
