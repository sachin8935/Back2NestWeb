import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow unescaped entities for better readability
      'react/no-unescaped-entities': 'off',
      // Allow HTML links (will warn but not fail build)
      '@next/next/no-html-link-for-pages': 'warn',
      // Allow unused vars (will warn but not fail build)
      '@typescript-eslint/no-unused-vars': 'warn',
      // Allow explicit any type (will warn but not fail build)
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
