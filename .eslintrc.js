module.exports = {
  extends: '@mate-academy/eslint-config-react',
  env: {
    commonjs: true,
    node: true,
    es6: true,
    browser: true
  },
  parserOptions: {
    sourceType: "module"
  },
  "globals": {
    it: false
  },
  "rules": {
    "import/prefer-default-export": 0,
    'no-console': 'off',
    "no-param-reassign": 0,
    "max-len": ["error", { "code": 100 }]
  },
};
