import type { Config } from 'jest';
import nextJest from 'next/jest';

const esModules = ['rehype-parse'];

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/app/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
  },
  verbose: true,
};

const jestConfig = async () => {
  const configFn = createJestConfig(config);
  const createdConfig = await configFn();

  return {
    ...createdConfig,
    transformIgnorePatterns: esModules.map(
      (module) => `node_modules/?!(${module})/`,
    ),
  };
};

export default jestConfig;
