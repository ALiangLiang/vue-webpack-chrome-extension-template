const path = require('path')
const {
  sortDependencies,
  installDependencies,
  printMessage
} = require('./utils')

module.exports = {
  helpers: {
    'raw-helper': function (options) {
      return options.fn()
    }
  },
  prompts: {
    name: {
      type: 'string',
      required: true,
      default: 'vue-webpack-chrome-extension-template',
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: true,
      label: 'Project description',
      default: 'A Chrome extension project with Vue.js'
    },
    author: {
      type: 'string',
      label: 'Author'
    },
    components: {
      type: 'checkbox',
      message: 'Select components',
      name: 'components',
      default: [ 'background', 'contentScript', 'optionPage', 'popupTab' ],
      choices: [
        { name: 'background (https://developer.chrome.com/extensions/background_pages)', value: 'background', short: 'background' },
        { name: 'content script (https://developer.chrome.com/extensions/content_scripts)', value: 'contentScript', short: 'content script' },
        { name: 'option page (https://developer.chrome.com/extensions/options)', value: 'optionPage', short: 'option page' },
        { name: 'popup and tab', value: 'popupTab' },
        { name: 'locales (https://developer.chrome.com/extensions/i18n)', value: 'locales', short: 'locales' },
        { name: 'devtool (https://developer.chrome.com/extensions/devtools)', value: 'devtool', short: 'devtool' }
      ]
    },
    autoInstall: {
      type: 'list',
      message:
        'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        { name: 'Yes, use NPM', value: 'npm', short: 'npm' },
        { name: 'Yes, use Yarn', value: 'yarn', short: 'yarn' },
        { name: 'No, I will handle that myself', value: false, short: 'no' }
      ]
    }
  },
  filters: {
    'node_modules/**': 'false',
    'dist/**': 'false',
    'src/_locales/**': 'components.locales',
    'src/background/**': 'components.background',
    'src/content/**': 'components.contentScript',
    'src/devtools/**': 'components.devtool',
    'src/options/**': 'components.optionPage',
    'src/popup/**': 'components.popupTab',
    'src/tab/**': 'components.popupTab',
    'package-lock.json': 'autoInstall === "npm"',
    'yarn.lock': 'autoInstall === "yarn"'
  },
  complete: function (data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  }
}
