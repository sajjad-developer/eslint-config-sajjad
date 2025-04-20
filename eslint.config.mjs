import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig({
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  languageOptions: {
    globals: {
      ...globals.browser,
      $: "readonly", // Making sure `$` is globally available
    },
  },
  plugins: {
    js,
    react: pluginReact,
  },
  extends: [
    "js/recommended", // JS config
    tseslint.configs.recommended, // TypeScript config
    pluginReact.configs.flat.recommended, // React plugin config
  ],
  rules: {
    "brace-style": ["error", "allman"], // Enforcing Allman style
    "semi": ["error", "always"],  // Enforcing semicolons
  },
  settings: {
    react: {
      version: "detect", // Automatically detects the React version
    },
  },
});