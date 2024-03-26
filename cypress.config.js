const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

const cypressSplit = require("cypress-split");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      cypressSplit(on, config);
      // modify config values
      config.defaultCommandTimeout = 10000;
      config.baseUrl = "https://example.cypress.io";

      return config;
    },
    env: {
      allureReuseAfterSpec: true,
      allureResultsPath: "allure-results",
      allureAddVideoOnPass: true,
      allure: true,
    },
  },
  videoUploadOnPass: true,
  video: true,
});
