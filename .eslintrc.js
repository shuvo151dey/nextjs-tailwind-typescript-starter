// https://paulintrognon.fr/blog/post/typescript-prettier-eslint-next-js

module.exports = {
    root: true,
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    parser: '@typescript-eslint/parser', // the TypeScript parser we installed earlier
    parserOptions: {
        ecmaFeatures: { jsx: true }, // Allows for the parsing of JSX
    },
    extends: [
        'eslint:recommended', // eslint default rules
        'plugin:@typescript-eslint/eslint-recommended', // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended', // eslint react rules (github.com/yannickcr/eslint-plugin-react)
        'plugin:jsx-a11y/recommended', // accessibility plugin
        // Prettier plugin and recommended rules
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    rules: {
        'react/prop-types': 'off', // We turn off prop-types rule, as we will use TypeScript's types instead
        // Include .prettierrc.js rules
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    },
}
