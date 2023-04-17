module.exports = {
  transform: {
    "\\.(js|ts)$": ["babel-jest", { configFile: "./jest.babel.config.js" }],
  },
};
