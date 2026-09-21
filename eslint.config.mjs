import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["public/**/*.js"], languageOptions: { globals: globals.browser } },
  { files: ["server.js", "src/**/*.js"], languageOptions: { globals: globals.node } },
]);