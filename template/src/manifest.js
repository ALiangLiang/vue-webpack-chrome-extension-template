/**
 * @see {@link https://developer.chrome.com/extensions/manifest}
 */
module.exports = {
  {{#if components.locales}}
  name: '__MSG_extName__', // Vue Extension
  description: '__MSG_extDescription__', // Vue.js Webpack Chrome Extension Template
  {{/if}}
  {{#unless components.locales}}
  name: '{{ name }}',
  description: '{{ description }}',
  {{/unless}}
  author: '{{ author }}',
  version: '1.0.0',
  icons: {
    '16': 'icons/16.png',
    '128': 'icons/128.png'
  },
  /**
   * @see {@link https://developer.chrome.com/extensions/declare_permissions}
   */
  permissions: [
    '<all_urls>',
    '*://*/*',
    'activeTab',
    'tabs',
    'background',
    'unlimitedStorage',
    'storage'
  ],
  browser_action: {
    default_title: 'title',
    {{#if components.popupTab}}
    default_popup: 'pages/popup.html'
    {{/if}}
  },
  {{#if components.background}}
  background: {
    persistent: false,
    page: 'pages/background.html'
  },
  {{/if}}
  {{#if components.devtool}}
  devtools_page: 'pages/devtools.html',
  {{/if}}
  {{#if components.optionPage}}
  options_page: 'pages/options.html',
  {{/if}}
  {{#if components.contentScript}}
  content_scripts: [{
    js: [
      'js/manifest.js',
      'js/vendor.js',
      'js/content.js'
    ],
    run_at: 'document_end',
    matches: ['<all_urls>'],
    all_frames: true
  }],
  {{/if}}
  {{#if components.locales}}
  default_locale: 'en',
  {{/if}}
  manifest_version: 2,
  content_security_policy: "script-src 'self'; object-src 'self'",
  web_accessible_resources: [
    {{#if components.devtool}}
    'panel.html',
    {{/if}}
    {{#if components.contentScript}}
    'js/content.js'
    {{/if}}
  ]
}
