module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  reporters: ['default', 'jest-junit'],
  collectCoverage: true,
  setupTestFrameworkScriptFile: '<rootDir>/scripts/testSetupFile.js',
};
