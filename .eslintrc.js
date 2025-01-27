// filepath: /c:/Users/EDTECH/Documents/excelenzia/excelenzia-front/.eslintrc.js
module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/typescript/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      // Add any other custom rules here
    },
  };