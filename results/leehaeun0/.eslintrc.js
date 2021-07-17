module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier', 'react', 'react-hooks'],
  extends: [
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    // eslint rules
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // simple-import-sort plugin
    'simple-import-sort/imports': 'warn',
    // react-hooks plugin
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
