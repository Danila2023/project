module.exports = {
  rules: {
    camelcase: 'error',
    indent: ['error', 2],
    'no-undef': 'error',
    quotes: ['error', 'single'],
    'max-len': ['error', { code: 120 }],
    'no-trailing-spaces': 'error',
    curly: 'error',
    strict: ['error', 'never'],
    browser: true,
    devel: true,
    jquery: true,
    esversion: 8,
    node: true
  }
};
