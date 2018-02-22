chrome.devtools.panels.create('panel', 'img/logo.png', 'pages/panel.html', function (panel) {
  {{#if components.locales}}
  const __ = chrome.i18n.getMessage
  console.log(__('devtools'))
  {{/if}}
  {{#unless components.locales}}
  console.log('devtools')
  {{/unless}}
})
