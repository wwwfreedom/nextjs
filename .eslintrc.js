module.exports = {
  "parser"  : "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends" : [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react"
  ],
  "env"     : {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "globals" : {
    "React": true,
    "ReactDOM": true
  },
  "rules": {
    "semi" : [2, "never"],
    /* "react-in-jsx-scope": 0,*/
    "eol-last": 0,
    "jsx-quotes": 0,
    "quotes": 0,
    "space-before-function-paren": [0, "never"],
    "space-in-parens": 0,
    "no-console": 0
  }
}
