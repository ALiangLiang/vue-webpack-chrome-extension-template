{{#if components.locales}}
const __ = chrome.i18n.getMessage
console.log(__('background'))
{{/if}}
{{#unless components.locales}}
console.log('background!')
{{/unless}}
