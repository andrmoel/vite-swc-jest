export default {
    setupFiles: [],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': ['@swc/jest', {
            jsc: {
                parser: {
                    syntax: 'typescript',
                    tsx: true,
                },
                experimental: {
                    plugins: [
                        ['swc-plugin-import-meta-env', {}]
                    ]
                }
            },
        }],
    },
};
