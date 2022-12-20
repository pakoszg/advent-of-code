module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'airbnb',
        'eslint:recommended',
        'prettier',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'class-methods-use-this': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'import/extensions': [
            'error',
            { less: 'always', json: 'always', styled: 'always' },
        ],
        'jsx-a11y/anchor-is-valid': 'off',
        'lines-between-class-members': 0,
        'no-debugger': 1,
        'no-nested-ternary': 0,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 0,
        'no-unused-expressions': 'off',
        'no-shadow': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'prefer-destructuring': 0,
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-function-return-type': [
            1,
            {
                allowExpressions: true,
                allowHigherOrderFunctions: true,
            },
        ],
        '@typescript-eslint/prefer-optional-chain': 1,

        'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
        'no-use-before-define': 0,
        'arrow-body-style': 0,
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [`${__dirname}/src/{,**/}*.stories.ts{,x}`],
            },
        ],
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: 'styled-components',
                        message: 'Please import from styled-components/macro.',
                    },
                ],
                patterns: ['!styled-components/macro'],
            },
        ],
        'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    },
}
