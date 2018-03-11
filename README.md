# Vue.js Webpack Chrome Extension Template

[![npm](https://img.shields.io/npm/v/vue-webpack-chrome-extension-template.svg)](https://www.npmjs.com/package/vue-webpack-chrome-extension-template)

> Template for quick creation of Chrome extension on Vuejs hot reloading when developing.

## Installation:

This boilerplate was built as a template for [vue-cli](https://github.com/vuejs/vue-cli) and includes options to customize your final scaffolded app.

```bash
# install vue-cli
$ npm install -g vue-cli
# create a new project using the template
$ vue init ALiangLiang/vue-webpack-chrome-extension-template my-project
# install dependencies and go!
$ cd my-project
$ npm install # or yarn
$ npm run dev # or yarn dev
```

## Structure

```bash
.
├── build                             # core scripts
│   ├── page.ejs                      # html page boilerplate of background, options, etc.
│   ├── tools.js                      # util scripts
│   ├── webpack.base.js               # base webpack configure file
│   ├── webpack.dev.js                # configure file on developing, would merge into base
│   └── webpack.prod.js               # configure file on build, would merge into base
├── plugins                           # special webpack plugins for Chrome extension
│   ├── GenerateLocaleJsonPlugin.js   # Transform locale message."js" to "json"
│   └── GenerateManifestJsonPlugin.js # Transform your manifest."js" to "json"
├── dist                              # your runtime code. generate by program.
├── src                               # your source code
│   ├── _locales                      # Implement internationalization across your whole extension (https://developer.chrome.com/extensions/i18n)
│   ├── background                    # Background work of your extension (https://developer.chrome.com/extensions/background_pages)
│   ├── content                       # Run in the context of web pages (https://developer.chrome.com/extensions/content_scripts)
│   ├── devtools                      # It can add new UI panels and sidebars, interact with the inspected page, get information about network requests, and more. (https://developer.chrome.com/extensions/devtools)
│   ├── ext                           # Shared scripts
│   ├── options                       # To allow users to customize the behavior of your extension, you may wish to provide an options page. (https://developer.chrome.com/extensions/options)
│   ├── popup                         # The page (window) that will be displayed when the icon is clicked
│   ├── tab                           # Your application will work in a separate tab
│   └── manifest.js                   # Descriptions of the application, its rights and possibilities (https://developer.chrome.com/extensions/manifest)
├── static                            # static assets, would copy into dist directly.
│   └── icons                         # icons
├── extension.zip                     # extension package. used to upload to web store.
├── package.json                      # build scripts and dependencies
├── package-lock.json                 # npm lockfile, should be commit into git
└── yarn.lock                         # yarn lockfile, should be commit into git
```

## Pre-install

* vue
* vue-router
* lodash - Javascript util library
* element-ui - Style Framework for Vue.js

## License

MIT
