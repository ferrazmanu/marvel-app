module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'prettier',
        'import',
    ],
    rules: {
        semi: ['error', 'always'],
        "sort-imports": ["error", {
            "ignoreCase": true,
            "ignoreDeclarationSort": true,
        }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'no-use-before-define': 'off',
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.tsx'],
            },
        ],
        'import/prefer-default-export': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
        react: {
            version: 'detect',
        },
    },
}
