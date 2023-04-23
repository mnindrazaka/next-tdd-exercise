module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  transform: {
    "\\.(js|ts|tsx)$": ["babel-jest", { configFile: "./jest.babel.config.js" }],
  },
  testEnvironment: "jsdom",
};
