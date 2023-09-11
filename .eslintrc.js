module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: [
    'react',
    'prettier',
    'jsx-a11y',
    'react-hooks',
    '@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-floating-promises': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn'
  }
};
