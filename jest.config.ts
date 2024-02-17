const nextJest = require("next/jest");

/**@type {import('jest').Config}*/
const createJestConfig = nextJest({
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
  dir: "./",
});

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default createJestConfig(config);
