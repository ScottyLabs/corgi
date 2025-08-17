import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-oxc";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

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
