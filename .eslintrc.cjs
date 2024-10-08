module.exports = {
    root: true,
    env: { browser: true, es2021: true, node: true },
    extends: ['eslint:recommended', 'prettier'],
    ignorePatterns: ['.eslintrc.cjs'],
    parserOptions: {
        ecmaVersion: 15,
        sourceType: 'module',
    },
    rules: {
        semi: 'error',
        quotes: ['error', 'single'],
    },
    globals: {
        ROOT: 'readonly',
        RESOURCE_TYPE: 'readonly',

        // -- utils --
        random: 'readonly',
        LocalSrorageUtil: 'readonly',

        // -- Layout --
        Logo: 'readonly',
        Header: 'readonly',
        Main: 'readonly',
        Footer: 'readonly',
        Layout: 'readonly',

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

        // -- App --
        App: 'readonly',
    },
};
