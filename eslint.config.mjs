import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  { files: ["**/*.ts", "**/*.tsx"], rules: { "@typescript-eslint/no-explicit-any": "error" } },
  globalIgnores([
    ".next/**",
    "out/**",
    "node_modules.partial-install-*/**",
    "playwright-report/**",
    "test-results/**"
  ])
]);
