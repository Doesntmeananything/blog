module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "next",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    // Disabled for now because it conflicts with the `next` plugin, which also packages the `react-hooks` plugin
    // "plugin:react-hooks/recommended",
  ],
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    // Conflicts with next/Link: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/f6ba03cd5c206e4ca04068253ab79ad32eb929ce/docs/rules/anchor-is-valid.md#case-i-use-nextjs-and-im-getting-this-error-inside-of-links
    "jsx-a11y/anchor-is-valid": 0,
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    "import/order": [
      "warn",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "@app/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    "import/first": "warn",
    "import/newline-after-import": 1,
    "import/no-unresolved": 0,
  },
};
