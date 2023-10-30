import svgLoader from "vite-svg-loader";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.js",
            refresh: true,
        }),
        vue({
            template: { transformAssetUrls },
        }),
        svgLoader(),
        quasar({
            autoImportComponentCase: "combined",
            sassVariables: "resources/css/quasar-variables.sass",
        }),
    ],
});
