import js from '@eslint/js';
import * as mdx from 'eslint-plugin-mdx';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['build/**', '.docusaurus/**', 'node_modules/**', 'eslint.config.mjs'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...mdx.flat,
    files: ['**/*.mdx'],
    languageOptions: {
      ...mdx.flat.languageOptions,
      globals: {
        ...mdx.flat.languageOptions.globals,
        ...globals.browser,
      },
    },
  },
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
);
