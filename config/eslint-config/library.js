/** @type {import('eslint').Linter.Config} */

module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  plugins: ['simple-imports-sort'],
  rules: {
    'simple-import-sort/imports': 'error'
  }
}