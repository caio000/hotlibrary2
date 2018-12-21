// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    customLauchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          "--disable-translate",
          "--disable-extensions",
          "remote-debugging-port=9223",
          "--no-sandbox"
        ]
      }
    },
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    files: [
      'https://code.jquery.com/jquery-1.11.2.min.js',
      {
        pattern: './../node_modules/ngx-materialize/bundles/ngx-materialize.umd.js',
        included: false,
        watched: false
      }

    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};
