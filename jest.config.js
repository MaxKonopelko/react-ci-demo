module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@testing-library)',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
}
