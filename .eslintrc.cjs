module.exports = {
    root: true,
    env: { browser: true, es2021: true, node: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    ignorePatterns: ['.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 15,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        semi: 'error',
        quotes: ['error', 'single'],
    },
    globals: {
        RESOURCE_TYPE: 'readonly',

        // -- utils --
        random: 'readonly',
        LocalSrorageUtil: 'readonly',

        // -- Game --
        Config: 'readonly',
        ResourseLoader: 'readonly',
        CanvasDrawEngine: 'readonly',
        PhysicsEngine: 'readonly',
        ControlEngine: 'readonly',
        BaseEntity: 'readonly',
        Score: 'readonly',
        Floor: 'readonly',
        Pipe: 'readonly',
        PipeMaker: 'readonly',
        Bird: 'readonly',
        Game: 'readonly',
    },
};
