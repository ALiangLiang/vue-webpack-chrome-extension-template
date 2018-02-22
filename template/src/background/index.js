{{#if locales}}
const __ = chrome.i18n.getMessage
console.log(__('background'))
{{/if}}
{{#unless locales}}
console.log('background!')
{{/unless}}
