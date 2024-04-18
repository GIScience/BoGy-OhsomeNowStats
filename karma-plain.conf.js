// Karma configuration file just for plain ts tests.
// Run with `karma start karma-plain.conf.js`
// DOES NOT WORK YET!
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: './',
    // basePath: './src/tdd/',
    singleRun: true,
    autoWatch: false,
    frameworks: ['jasmine', "karma-typescript"],
    files: [
      { pattern: 'src/tdd/**/*.spec.ts', watched: true },
    ],
    preprocessors: {
      "src/**/*.ts": "karma-typescript" // *.tsx for React Jsx
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-typescript')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/ohsome-now-stats-mock'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    browsers: ['FirefoxHeadless'],
    // browsers: ['Firefox', 'Chrome'],
    restartOnFileChange: true
  });
};
