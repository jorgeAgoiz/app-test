module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript',
    'eslint-config-prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: "./tsconfig.json",
  },
  plugins: [
    'react'
  ],
  rules: {
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/array-type": "generic"
  }
}
