/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      excludedFiles: ["./website/src/env.d.ts"],
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
    },
    {
      files: ["*.tsx"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
      ],
      plugins: ["react-refresh"],
      rules: {
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
      },
      settings: {
        react: { version: "detect" },
      },
    },
    {
      files: ["*.astro"],
      extends: ["plugin:astro/recommended"],
      parser: "astro-eslint-parser",
    },
  ],
};
