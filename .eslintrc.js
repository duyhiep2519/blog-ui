module.exports = {
   root: true,
   parser: '@typescript-eslint/parser',
   plugins: ['@typescript-eslint'],
   extends: [
      'react-app',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
   ],
   rules: {
      curly: 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
   },
   overrides: [
      {
         files: ['**/*.ts?(x)', '**/*.stories.*'],
         parserOptions: {
            ecmaFeatures: {
               jsx: true
            },
            project: ['./tsconfig.eslint.json'],
            tsconfigRootDir: __dirname
         },
         extends: [
            'react-app',
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/recommended-requiring-type-checking',
            'prettier'
         ],
         rules: {
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'warn',
            '@typescript-eslint/no-unsafe-call': 'warn',
            '@typescript-eslint/no-unsafe-member-access': 'warn',
            '@typescript-eslint/no-unsafe-return': 'warn',
            'import/no-anonymous-default-export': 'off'
         }
      },
      {
         files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test).[jt]s?(x)'],
         extends: ['plugin:testing-library/react'],
         rules: {
            '@typescript-eslint/no-unsafe-call': 'off'
         }
      }
   ]
};
