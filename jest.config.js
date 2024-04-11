const nextJest = require('next/jest')
 
const createJestConfig = nextJest({
    dir: './',
})

const config = { 
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "d.ts",],
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest',
    moduleNameMapper: {
        '^.+\\.(svg)$': '<rootDir>/__mocks__/svg.js',
    }
}

module.exports = createJestConfig(config)
