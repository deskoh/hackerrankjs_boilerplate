module.exports = {
  root: true,
  "env": {
    "node": true
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
  ],
  "overrides": [
    {
      "files": ["**/*.ts"],
      //"excludedFiles": "**/*.js",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
    }
  ]
};
