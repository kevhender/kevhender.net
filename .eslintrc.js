module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 'off',
    'quote-props': ['error', 'as-needed'],
    'sort-imports': 'error',
    'space-before-function-paren': ['error', { named: 'never', anonymous: 'never' }],
  },
};
