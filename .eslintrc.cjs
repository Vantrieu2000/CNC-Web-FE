module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "next/core-web-vitals"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-explicit-any": "error", // DO NOT REMOVE, PRACTICE TYPESCRIPT PROPERLY
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-duplicate-enum-values": "warn",
    "prefer-const": "warn",
    "@next/next/no-img-element": "off",

    // '@typescript-eslint/naming-convention': [
    //     'warn',
    //     { selector: 'parameter', format: ['camelCase'] },
    //     {
    //         selector: 'variable',
    //         format: ['strictCamelCase', 'UPPER_CASE', 'PascalCase'],
    //         leadingUnderscore: 'allow',
    //     },
    //     {
    //         selector: 'variable',
    //         types: ['boolean'],
    //         format: ['strictCamelCase'],
    //         prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
    //     },
    //     {
    //         selector: 'function',
    //         format: ['PascalCase'],
    //     },
    // ],
  },
};
