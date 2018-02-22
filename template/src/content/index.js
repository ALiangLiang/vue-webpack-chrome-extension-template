{{#if components.locales}}
const __ = chrome.i18n.getMessage
console.log(__('content'))
{{/if}}
{{#unless components.locales}}
console.log('content-script!')
{{/unless}}
