module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/mocks/fileMock.js',
        '\\.(css|scss|sass|less)$': 'identity-obj-proxy'
    }
}