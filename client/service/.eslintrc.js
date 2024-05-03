module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'import',
    'react',
    'react-hooks',
    '@emotion',
    'unused-imports',
    '@tanstack/query',
  ],
  rules: {
    'import/no-unresolved': 'error',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // 기본 JavaScript 규칙
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    'no-console': 'off',
    'no-debugger': 'warn',
    'no-alert': 'off',
    'no-shadow': 'off',
    // 삼항연산자 제어
    'no-nested-ternary': 'off',

    // TypeScript 규칙
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // function에 return 타입을 명시해야하는 rule 해제
    '@typescript-eslint/no-explicit-any': 'off', // any 타입 허용
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-shadow': 'off',

    // React 규칙 (선택적)
    'react/prop-types': 'off', // props의 타입체크를 처리에 proptypes가 아닌 typescript 사용 예정
    'react/display-name': 'off',

    // 글로벌 객체 eslint 제한
    'no-restricted-globals': ['error', 'event', 'fdescribe'],

    'import/no-extraneous-dependencies': 'off',

    'react/react-in-jsx-scope': 'off',

    'import/prefer-default-export': 'off', // export const 문을 쓸때 에러를 내는 rule 해제

    'react/button-has-type': 'off',

    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',

    'react/no-unknown-property': ['error', { ignore: ['css'] }],

    'react/jsx-props-no-spreading': ['warn'], // props로 받은 것 바로 props로 넘기기 허용

    'react/function-component-definition': [
      2,
      { namedcomponents: 'arrow-function' },
    ],
    '@tanstack/query/exhaustive-deps': 'off',
    '@tanstack/query/prefer-query-object-syntax': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: {
        paths: ['./'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
