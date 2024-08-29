import path from 'path';
import { fileURLToPath } from 'url';

import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import hooksPlugin from 'eslint-plugin-react-hooks';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    resolvePluginsRelativeTo: __dirname,
});

export default tseslint.config(
    {
        ignores: ['.next', '*.config.*'],
    },
    js.configs.recommended,
    // TypeScript ESLint
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
            },
        },
    },
    {
        rules: {
            "@typescript-eslint/ban-ts-comment": "error",
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/consistent-type-imports': [
                'warn',
                { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
            ],
            '@typescript-eslint/no-misused-promises': [
                'error',
                { checksVoidReturn: { attributes: false } },
            ],
            '@typescript-eslint/no-unnecessary-condition': [
                'error',
                {
                    allowConstantLoopConditions: true,
                },
            ],
        },
    },
    
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            '@next/next': nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            // TypeError: context.getAncestors is not a function
            '@next/next/no-duplicate-head': 'off',
        },
    },

    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        ...reactRecommended,
        languageOptions: {
            ...reactRecommended.languageOptions,
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
            },
        },
        rules: {
            // TypeError: context.getFirstTokens is not a function
            'react/display-name': 'off',
        },
    },

    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            'react-hooks': hooksPlugin,
        },
        rules: {
            ...hooksPlugin.configs.recommended.rules,
        },
    },
    {
        rules: {
            "object-curly-spacing": ["error", "always"],
            "@typescript-eslint/prefer-optional-chain": "off",
            "quotes": ["error", "double"],
        }
    },

    ...compat.extends('plugin:jsx-a11y/strict'),
    comments.recommended,
    eslintConfigPrettier,
);
