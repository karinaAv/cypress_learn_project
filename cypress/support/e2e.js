// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
require("@shelex/cypress-allure-plugin");
// Alternatively you can use CommonJS syntax:
// require('./commands')

// make folder name a parentSuite:
Cypress.Allure.reporter
  .getInterface()
  .defineSuiteLabels((titlePath, fileInfo) => {
    const [parentSuite, suite, ...subSuites] = titlePath;
    return [fileInfo.folder, parentSuite, ...subSuites];
  });
