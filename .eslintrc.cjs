/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['tailwindcss'],
  rules: {
    'no-debugger': proccess.env.NODE_ENV === 'production' ? 'on' : 'off',
  },
}
