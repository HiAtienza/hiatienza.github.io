import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([
    ".next/**",
    "out/**",
    "node_modules.partial-install-20260903/**",
    "playwright-report/**",
    "test-results/**"
  ])
]);
