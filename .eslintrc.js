module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks',
    'jsx-a11y'
  ],
  rules: {
    "react/prop-types": 1,
    'react/destructuring-assignment': 1,
    "import/newline-after-import": 1,
    "import/prefer-default-export": 2,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-closing-tag-location': 0,
    'react/self-closing-comp': 0,
    "import/imports-first": [
      "error",
      "absolute-first"
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "none",
        "singleQuote": true,
        "printWidth": 100
      }
    ],
  },
};
