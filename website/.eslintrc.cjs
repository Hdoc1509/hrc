module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:astro/recommended",
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
    }
  ]
}
