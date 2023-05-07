const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:1234',
    specPattern: 'e2e/*.spec.{js,ts}',
    supportFile: false,
  },
});
