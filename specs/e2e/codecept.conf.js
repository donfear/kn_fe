/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*.test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:3000',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'e2e'
}