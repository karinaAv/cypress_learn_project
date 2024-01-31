const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require('@mmisty/cypress-allure-adapter/plugins');
const cypressSplit = require('cypress-split')


module.exports = defineConfig({
  env: {
    allure: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      //console.log(config) // see everything in here!

      configureAllureAdapterPlugins(on, config);
      cypressSplit(on, config)
      // modify config values
      config.defaultCommandTimeout = 10000;
      config.baseUrl = 'https://example.cypress.io';

      // modify env var value
      config.env.ENVIRONMENT = 'base';

      // IMPORTANT return the updated config object
      return config;
    },
  },
});
