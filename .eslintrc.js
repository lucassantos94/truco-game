module.exports = {
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [ '@typescript-eslint', 'jest' ],
  rules: {
    'no-useless-constructor': [ 0 ],
    '@typescript-eslint/interface-name-prefix': [ 0 ],
    '@typescript-eslint/no-explicit-any': [ 0 ],
    'semi':[1,'always']
  },
};