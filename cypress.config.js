const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const cypressSplit = require("cypress-split");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressSplit(on, config);
      // modify config values
      config.defaultCommandTimeout = 10000;
      config.baseUrl = "https://example.cypress.io";
      allureWriter(on, config);
      return config;
    },
    env: {
      allureReuseAfterSpec: true,
      allureAddVideoOnPass: true,
      allure: true,
    },
  },
  videoUploadOnPass: true,
  video: true,
});
