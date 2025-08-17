import { dirname, extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-oxc";
import { glob } from "glob";
import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        libInjectCss(),
        dts({
            include: ["lib"],
            bundleTypes: true,
            tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
        }),
    ],
    build: {
        copyPublicDir: false, // Don't include public/ in dist/
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            formats: ["es"],
        },
        rollupOptions: {
            external: ["react", "react/jsx-runtime"],
            input: Object.fromEntries(
                glob
                    .sync("lib/**/*.{ts,tsx}", {
                        // Ensure stories don't end up in the bundle
                        ignore: ["lib/**/*.d.ts", "lib/**/*.stories.tsx"],
                    })
                    .map((file) => [
                        // The name of the entry point
                        // lib/nested/foo.ts becomes nested/foo
                        relative(
                            "lib",
                            file.slice(0, file.length - extname(file).length),
                        ),
                        // The absolute path to the entry file
                        // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                        fileURLToPath(new URL(file, import.meta.url)),
                    ]),
            ),
            output: {
                assetFileNames: "assets/[name][extname]",
                entryFileNames: "[name].js",
            },
        },
    },
});
