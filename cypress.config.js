const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    loginInfo: {
      username: "autooperator003@yopmail.com",
      password: "Password@1234",
    },
  },

  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: false,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss",
  },

  projectId: "m14cut",

  viewportHeight:900,
  viewportWidth:1500,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
