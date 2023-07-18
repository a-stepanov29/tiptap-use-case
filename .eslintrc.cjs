module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        endOfLine: 'auto',
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        bracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 130,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        vueIndentScriptAndStyle: false,
      },
    ],
  },
};
