module.exports = {
  env: {
    browser: true,
  },
  extends: ["eslint:recommended", "plugin:astro/recommended"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
  },
  root: true,
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
};
