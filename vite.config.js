// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/claviature.ts"),
      name: "claviature",
      // the proper extensions will be added
      fileName: "claviature",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        /* globals: {
          vue: "Vue",
        }, */
      },
    },
  },
});
