/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*.test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:3000',
      show: false,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    productsStep: './steps/products.step.js',
  },
  name: 'e2e'
}